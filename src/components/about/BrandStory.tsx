import Image from "next/image";

export default function BrandStory() {
    return (
        <section className="container py-14 md:py-20">
            <div className="grid gap-8 md:grid-cols-2 md:items-center">
                <div className="order-2 md:order-1">
                    <h2 className="text-2xl font-semibold md:text-3xl">Brand Story</h2>
                    <span className="alp-accent-line mt-3" />
                    <p className="mt-4 text-base leading-relaxed text-white/80">
                        Our journey began with a simple idea — to bring warmth, comfort, and
                        timeless design back into everyday life. We work in small batches,
                        focusing on every stitch and fiber to ensure each blanket feels
                        personal and lasting.
                    </p>
                    <p className="mt-4 text-base leading-relaxed text-white/80">
                        Every piece is made with care — combining traditional techniques
                        with a minimalist, modern aesthetic. It’s a blend of nature, craft,
                        and quiet beauty.
                    </p>
                </div>

                <div className="order-1 md:order-2">
                    <figure className="overflow-hidden rounded-2xl surface ring-alp-soft shadow-[0_10px_40px_-20px_rgba(0,0,0,.5)]">
                        <Image
                            src="/images/brand_story_img.jpg"
                            alt="Natural wool fibers prepared for crafting"
                            width={960}
                            height={720}
                            className="h-full w-full object-cover transition-transform duration-500 hover:scale-[1.02]"
                            loading="lazy"
                        />
                    </figure>
                </div>
            </div>
        </section>
    );
}
