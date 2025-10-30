"use client";
import { useEffect, useState } from "react";
import { db } from "@/lib/firebase";
import { collection, onSnapshot, orderBy, query, limit } from "firebase/firestore";
import ReviewSlider from "./ReviewSlider";
import ReviewForm from "./ReviewForm";
import type { Review } from "@/lib/types";


export default function ReviewsSection() {
    const [reviews, setReviews] = useState<Review[]>([]);

    useEffect(() => {
        const q = query(
            collection(db, "reviews"),
            orderBy("createdAt", "desc"),
            limit(50)
        );
        const unsub = onSnapshot(q, (snap) => {
            const rows: Review[] = snap.docs.map((d) => {
                const v = d.data();
                return {
                    id: d.id,
                    name: (v.name as string) ?? "",
                    text: (v.text as string) ?? "",
                    avatarUrl: (v.avatarUrl as string | null) ?? null,
                    createdAt: (v.createdAt as number) ?? 0,
                };
            });
            setReviews(rows);
        });
        return () => unsub();
    }, []);

    return (
        <>
            <ReviewSlider reviews={reviews} />

            <section className="container pb-16">
                <div className="grid gap-8 md:grid-cols-2 md:items-start">
                    <div>
                        <h2 className="text-2xl font-semibold md:text-3xl">Your voice matters</h2>
                        <p className="mt-3 text-white/80">
                            Every review helps others choose warmth and quality with confidence.
                            Thank you for sharing how our blankets live in your home.
                        </p>
                    </div>
                    <ReviewForm />
                </div>
            </section>
        </>
    );
}
