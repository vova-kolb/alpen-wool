import type { Metadata } from "next";
import BrandStory from "@/components/about/BrandStory";
import Values from "@/components/about/Values";
import WorkshopGallery from "@/components/about/WorkshopGallery";

export const metadata: Metadata = {
    title: "About | Alpen Wool",
    description: "Handmade wool blankets — our story, values, and craftsmanship.",
};

export default function AboutPage() {
    return (
        <main>
            {/* Intro Hero */}
            <section className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-[var(--alp-primary)]/60 via-transparent to-[var(--alp-primary)]/70" />
                <div
                    className="h-[45vh] min-h-[600px] w-full bg-bottom bg-cover bg-[url('/images/about_hero.jpg')]"
                    role="img"
                    aria-label="Workbench with natural wool and tools"
                />
                <div className="container -mt-48 pb-10">
                    <div className="max-w-3xl rounded-2xl bg-[var(--alp-primary)]/70 p-6 backdrop-blur-md ring-1 ring-[color:var(--alp-text)]/12 shadow-[0_10px_40px_-20px_rgba(0,0,0,.5)]">
                        <h1 className="text-3xl font-semibold text-[var(--alp-text)] md:text-4xl">About</h1>
                        <p className="mt-3 text-[color:var(--alp-text)]/80">
                            We create handmade wool blankets — slow, mindful, and authentic.
                            Below you can explore our story, values, and a glimpse into the
                            workshop where each piece is born.
                        </p>
                    </div>
                </div>
            </section>

            <BrandStory />
            <Values />
            <WorkshopGallery />
        </main>
    );
}
