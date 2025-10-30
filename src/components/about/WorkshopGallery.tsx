import Image from "next/image";

export default function WorkshopGallery() {
    const images = [
        { src: "/images/workshop1.jpg", alt: "Wool blanket stitching process" },
        { src: "/images/workshop2.jpg", alt: "Wool rolls and natural fabrics" },
        { src: "/images/workshop3.jpg", alt: "Hand-finishing the blanket edges" },
    ];

    return (
        <section className="container py-14 md:py-20">
            <h2 className="text-2xl font-semibold md:text-3xl">Inside the Workshop</h2>
            <p className="mt-4 max-w-2xl text-white/80">
                Each blanket is created in a small workshop where craftsmanship meets
                calm. It’s not about speed — it’s about care, precision, and atmosphere.
            </p>

            <div className="mt-10 grid gap-6 md:grid-cols-3">
                {images.map((img) => (
                    <div key={img.src} className="overflow-hidden rounded-2xl">
                        <Image
                            src={img.src}
                            alt={img.alt}
                            width={600}
                            height={400}
                            className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                            loading="lazy"
                        />
                    </div>
                ))}
            </div>
        </section>
    );
}
