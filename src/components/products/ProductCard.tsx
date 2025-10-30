"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export type Product = {
    id: string;
    slug: string;
    title: string;
    short: string;
    images: { src: string; alt?: string }[];
};

export default function ProductCard({ product }: { product: Product }) {
    const [index, setIndex] = React.useState(0);
    const total = product.images.length;

    function go(step: number) {
        setIndex((prev) => (prev + step + total) % total);
    }

    return (
        <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-alp-primary text-alp-text shadow-[0_6px_24px_-10px_rgba(0,0,0,.6)] transition-all hover:shadow-[0_10px_34px_-12px_rgba(0,0,0,.75)]">
            {/* Image slider */}
            <div className="relative aspect-[4/3] w-full overflow-hidden">
                {product.images.map((img, i) => (
                    <Image
                        key={i}
                        src={img.src}
                        alt={img.alt ?? product.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className={
                            "object-cover transition-transform duration-500 " +
                            (i === index ? "translate-x-0" : i < index ? "-translate-x-full" : "translate-x-full")
                        }
                    />
                ))}

                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/40 to-transparent" />

                <button
                    onClick={() => go(-1)}
                    className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-alp-bg/70 p-2 backdrop-blur hover:bg-alp-bg/90"
                    aria-label="Previous image"
                >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                         strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="m15 18-6-6 6-6" />
                    </svg>
                </button>
                <button
                    onClick={() => go(1)}
                    className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-alp-bg/70 p-2 backdrop-blur hover:bg-alp-bg/90"
                    aria-label="Next image"
                >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                         strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="m9 18 6-6-6-6" />
                    </svg>
                </button>

                <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 gap-1.5">
                    {product.images.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setIndex(i)}
                            className={"h-1.5 w-1.5 rounded-full " + (i === index ? "bg-alp-accent" : "bg-white/60 hover:bg-white/80")}
                            aria-label={`Go to image ${i + 1}`}
                        />
                    ))}
                </div>
            </div>

            {/* Body */}
            <div className="flex flex-1 flex-col gap-3 p-4">
                <h3 className="text-base font-semibold leading-tight md:text-lg">{product.title}</h3>
                <p className="line-clamp-3 text-sm/6 text-white/80">{product.short}</p>
                <div className="mt-auto flex gap-3 pt-2">
                    <button
                        type="button"
                        className="inline-flex flex-1 items-center justify-center rounded-xl bg-alp-accent px-4 py-2.5 text-sm font-semibold text-alp-primary shadow-[inset_0_-2px_0_rgba(0,0,0,.12)] transition-colors hover:brightness-95 focus:outline-none focus:ring-2 focus:ring-alp-accent/40 cursor-pointer"
                    >
                        Order now
                    </button>

                    <Link
                        href={`/product/${product.slug}`}
                        className="inline-flex flex-1 items-center justify-center rounded-xl border border-white/15 px-4 py-2.5 text-sm font-semibold text-alp-text transition-colors hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-white/20"
                    >
                        Show more
                    </Link>
                </div>
            </div>
        </div>
    );
}
