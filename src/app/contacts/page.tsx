/*
import ContactForm from "@/components/contacts/ContactForm";
import SocialLinks from "@/components/contacts/SocialLinks";
import LocationInfo from "@/components/contacts/LocationInfo";

export default function ContactPage() {
    return (
        <main>
            <ContactForm />
            <SocialLinks />
            <LocationInfo />
        </main>
    );
}*/

import type { Metadata } from "next";
import ContactForm from "../../components/contacts/ContactForm";
import ContactInfo from "../../components/contacts/ContactInfo";

export const metadata: Metadata = {
    title: "Contact | Alpen Wool",
    description: "Get in touch about handmade wool blankets, orders, and questions.",
};

export default function ContactPage() {
    return (
        <main>
            {/* Hero */}
            <section className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-[var(--alp-primary)]/60 via-transparent to-[var(--alp-primary)]/70" />
                <div
                    className="h-[38vh] min-h-[600px] w-full bg-center bg-cover bg-[url('/images/contacts_hero.jpg')]"
                    role="img"
                    aria-label="Warm wool textures background"
                />
                <div className="container -mt-40 pb-10">
                    <div className="max-w-3xl rounded-2xl bg-[var(--alp-primary)]/70 p-6 backdrop-blur-md ring-1 ring-[color:var(--alp-text)]/12 shadow-[0_10px_40px_-20px_rgba(0,0,0,.5)]">
                        <h1 className="text-3xl font-semibold md:text-4xl">Contact</h1>
                        {/* <span className="mt-3 block h-[3px] w-16 rounded-full bg-gradient-to-r from-[var(--alp-accent)] via-[var(--alp-accent-soft)] to-transparent" /> */}
                        <p className="mt-3 text-[color:var(--alp-text)]/80">
                            Have a question about sizes, care, or custom orders? Send us a message — we’ll get back shortly.
                        </p>
                    </div>
                </div>
            </section>

            {/* Content */}
            <section className="container py-14 md:py-20">
                <div className="grid gap-12 md:grid-cols-5">
                    <div className="md:col-span-3">
                        <ContactForm />
                    </div>
                    <aside className="md:col-span-2">
                        <ContactInfo />
                    </aside>
                </div>

                {/* Map (optional)  Заменишь src на свою ссылку Google Maps или уберёшь блок */}
               {/* <div className="mt-12 overflow-hidden rounded-2xl ring-1 ring-white/10">
                    <iframe
                        title="Map"
                        className="h-[360px] w-full"
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        src="https://www.google.com/maps/embed?pb=!1m18!2m3!1d0!2d8.5417!3d47.3769!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sZürich!5e0!3m2!1sen!2s!4v1690000000000"
                    />
                </div>*/}
            </section>
        </main>
    );
}
