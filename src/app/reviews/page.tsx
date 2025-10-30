import type { Metadata } from "next";
import ReviewsSection from "@/components/reviews/ReviewsSection";

export const metadata: Metadata = {
    title: "Reviews | Alpen Wool",
    description: "Read customer reviews and share your own experience.",
};

export default function ReviewsPage() {
    return (
        <main>
            <section className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-[var(--alp-primary)]/60 via-transparent to-[var(--alp-primary)]/70" />
                <div
                    className="h-[38vh] min-h-[600px] w-full bg-center bg-cover bg-[url('/images/reviews_hero.jpg')]"
                    role="img"
                    aria-label="Cozy living room with a wool blanket"
                />
                <div className="container -mt-40 pb-10">
                    <div className="max-w-3xl rounded-2xl bg-[var(--alp-primary)]/70 p-6 backdrop-blur-md ring-1 ring-[color:var(--alp-text)]/12 shadow-[0_10px_40px_-20px_rgba(0,0,0,.5)]">
                        <h1 className="text-3xl font-semibold md:text-4xl">Customer Reviews</h1>
                        <span className="mt-3 block h-[3px] w-16 rounded-full bg-gradient-to-r from-[var(--alp-accent)] via-[var(--alp-accent-soft)] to-transparent" />
                        <p className="mt-3 text-[color:var(--alp-text)]/80">
                            Real impressions from people who chose our handmade wool blankets.
                        </p>
                    </div>
                </div>
            </section>

            <ReviewsSection />
        </main>
    );
}