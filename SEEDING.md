# Database Seeding Instructions

## Overview
This project includes 6 pre-configured blanket products that can be seeded into your Firebase database.

## Product Data
The seed data is located in `src/lib/seedData.ts` and includes:

1. **Alpaca Throw — Sand** - 100% Alpaca Wool
2. **Merino Quilt — Cappuccino** - 100% Merino Wool
3. **Classic Loom Blanket — Deep Blue** - 85% Wool, 15% Cotton
4. **Alpine Comfort — Heather Grey** - 100% Mountain Wool
5. **Heritage Plaid — Forest Green** - 90% Wool, 10% Cashmere
6. **Cozy Nights — Cream** - 100% Merino Wool

## How to Seed the Database

### Method 1: Via API Route (Recommended)

1. Make sure your Firebase configuration is set up in `src/lib/firebase.ts`
2. Start your development server:
   ```bash
   npm run dev
   ```
3. Visit the seed endpoint in your browser:
   ```
   http://localhost:3000/api/seed
   ```
4. You'll see a JSON response confirming the products were added

### Method 2: Via Script

1. Install tsx if you haven't already:
   ```bash
   npm install -D tsx
   ```
2. Run the seed script:
   ```bash
   npx tsx src/scripts/seedProducts.ts
   ```

## Important Notes

- The seeding process will **not** add products if any already exist in the database
- To re-seed, you must first delete existing products from Firebase
- All products include:
  - Unique slug for URL routing
  - Title and short description
  - Multiple images (placeholder paths)
  - Material, size, and weight specifications
  - Availability status

## After Seeding

Once seeded, your products will appear automatically on:
- Home page product grid
- Individual product detail pages (via `/product/[slug]`)

## Customizing Products

To modify the seed data:
1. Edit `src/lib/seedData.ts`
2. Update product images in the `public/images/products/` directory
3. Re-run the seeding process (after clearing existing products)

