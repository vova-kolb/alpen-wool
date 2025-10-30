"use client";

import { useState } from "react";

export default function ContactForm() {
    const [sending, setSending] = useState(false);
    const [ok, setOk] = useState<null | "success" | "error">(null);

    async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setSending(true);
        setOk(null);

        // Здесь пока имитация отправки.
        // Позже можно подключить Formspree / Telegram Bot / собственный API.
        await new Promise((r) => setTimeout(r, 600));
        setSending(false);
        setOk("success");
        e.currentTarget.reset();
    }

    return (
        <form
            onSubmit={onSubmit}
            className="rounded-2xl bg-white/5 p-6 backdrop-blur-sm ring-1 ring-white/10"
        >
            <h2 className="text-2xl font-semibold md:text-3xl">Send a message</h2>
            <p className="mt-2 text-white/70">We usually respond within 1–2 business days.</p>

            <div className="mt-6 grid gap-5 md:grid-cols-2">
                <div className="md:col-span-1">
                    <label className="mb-2 block text-sm text-white/80" htmlFor="name">Your name</label>
                    <input
                        id="name"
                        name="name"
                        required
                        autoComplete="name"
                        className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 outline-none placeholder:text-white/40 focus:ring-2 focus:ring-[var(--alp-accent)]"
                        placeholder="Jane Doe"
                    />
                </div>

                <div className="md:col-span-1">
                    <label className="mb-2 block text-sm text-white/80" htmlFor="email">Email</label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        autoComplete="email"
                        className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 outline-none placeholder:text-white/40 focus:ring-2 focus:ring-[var(--alp-accent)]"
                        placeholder="jane@email.com"
                    />
                </div>

                <div className="md:col-span-1">
                    <label className="mb-2 block text-sm text-white/80" htmlFor="topic">Topic</label>
                    <select
                        id="topic"
                        name="topic"
                        className="w-full rounded-xl  border border-white/10 bg-white/5 px-4 py-3 outline-none focus:ring-2 focus:ring-[var(--alp-accent)]"
                        defaultValue="general"
                    >
                        <option value="general">General question</option>
                        <option value="order">Order & shipping</option>
                        <option value="custom">Custom size / request</option>
                        <option value="care">Care & materials</option>
                    </select>
                </div>

                <div className="md:col-span-1">
                    <label className="mb-2 block text-sm text-white/80" htmlFor="phone">Phone (optional)</label>
                    <input
                        id="phone"
                        name="phone"
                        className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 outline-none placeholder:text-white/40 focus:ring-2 focus:ring-[var(--alp-accent)]"
                        placeholder="+41 ..."
                    />
                </div>

                <div className="md:col-span-2">
                    <label className="mb-2 block text-sm text-white/80" htmlFor="message">Message</label>
                    <textarea
                        id="message"
                        name="message"
                        required
                        rows={6}
                        className="w-full resize-y rounded-xl border border-white/10 bg-white/5 px-4 py-3 outline-none placeholder:text-white/40 focus:ring-2 focus:ring-[var(--alp-accent)]"
                        placeholder="Tell us a bit more…"
                    />
                </div>

                <div className="md:col-span-2 flex items-start gap-3">
                    <input id="agree" name="agree" type="checkbox" required className="mt-1 h-4 w-4 accent-[var(--alp-accent)]" />
                    <label htmlFor="agree" className="text-sm text-white/80">
                        I agree to the processing of personal data and the{" "}
                        <a className="underline decoration-[var(--alp-accent)] underline-offset-2" href="/privacy" target="_blank">
                            Privacy Policy
                        </a>.
                    </label>
                </div>
            </div>

            <div className="mt-6 flex items-center gap-4">
                <button
                    type="submit"
                    disabled={sending}
                    className="rounded-xl bg-[var(--alp-accent)] px-5 py-3 font-medium text-[var(--alp-primary)] transition hover:brightness-95 disabled:opacity-60"
                >
                    {sending ? "Sending…" : "Send message"}
                </button>
                {ok === "success" && (
                    <span className="text-sm text-green-300/90">Thanks! Your message has been sent.</span>
                )}
                {ok === "error" && (
                    <span className="text-sm text-red-300/90">Something went wrong. Try again.</span>
                )}
            </div>
        </form>
    );
}
