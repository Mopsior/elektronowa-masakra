import { Navbar } from "@/components/navbar";
import "./globals.css";
import { GeistSans } from 'geist/font/sans';
import type { Metadata } from "next";
import { Footer } from "@/features/main/footer";
import { Toaster } from "@/components/ui/toaster"

const title = "Elektronowa Masakra"
const description = "Zanurz się w świecie Minecrafta wspólnie z innymi Elektroniarzami!"

export const metadata: Metadata = {
    metadataBase: new URL(process.env.NEXT_PUBLIC_DOMAIN || 'https://elektronowa.xyz'),
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
        images: '/logo.png',
        card: 'summary_large_image'
    }
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="pl" className="scroll-smooth">
            <body
                className={`antialiased ${GeistSans.className} relative min-h-[100vh]`}
            >
                <Navbar />
                {children}
                <Footer />
                <Toaster />
            </body>
        </html>
    );
}
