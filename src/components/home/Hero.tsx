"use client";

import Image from "next/image";
import { Check } from "lucide-react";
import type { JSX } from "react";

export default function Hero(): JSX.Element {
    return (
        <section className="relative h-[70vh] min-h-[520px] w-full overflow-hidden">
            {/* background image */}
            <Image
                src="/images/hero.jpg"
                alt="Handmade wool blanket"
                fill
                priority
                sizes="100vw"
                className="object-cover"
            />

            {/* left overlay using softer gradient */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-alp-primary/100 via-alp-primary/10 to-transparent" />

            {/* content container */}
            <div className="relative z-10 mx-auto max-w-[1400px] px-4">
                <div className="flex h-[70vh] min-h-[520px] items-center">
                    <div className="max-w-2xl text-alp-text">
                        {/* small pill */}
                        <div className="inline-flex items-center gap-2 rounded-full border border-alp-text/20 bg-alp-bg/60 px-3 py-1 text-xs backdrop-blur">
                            <span className="h-2 w-2 rounded-full bg-alp-accent" />
                            Handmade wool blankets
                        </div>

                        {/* title */}
                        <h1 className="mt-5 text-4xl font-semibold leading-tight md:text-5xl">
                            Warmth, Craft, <span className="text-alp-accent">Quality</span>
                        </h1>

                        {/* subtitle */}
                        <p className="mt-4 max-w-xl text-base text-alp-text/85 md:text-lg">
                            Minimal copy for now. Short value line about natural wool, handmade production, and lasting comfort.
                        </p>

                        {/* CTAs */}
                        <div className="mt-8 flex flex-wrap items-center gap-3">
                            <a
                                href="#catalog"
                                className="rounded-xl bg-alp-accent px-5 py-3 text-sm font-medium text-[#111] transition hover:bg-alp-accent-soft"
                            >
                                Shop blankets
                            </a>
                            <a
                                href="#contact"
                                className="rounded-xl border border-alp-text/30 px-5 py-3 text-sm font-medium text-alp-text transition hover:bg-alp-bg/50"
                            >
                                Contact us
                            </a>
                        </div>

                        {/* trust bullets */}
                        <ul className="mt-6 grid gap-3 text-alp-text/90 sm:grid-cols-2">
                            {[
                                "100% natural wool",
                                "Handmade craftsmanship",
                                "Soft & durable",
                                "Swiss quality standards",
                            ].map((item: string) => (
                                <li key={item} className="flex items-start gap-2">
                                    <Check className="mt-0.5 h-5 w-5 flex-none text-alp-accent" />
                                    <span className="text-sm">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
