import { CheckCircle, Feather, Shield, Leaf, LucideIcon } from "lucide-react";
import type { JSX } from "react";

interface AdvantageItem {
    icon: LucideIcon;
    title: string;
    text: string;
}

const items: AdvantageItem[] = [
    { icon: Leaf, title: "100% natural wool", text: "Breathable, warm, and sustainably sourced." },
    { icon: Feather, title: "Soft & comfortable", text: "Gentle touch thanks to careful fiber selection." },
    { icon: Shield, title: "Built to last", text: "Dense weave and reinforced edges for durability." },
    { icon: CheckCircle, title: "Handcrafted quality", text: "Each blanket is made by hand and inspected." },
];

export default function Advantages(): JSX.Element {
    return (
        <section aria-labelledby="advantages-title" className="relative overflow-hidden bg-alp-primary text-alp-text">
            <div className="mx-auto container px-4 py-16 md:py-24">
                {/* heading */}
                <header className="max-w-2xl">
                    <h2 id="advantages-title" className="text-3xl font-semibold md:text-4xl">
                        Why our blankets
                    </h2>
                    <p className="mt-3 text-alp-text/80">
                        Short line about the core value of natural materials and careful craftsmanship.
                    </p>
                </header>

                {/* grid */}
                <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {items.map(({ icon: Icon, title, text }) => (
                        <div
                            key={title}
                            className="group rounded-2xl border border-alp-accent/20 bg-alp-bg/60 p-6 backdrop-blur-sm transition hover:bg-alp-bg/80"
                        >
                            <Icon className="h-6 w-6 flex-none text-alp-accent" />
                            <h3 className="mt-4 text-lg font-medium">{title}</h3>
                            <p className="mt-2 text-sm text-alp-text/80">{text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
