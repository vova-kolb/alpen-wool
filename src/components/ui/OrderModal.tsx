"use client";
import React from "react";

type Props = {
    open: boolean;
    onClose: () => void;
    productTitle?: string;
};

export default function OrderModal({ open, onClose, productTitle }: Props) {
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [phone, setPhone] = React.useState("");
    const [error, setError] = React.useState<string | null>(null);
    const [sent, setSent] = React.useState(false);

    React.useEffect(() => {
        if (open) {
            setName("");
            setEmail("");
            setPhone("");
            setError(null);
            setSent(false);
        }
    }, [open]);

    function submit(e: React.FormEvent) {
        e.preventDefault();
        if (!name.trim()) {
            setError("Please enter your name");
            return;
        }
        if (!email.trim() && !phone.trim()) {
            setError("Provide at least email or phone");
            return;
        }
        setError(null);
        // For now we only log the request. Integrate backend later.
        // eslint-disable-next-line no-console
        console.log("Order request", { productTitle, name, email, phone });
        setSent(true);
        setTimeout(onClose, 1000);
    }

    if (!open) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div className="absolute inset-0 bg-black/60" onClick={onClose} />
            <div className="relative z-10 w-[95%] max-w-md rounded-2xl border border-white/10 bg-alp-primary p-5 shadow-xl">
                <header className="mb-3">
                    <h3 className="text-lg font-semibold text-alp-text">Order request</h3>
                    {productTitle && (
                        <p className="mt-1 text-sm text-white/70">Product: {productTitle}</p>
                    )}
                </header>
                {sent ? (
                    <div className="py-6 text-center text-sm text-alp-text">Thank you! We will contact you soon.</div>
                ) : (
                    <form onSubmit={submit} className="flex flex-col gap-3">
                        <input
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Your name"
                            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-alp-text placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/20"
                        />
                        <input
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            type="email"
                            placeholder="Email (optional)"
                            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-alp-text placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/20"
                        />
                        <input
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            placeholder="Phone (optional)"
                            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-alp-text placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/20"
                        />
                        {error && <p className="text-xs text-red-400">{error}</p>}
                        <div className="mt-1 flex gap-2">
                            <button
                                type="submit"
                                className="inline-flex flex-1 items-center justify-center rounded-xl bg-alp-accent px-4 py-2.5 text-sm font-semibold text-alp-primary hover:brightness-95 focus:outline-none focus:ring-2 focus:ring-alp-accent/40"
                            >
                                Send request
                            </button>
                            <button
                                type="button"
                                onClick={onClose}
                                className="inline-flex flex-1 items-center justify-center rounded-xl border border-white/15 px-4 py-2.5 text-sm font-semibold text-alp-text hover:bg-white/5"
                            >
                                Cancel
                            </button>
                        </div>
                    </form>
                )}
            </div>
        </div>
    );
}


