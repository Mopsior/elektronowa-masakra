export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="w-full h-full md:px-20 px-5 pb-64 mt-10 md:mt-0">
            {children}
        </div>
    );
}
