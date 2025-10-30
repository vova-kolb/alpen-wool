import type { Product } from "./types";

// Sample products to seed the database
export const seedProducts: Omit<Product, "id" | "createdAt" | "updatedAt">[] = [
  {
    slug: "alpaca-throw-sand",
    title: "Alpaca Throw — Sand",
    short: "Soft, breathable wool throw with subtle herringbone weave. Perfect for cozy evenings on the couch.",
    images: [
      { src: "/images/products/1.jpg", alt: "Alpaca throw in sand color" },
      { src: "/images/products/1.jpg", alt: "Alpaca throw detail" },
      { src: "/images/products/1.jpg", alt: "Alpaca throw texture" },
    ],
    material: "100% Alpaca Wool",
    size: "130 x 180 cm",
    weight: "850 g",
    isAvailable: true,
  },
  {
    slug: "merino-quilt-cappuccino",
    title: "Merino Quilt — Cappuccino",
    short: "Warm yet lightweight quilt crafted from natural merino wool. Ideal for all seasons.",
    images: [
      { src: "/images/products/1.jpg", alt: "Merino quilt in cappuccino" },
      { src: "/images/products/1.jpg", alt: "Merino quilt folded" },
    ],
    material: "100% Merino Wool",
    size: "150 x 200 cm",
    weight: "1.2 kg",
    isAvailable: true,
  },
  {
    slug: "classic-loom-deep-blue",
    title: "Classic Loom Blanket — Deep Blue",
    short: "Handwoven blanket inspired by Swiss craftsmanship. A timeless piece for your home.",
    images: [
      { src: "/images/products/1.jpg", alt: "Classic loom blanket in deep blue" },
      { src: "/images/products/1.jpg", alt: "Classic loom blanket weave pattern" },
      { src: "/images/products/1.jpg", alt: "Classic loom blanket draped" },
    ],
    material: "85% Wool, 15% Cotton",
    size: "140 x 200 cm",
    weight: "1.5 kg",
    isAvailable: true,
  },
  {
    slug: "alpine-comfort-grey",
    title: "Alpine Comfort — Heather Grey",
    short: "Extra soft blanket with a modern minimalist design. Made from premium mountain wool.",
    images: [
      { src: "/images/products/1.jpg", alt: "Alpine comfort blanket in heather grey" },
      { src: "/images/products/1.jpg", alt: "Alpine comfort blanket corner detail" },
    ],
    material: "100% Mountain Wool",
    size: "160 x 220 cm",
    weight: "1.8 kg",
    isAvailable: true,
  },
  {
    slug: "heritage-plaid-forest",
    title: "Heritage Plaid — Forest Green",
    short: "Traditional plaid pattern meets contemporary comfort. A statement piece for any room.",
    images: [
      { src: "/images/products/1.jpg", alt: "Heritage plaid blanket in forest green" },
      { src: "/images/products/1.jpg", alt: "Heritage plaid blanket pattern" },
      { src: "/images/products/1.jpg", alt: "Heritage plaid blanket in living room" },
    ],
    material: "90% Wool, 10% Cashmere",
    size: "145 x 195 cm",
    weight: "1.3 kg",
    isAvailable: true,
  },
  {
    slug: "cozy-nights-cream",
    title: "Cozy Nights — Cream",
    short: "Luxuriously thick blanket with a cloud-like texture. Your perfect companion for cold winter nights.",
    images: [
      { src: "/images/products/1.jpg", alt: "Cozy nights blanket in cream" },
      { src: "/images/products/1.jpg", alt: "Cozy nights blanket texture close-up" },
    ],
    material: "100% Merino Wool",
    size: "155 x 210 cm",
    weight: "2.0 kg",
    isAvailable: true,
  },
];

