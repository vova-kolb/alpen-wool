import ProductDetail from "../../../components/products/ProductDetail";
import { seedProducts } from "@/lib/seedData";

export async function generateStaticParams() {
    return seedProducts.map((p) => ({ slug: p.slug }));
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    return <ProductDetail slug={slug} />;
}
