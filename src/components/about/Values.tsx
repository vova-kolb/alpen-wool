type Value = {
    title: string;
    text: string;
};

const values: Value[] = [
    {
        title: "Quality First",
        text: "We carefully select premium wool and ensure every stitch is precise — our blankets are made to last for years.",
    },
    {
        title: "Natural Materials",
        text: "We use only pure wool — renewable, breathable, and kind to the environment.",
    },
    {
        title: "Handcrafted Process",
        text: "Every piece is made by hand, reflecting patience, skill, and respect for traditional craftsmanship.",
    },
];

export default function Values() {
    return (
        <section className="container py-14 md:py-20">
            <h2 className="text-2xl font-semibold md:text-3xl">Our Values</h2>
            <div className="mt-10 grid gap-10 md:grid-cols-3">
                {values.map((value) => (
                    <div
                        key={value.title}
                        className="rounded-2xl bg-white/5 p-6 backdrop-blur-sm transition hover:bg-white/10"
                    >
                        <h3 className="text-xl font-semibold text-alp-accent">
                            {value.title}
                        </h3>
                        <p className="mt-3 text-white/80">{value.text}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
