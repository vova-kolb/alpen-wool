import type {Metadata} from "next";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import "./globals.css";

export const metadata: Metadata = {
    title: "Handmade Wool Blankets",
    description: "Landing (structure only)",
};

export default function RootLayout({children}: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <body className="min-h-dvh flex flex-col">
        <Header/>
        <main className="flex-1">
            {children}
        </main>
        <Footer/>
        </body>
        </html>
    );
}
