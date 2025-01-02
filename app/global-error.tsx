'use client'

export default function GlobalError({
    error,
}: {
    error: Error & {digset?: string},
}) {
    console.error(error)
    return (
        <html>
            <body>
                <h2>Coś poszło nie tak 😥</h2>
            </body>
        </html>
    )
}