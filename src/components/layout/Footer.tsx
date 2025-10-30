import Link from "next/link";
import { MAIN_NAV } from "@/components/site-nav";
import type { JSX } from "react";

export default function Footer(): JSX.Element {
    const year = new Date().getFullYear();

    return (
        <footer className="w-full border-t border-alp-accent/20 bg-alp-primary text-alp-text">
            {/* main content */}
            <div className="container grid gap-8 py-10 md:grid-cols-3">
                {/* brand info */}
                <div>
                    <div className="mb-2 text-lg font-semibold text-alp-accent">Alpen Wool</div>
                    <p className="text-sm text-alp-text/80 leading-relaxed">
                        Handmade wool blankets. <br />
                        Natural materials. <br />
                        Crafted with care.
                    </p>
                </div>

                {/* navigation */}
                <div>
                    <div className="mb-2 font-semibold text-alp-accent">Navigation</div>
                    <ul className="space-y-1">
                        {MAIN_NAV.map((item) => (
                            <li key={item.href}>
                                <Link
                                    href={item.href}
                                    className="text-sm text-alp-text/80 transition hover:text-alp-accent"
                                >
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* contacts */}
                <div>
                    <div className="mb-2 font-semibold text-alp-accent">Contacts</div>
                    <ul className="space-y-1 text-sm text-alp-text/80">
                        <li>Email: hello@alpenwool.example</li>
                        <li>Zurich, Switzerland</li>
                        <li className="flex gap-3 pt-1">
                            <Link href="#" aria-label="Instagram" className="transition hover:text-alp-accent">
                                Instagram
                            </Link>
                            <Link href="#" aria-label="Telegram" className="transition hover:text-alp-accent">
                                Telegram
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>

            {/* bottom bar */}
            <div className="border-t border-alp-accent/20 bg-alp-bg">
                <div className="container flex justify-between py-4 text-xs text-alp-text/70">
                    <span>© {year} Alpen Wool. All rights reserved.</span>
                    {/*<Link
                        href="/care-guarantee"
                        className="underline underline-offset-2 hover:text-alp-accent"
                    >
                        Care & Guarantee
                    </Link>*/}
                </div>
            </div>
        </footer>
    );
}
