import { NextResponse } from "next/server";
import { addProduct, getProducts } from "@/lib/products";
import { seedProducts } from "@/lib/seedData";

/**
 * API route to seed the database with initial products
 * Visit: http://localhost:3000/api/seed
 * 
 * This will only add products if the database is empty
 */
export async function GET() {
  try {
    // Check if products already exist
    const existingProducts = await getProducts();
    
    if (existingProducts.length > 0) {
      return NextResponse.json({
        success: false,
        message: `Database already contains ${existingProducts.length} product(s). Delete them first to re-seed.`,
        existingCount: existingProducts.length,
      }, { status: 400 });
    }

    // Add each product
    const results = [];
    for (const product of seedProducts) {
      try {
        const id = await addProduct(product);
        results.push({ success: true, title: product.title, id });
      } catch (error: any) {
        results.push({ 
          success: false, 
          title: product.title, 
          error: error?.message ?? "Unknown error" 
        });
      }
    }

    const successCount = results.filter(r => r.success).length;

    return NextResponse.json({
      success: true,
      message: `Successfully added ${successCount}/${seedProducts.length} products`,
      results,
    });
  } catch (error: any) {
    return NextResponse.json({
      success: false,
      message: "Failed to seed database",
      error: error?.message ?? "Unknown error",
    }, { status: 500 });
  }
}

