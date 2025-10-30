import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Care & Guarantee | Alpen Wool",
    description: "How to care for your wool blanket and our quality guarantee.",
};

export default function CarePage() {
    return (
        <main>
            {/* Hero */}
            <section className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-[var(--alp-primary)]/60 via-transparent to-[var(--alp-primary)]/70" />
                <div
                    className="h-[45vh] min-h-[600px] w-full bg-bottom bg-cover bg-[url('/images/care_hero.jpg')]"
                    role="img"
                    aria-label="Workbench with natural wool and tools"
                />
                <div className="container -mt-48 pb-10">
                    <div className="max-w-3xl rounded-2xl bg-[var(--alp-primary)]/70 p-6 backdrop-blur-md ring-1 ring-[color:var(--alp-text)]/12 shadow-[0_10px_40px_-20px_rgba(0,0,0,.5)]">
                        <h1 className="text-3xl font-semibold text-[var(--alp-text)] md:text-4xl">
                            Care & Guarantee
                        </h1>
                        <span className="mt-3 block h-[3px] w-16 rounded-full bg-gradient-to-r from-[var(--alp-accent)] via-[var(--alp-accent-soft)] to-transparent" />
                        <p className="mt-3 text-[color:var(--alp-text)]/80">
                            Wool is a living, breathing fiber. With simple care, your blanket
                            will stay soft, clean, and beautiful for years to come.
                        </p>
                    </div>
                </div>
            </section>

            {/* Care Instructions */}
            <section className="container py-14 md:py-20">
                <h2 className="text-2xl font-semibold md:text-3xl">Care Instructions</h2>
                <div className="mt-6 grid gap-6 md:grid-cols-2">
                    <div className="rounded-2xl bg-white/5 p-6 backdrop-blur-sm">
                        <h3 className="text-xl font-semibold text-alp-accent">Gentle Washing</h3>
                        <p className="mt-3 text-white/80">
                            Wash rarely — wool naturally repels dirt. When needed, use cold
                            water and mild wool detergent. Hand wash or use a delicate cycle.
                        </p>
                    </div>
                    <div className="rounded-2xl bg-white/5 p-6 backdrop-blur-sm">
                        <h3 className="text-xl font-semibold text-alp-accent">Drying & Storage</h3>
                        <p className="mt-3 text-white/80">
                            Dry flat in shade. Avoid direct heat. Store in a cool, dry place,
                            folded loosely to allow air flow.
                        </p>
                    </div>
                </div>
            </section>

            {/* Quality Guarantee */}
            <section className="container py-14 md:py-20">
                <h2 className="text-2xl font-semibold md:text-3xl">Quality Guarantee</h2>
                <p className="mt-4 max-w-2xl text-white/80">
                    Each blanket is handcrafted and carefully inspected before leaving our
                    workshop. If you ever receive a piece that does not meet our quality
                    standards, we will repair or replace it free of charge.
                </p>
                <div className="mt-8 overflow-hidden rounded-2xl">
                    <img
                        src="/images/quality_check.jpg"
                        alt="Craftsman checking blanket quality"
                        className="w-full h-[600px] object-cover transition-transform duration-500 hover:scale-[1.02]"
                        loading="lazy"
                    />
                </div>
            </section>

            {/* Trust Message */}
            <section className="bg-[var(--alp-bg)] py-14 md:py-20">
                <div className="container text-center">
                    <h2 className="text-2xl font-semibold md:text-3xl text-alp-accent">
                        Handmade with Swiss Standards
                    </h2>
                    <p className="mt-4 max-w-2xl mx-auto text-white/80">
                        Every stitch carries warmth and intention. Our blankets are more
                        than fabric — they’re a promise of comfort, honesty, and lasting
                        beauty.
                    </p>
                </div>
            </section>
        </main>
    );
}
