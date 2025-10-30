"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { getProductBySlug } from "@/lib/products";
import type { Product } from "@/lib/types";

type ProductPageProps = {
    params: Promise<{ slug: string }>;
};

export default function ProductPage({ params }: ProductPageProps) {
    const [product, setProduct] = React.useState<Product | null>(null);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState<string | null>(null);
    const [currentImageIndex, setCurrentImageIndex] = React.useState(0);

    React.useEffect(() => {
        params.then(({ slug }) => {
            getProductBySlug(slug)
                .then((data) => {
                    if (!data) {
                        setError("Product not found");
                    } else {
                        setProduct(data);
                    }
                })
                .catch((e) => setError(e?.message ?? "Failed to load product"))
                .finally(() => setLoading(false));
        });
    }, [params]);

    if (loading) {
        return (
            <main className="container mx-auto min-h-screen py-12">
                <div className="animate-pulse">
                    <div className="h-96 w-full rounded-2xl bg-white/5" />
                    <div className="mt-8 h-12 w-3/4 rounded bg-white/5" />
                    <div className="mt-4 h-6 w-1/2 rounded bg-white/5" />
                </div>
            </main>
        );
    }

    if (error || !product) {
        return (
            <main className="container mx-auto min-h-screen py-12 text-center">
                <h1 className="text-3xl font-semibold text-alp-text mb-4">
                    {error || "Product not found"}
                </h1>
                <Link
                    href="/"
                    className="inline-flex items-center justify-center rounded-xl bg-alp-accent px-6 py-3 text-sm font-semibold text-alp-primary transition-colors hover:brightness-95"
                >
                    Back to Home
                </Link>
            </main>
        );
    }

    const images = product.images?.length ? product.images : [{ src: "/images/products/1.jpg" }];

    return (
        <main className="container mx-auto py-12">
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
                {/* Image Gallery */}
                <div className="space-y-4">
                    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-white/10 bg-alp-primary">
                        <Image
                            src={images[currentImageIndex].src}
                            alt={images[currentImageIndex].alt ?? product.title}
                            fill
                            sizes="(max-width: 1024px) 100vw, 50vw"
                            className="object-cover"
                            priority
                        />
                        {images.length > 1 && (
                            <>
                                <button
                                    onClick={() => setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length)}
                                    className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-alp-bg/70 p-3 backdrop-blur hover:bg-alp-bg/90"
                                    aria-label="Previous image"
                                >
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                         strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="m15 18-6-6 6-6" />
                                    </svg>
                                </button>
                                <button
                                    onClick={() => setCurrentImageIndex((prev) => (prev + 1) % images.length)}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-alp-bg/70 p-3 backdrop-blur hover:bg-alp-bg/90"
                                    aria-label="Next image"
                                >
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                         strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="m9 18 6-6-6-6" />
                                    </svg>
                                </button>
                            </>
                        )}
                    </div>
                    {images.length > 1 && (
                        <div className="flex gap-2 overflow-x-auto">
                            {images.map((img, i) => (
                                <button
                                    key={i}
                                    onClick={() => setCurrentImageIndex(i)}
                                    className={
                                        "relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-lg border-2 transition-all " +
                                        (i === currentImageIndex ? "border-alp-accent" : "border-white/10 hover:border-white/30")
                                    }
                                >
                                    <Image
                                        src={img.src}
                                        alt={img.alt ?? `${product.title} ${i + 1}`}
                                        fill
                                        sizes="80px"
                                        className="object-cover"
                                    />
                                </button>
                            ))}
                        </div>
                    )}
                </div>

                {/* Product Info */}
                <div className="flex flex-col gap-6">
                    <div>
                        <h1 className="text-3xl font-bold text-alp-text lg:text-4xl">{product.title}</h1>
                        <div className="mt-3 h-1 w-16 rounded bg-alp-accent/90" />
                    </div>

                    <p className="text-base text-white/80 leading-relaxed">{product.short}</p>

                    {(product.material || product.size || product.weight) && (
                        <div className="space-y-3 rounded-xl border border-white/10 bg-white/5 p-4">
                            <h3 className="text-sm font-semibold uppercase tracking-wide text-alp-accent">
                                Product Details
                            </h3>
                            {product.material && (
                                <div className="flex justify-between text-sm">
                                    <span className="text-white/60">Material:</span>
                                    <span className="text-alp-text">{product.material}</span>
                                </div>
                            )}
                            {product.size && (
                                <div className="flex justify-between text-sm">
                                    <span className="text-white/60">Size:</span>
                                    <span className="text-alp-text">{product.size}</span>
                                </div>
                            )}
                            {product.weight && (
                                <div className="flex justify-between text-sm">
                                    <span className="text-white/60">Weight:</span>
                                    <span className="text-alp-text">{product.weight}</span>
                                </div>
                            )}
                        </div>
                    )}

                    <div className="mt-auto flex flex-col gap-3">
                        {product.isAvailable !== false ? (
                            <button
                                type="button"
                                className="inline-flex items-center justify-center rounded-xl bg-alp-accent px-6 py-4 text-base font-semibold text-alp-primary shadow-[inset_0_-2px_0_rgba(0,0,0,.12)] transition-colors hover:brightness-95 focus:outline-none focus:ring-2 focus:ring-alp-accent/40"
                            >
                                Order Now
                            </button>
                        ) : (
                            <div className="rounded-xl border border-white/10 bg-white/5 px-6 py-4 text-center text-sm text-white/60">
                                Currently Unavailable
                            </div>
                        )}
                        <Link
                            href="/"
                            className="inline-flex items-center justify-center rounded-xl border border-white/15 px-6 py-3 text-sm font-semibold text-alp-text transition-colors hover:bg-white/5"
                        >
                            Back to Products
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    );
}
