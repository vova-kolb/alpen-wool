export default function ContactInfo() {
    return (
        <div className="rounded-2xl bg-white/5 p-6 backdrop-blur-sm ring-1 ring-white/10">
            <h3 className="text-xl font-semibold">Contact details</h3>
            <ul className="mt-4 space-y-3 text-white/85">
                <li>
                    <span className="block text-sm text-white/60">Email</span>
                    <a className="underline decoration-[var(--alp-accent)] underline-offset-2" href="mailto:hello@alpenwool.example">
                        hello@alpenwool.example
                    </a>
                </li>
                <li>
                    <span className="block text-sm text-white/60">Phone</span>
                    <a className="underline decoration-[var(--alp-accent)] underline-offset-2" href="tel:+41XXXXXXXXX">
                        +41 XX XXX XX XX
                    </a>
                </li>
                <li>
                    <span className="block text-sm text-white/60">Address</span>
                    <p>Zürich, Switzerland</p>
                </li>
                <li>
                    <span className="block text-sm text-white/60">Hours</span>
                    <p>Mon–Fri: 10:00–18:00</p>
                </li>
            </ul>

            <div className="mt-6 h-px w-full bg-white/10" />

            <div className="mt-6">
                <span className="block text-sm text-white/60">Social</span>
                <div className="mt-2 flex flex-wrap gap-3">
                    <a href="https://instagram.com/" target="_blank" className="rounded-full bg-white/5 px-3 py-1 text-sm ring-1 ring-white/10 hover:bg-white/10">Instagram</a>
                    <a href="https://t.me/" target="_blank" className="rounded-full bg-white/5 px-3 py-1 text-sm ring-1 ring-white/10 hover:bg-white/10">Telegram</a>
                    <a href="https://facebook.com/" target="_blank" className="rounded-full bg-white/5 px-3 py-1 text-sm ring-1 ring-white/10 hover:bg-white/10">Facebook</a>
                </div>
            </div>

            <p className="mt-6 text-sm text-white/60">
                Prefer email? We’ll reply within 1–2 business days. For urgent questions, call us directly.
            </p>
        </div>
    );
}