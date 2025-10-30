"use client";
import React from "react";
import ProductCard from "./ProductCard";
import { getProducts } from "@/lib/products";
import type { Product } from "@/lib/types";

const PLACEHOLDER_IMG = "/images/placeholders/blanket.jpg";

export default function ProductGrid({ products }: { products?: Product[] }) {
    const [items, setItems] = React.useState<Product[] | null>(products ?? null);
    const [loading, setLoading] = React.useState(!products);
    const [err, setErr] = React.useState<string | null>(null);

    React.useEffect(() => {
        if (products) return;
        getProducts()
            .then((list) => setItems(list))
            .catch((e) => setErr(e?.message ?? "Error"))
            .finally(() => setLoading(false));
    }, [products]);

    return (
        <section className="container mx-auto">
            <header className="mb-8 flex flex-col gap-2 text-center">
                <h2 className="text-3xl font-semibold text-alp-text">Our Wool Blankets</h2>
                <p className="text-sm text-white/70 max-w-2xl mx-auto">
                    Discover handcrafted blankets made from natural wool — each piece carries warmth, texture,
                    and a timeless sense of comfort. Designed for cozy evenings and peaceful interiors.
                </p>
                <div className="mx-auto mt-2 h-1 w-16 rounded bg-alp-accent/90" />
            </header>

            {loading && (
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-8">
                    {[...Array(3)].map((_, i) => (
                        <div key={i} className="h-[360px] animate-pulse rounded-2xl bg-white/5" />
                    ))}
                </div>
            )}

            {err && <p className="text-center text-sm text-red-400">Failed to load products: {err}</p>}

            {items && (
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-8">
                    {items.map((p) => (
                        <ProductCard
                            key={p.id}
                            product={{
                                id: p.id,
                                slug: p.slug,
                                title: p.title,
                                short: p.short,
                                images: p.images?.length ? p.images : [{ src: PLACEHOLDER_IMG }],
                            }}
                        />
                    ))}
                </div>
            )}
        </section>
    );
}