import Image from "next/image";
import type { JSX } from "react";

export default function HomeCTA(): JSX.Element {
    return (
        <section className="relative overflow-hidden mt-20">
            {/* background image */}
            <Image
                src="/images/homeCTA_bg.jpg"
                alt="Cozy wool blanket and warm light scene"
                fill
                priority
                sizes="100vw"
                className="object-cover"
            />

            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,var(--color-alp-primary)/70_0%,var(--color-alp-primary)/40_35%,transparent_75%)]" />

            {/* content */}
            <div className="relative z-10 mx-auto container px-4 py-24 text-center text-alp-text">
                <h2 className="text-3xl font-semibold md:text-4xl">
                    Experience the comfort of natural wool
                </h2>

                <p className="mx-auto mt-4 max-w-2xl text-alp-text/85">
                    Handmade blankets designed to bring warmth, softness, and timeless style to your home.
                </p>

                <div className="mt-8 flex flex-wrap justify-center gap-4">
                    <a
                        href="#catalog"
                        className="rounded-xl bg-alp-accent px-6 py-3 text-sm font-medium text-[#111] transition hover:bg-alp-accent-soft"
                    >
                        Shop Now
                    </a>
                    <a
                        href="/contacts"
                        className="rounded-xl border border-alp-accent px-6 py-3 text-sm font-medium text-alp-accent transition hover:bg-alp-accent/10"
                    >
                        Contact Us
                    </a>
                </div>
            </div>
        </section>
    );
}
