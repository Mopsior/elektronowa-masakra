import { Navbar } from "@/components/navbar";
import "./globals.css";
import { GeistSans } from 'geist/font/sans';    

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
