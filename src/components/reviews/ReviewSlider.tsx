"use client";
import ReviewCard from "./ReviewCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar, Autoplay, A11y } from "swiper/modules";
import { ArrowLeft, ArrowRight } from "lucide-react";
import type { Review } from "@/lib/types";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


export default function ReviewSlider({ reviews }: { reviews: Review[] }) {
    return (
        <section className="container py-14 md:py-20">
            <div className="flex items-end justify-between gap-4">
                <div>
                    <h2 className="text-2xl font-semibold md:text-3xl">Customer Reviews</h2>
                    <p className="mt-2 text-white/70">Voices from people who chose handmade wool blankets.</p>
                </div>

                <div className="hidden gap-3 md:flex">
                    <button
                        aria-label="Previous reviews"
                        className="reviews-prev flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-all hover:bg-white/20 hover:text-accent focus:outline-none focus:ring-2 focus:ring-white/30 cursor-pointer active:scale-90"
                    >
                        <ArrowLeft className="h-5 w-5" />
                    </button>
                    <button
                        aria-label="Next reviews"
                        className="reviews-next flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-all hover:bg-white/20 hover:text-accent focus:outline-none focus:ring-2 focus:ring-white/30 cursor-pointer active:scale-90"
                    >
                        <ArrowRight className="h-5 w-5" />
                    </button>
                </div>
            </div>

            <div className="mt-6">
                <Swiper
                    className="review-swiper !pt-5 !pb-0"
                    modules={[Navigation, Scrollbar, Autoplay, A11y]}
                    spaceBetween={16}
                    slidesPerView={1.05}
                    breakpoints={{
                        640: { slidesPerView: 1.2, spaceBetween: 20 },
                        768: { slidesPerView: 2, spaceBetween: 20 },
                        1024: { slidesPerView: 3, spaceBetween: 24 },
                    }}
                    navigation={{
                        prevEl: ".reviews-prev",
                        nextEl: ".reviews-next",
                    }}
                    // pagination={{ clickable: true }}
                    scrollbar={{ el: ".reviews-scrollbar", draggable: true, dragSize: "auto", hide: false }}
                    autoplay={{ delay: 6000, disableOnInteraction: false, pauseOnMouseEnter: true }}
                    speed={650}
                >
                    {reviews.length === 0 && (
                        <SwiperSlide>
                            <div className="rounded-2xl bg-white/5 p-6 text-white/70">
                                No reviews yet — be the first to share your experience.
                            </div>
                        </SwiperSlide>
                    )}

                    {reviews.map((r) => (
                        <SwiperSlide key={r.id}>
                            <div className="slide-card">
                                <ReviewCard name={r.name} text={r.text} avatarUrl={r.avatarUrl} />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                <div className="flex justify-center mt-8">
                    <div className="reviews-scrollbar h-1.5 w-[60%] max-w-[500px] rounded-full bg-white/15" />
                </div>

            </div>
        </section>
    );
}