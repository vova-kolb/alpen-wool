/**
 * Seed script to populate Firebase with initial product data
 * Run this script once to add products to your database
 * 
 * Usage: node -r esbuild-register src/scripts/seedProducts.ts
 * Or add to package.json scripts: "seed": "tsx src/scripts/seedProducts.ts"
 */

import { addProduct, getProducts } from "../lib/products";
import { seedProducts } from "../lib/seedData";

async function seedDatabase() {
  console.log("🌱 Starting database seeding...\n");

  try {
    // Check if products already exist
    const existingProducts = await getProducts();
    
    if (existingProducts.length > 0) {
      console.log(`⚠️  Database already contains ${existingProducts.length} product(s).`);
      console.log("Do you want to continue? This will add more products.\n");
      // In a real scenario, you might want to add a prompt here
      // For now, we'll just skip if products exist
      console.log("Skipping seed. Delete existing products first if you want to re-seed.");
      return;
    }

    // Add each product
    let successCount = 0;
    for (const product of seedProducts) {
      try {
        const id = await addProduct(product);
        console.log(`✅ Added: ${product.title} (ID: ${id})`);
        successCount++;
      } catch (error) {
        console.error(`❌ Failed to add ${product.title}:`, error);
      }
    }

    console.log(`\n🎉 Seeding complete! Added ${successCount}/${seedProducts.length} products.`);
  } catch (error) {
    console.error("❌ Seeding failed:", error);
    process.exit(1);
  }
}

// Run the seed function
seedDatabase();

