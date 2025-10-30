"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, JSX } from "react";
import { MAIN_NAV } from "@/components/site-nav";

export default function Header(): JSX.Element {
    const pathname = usePathname();
    const [open, setOpen] = useState(false);

    const isActive = (href: string): boolean =>
        href === "/" ? pathname === "/" : pathname?.startsWith(href);

    return (
        <header className="fixed top-0 left-0 z-50 w-full border-b border-white/20 bg-lightBlue/80 backdrop-blur-md text-text-dark transition-colors">


        <div className="container flex items-center justify-between py-3">
                {/* brand */}
                <Link href="/" className="inline-flex items-center gap-2 text-alp-accent">
                    <span aria-hidden>🧶</span>
                    <span className="font-semibold tracking-wide text-alp-text">
            Alpen Wool
          </span>
                </Link>

                {/* desktop nav */}
                <nav className="hidden items-center gap-6 md:flex" aria-label="Main navigation">
                    {MAIN_NAV.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            data-active={isActive(item.href) || undefined}
                            className={`text-sm transition hover:text-alp-accent ${
                                isActive(item.href) ? "text-alp-accent" : "text-alp-text"
                            }`}
                        >
                            {item.label}
                        </Link>
                    ))}
                </nav>

                {/* burger */}
                <button
                    className="inline-flex h-10 w-10 items-center justify-center text-alp-text transition hover:text-alp-accent md:hidden"
                    aria-label="Toggle menu"
                    aria-expanded={open}
                    onClick={() => setOpen((v) => !v)}
                >
                    <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden>
                        <path
                            d="M4 6h16M4 12h16M4 18h16"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                        />
                    </svg>
                </button>
            </div>

            {/* mobile nav */}
            {open && (
                <nav className="md:hidden border-t border-alp-accent/20 bg-alp-bg">
                    <ul className="flex flex-col px-4 py-3">
                        {MAIN_NAV.map((item) => (
                            <li key={item.href}>
                                <Link
                                    href={item.href}
                                    onClick={() => setOpen(false)}
                                    data-active={isActive(item.href) || undefined}
                                    className={`block py-2 text-base transition hover:text-alp-accent ${
                                        isActive(item.href) ? "text-alp-accent" : "text-alp-text"
                                    }`}
                                >
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            )}
        </header>
    );
}
