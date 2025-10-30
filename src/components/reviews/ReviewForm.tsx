"use client";
import React, { useState } from "react";
import { db } from "@/lib/firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

export default function ReviewForm() {
    const [name, setName] = useState("");
    // const [avatarUrl, setAvatarUrl] = useState("");
    const [text, setText] = useState("");
    const [ok, setOk] = useState<string | null>(null);
    const [sending, setSending] = useState(false);

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        if (sending) return; // защита от двойного клика
        if (name.trim().length < 2 || text.trim().length < 10) return;

        setSending(true);
        try {
            await addDoc(collection(db, "reviews"), {
                name: name.trim(),
                text: text.trim(),
                avatarUrl: null,             // поле допустимо правилами
                createdAt: serverTimestamp() // ← было Date.now()
            });
            setOk("Thank you! Your review has been added.");
            setName("");
            // setAvatarUrl("");
            setText("");
        } catch (err) {
            console.error("addDoc error:", err);
            setOk("Something went wrong. Please try again.");
        } finally {
            setSending(false);
        }
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="rounded-2xl bg-white/5 p-6 backdrop-blur-sm ring-1 ring-white/10"
        >
            <h3 className="text-lg font-semibold">Share your experience</h3>

            <div className="mt-4 grid gap-4 md:grid-cols-2">
                <div>
                    <label className="text-sm text-white/70">Name</label>
                    <input
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="mt-1 w-full rounded-xl bg-white/10 p-2 outline-none ring-1 ring-white/10 focus:ring-white/20"
                        placeholder="Your name"
                    />
                </div>
                {/*<div>
          <label className="text-sm text-white/70">Avatar URL (optional)</label>
          <input
            value={avatarUrl}
            onChange={(e) => setAvatarUrl(e.target.value)}
            className="mt-1 w-full rounded-xl bg-white/10 p-2 outline-none ring-1 ring-white/10 focus:ring-white/20"
            placeholder="https://…"
          />
        </div>*/}
            </div>

            <div className="mt-4">
                <label className="text-sm text-white/70">Review</label>
                <textarea
                    required
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    rows={4}
                    className="mt-1 w-full resize-none rounded-xl bg-white/10 p-2 outline-none ring-1 ring-white/10 focus:ring-white/20"
                    placeholder="Tell us how the blanket feels in daily use…"
                />
            </div>

            <div className="mt-4 flex items-center gap-3">
                <button
                    type="submit"
                    disabled={sending}
                    className="rounded-xl bg-[var(--alp-accent)] px-4 py-2 text-black disabled:opacity-60 cursor-pointer"
                >
                    {sending ? "Sending…" : "Submit review"}
                </button>
                {ok && <span className="text-green-300/90">{ok}</span>}
            </div>
        </form>
    );
}
