import { NextResponse } from "next/server";
import { addProduct, getProducts } from "../../../lib/products";
import { seedProducts } from "../../../lib/seedData";

/**
 * API route to seed the database with initial products
 * Visit: http://localhost:3000/api/seed
 * 
 * This will only add products if the database is empty
 */
export async function GET() {
  try {
    const existingProducts = await getProducts();
    
    if (existingProducts.length > 0) {
      return NextResponse.json({
        success: false,
        message: `Database already contains ${existingProducts.length} product(s). Delete them first to re-seed.`,
        existingCount: existingProducts.length,
      }, { status: 400 });
    }

    const results = [];
    for (const product of seedProducts) {
      try {
        const id = await addProduct(product);
        results.push({ success: true, title: product.title, id });
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : "Unknown error";
        results.push({ 
          success: false, 
          title: product.title, 
          error: errorMessage
        });
      }
    }

    const successCount = results.filter(r => r.success).length;

    return NextResponse.json({
      success: true,
      message: `Successfully added ${successCount}/${seedProducts.length} products`,
      results,
    });
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json({
      success: false,
      message: "Failed to seed database",
      error: errorMessage,
    }, { status: 500 });
  }
}

