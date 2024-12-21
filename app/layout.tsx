import { Navbar } from "@/components/navbar";
import "./globals.css";
import { GeistSans } from 'geist/font/sans';
import type { Metadata } from "next";

const title = "Elektronowa Masakra"
const description = "Zanurz się w świecie Minecrafta wspólnie z innymi Elektroniarzami!"

export const metadata: Metadata = {
    title: title,
    description: description,
    openGraph: {
        title: title,
        type: 'website',
        description: description,
        url: 'https://elektronowa.xyz',
        siteName: 'Elektronowa Masakra',
    },
    twitter: {
        site: 'elektronowa.xyz',
        title: title,
        description: description,
    }
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="pl">
            <body
                className={`antialiased ${GeistSans.className}`}
            >
                <Navbar />
                {children}
            </body>
        </html>
    );
}
