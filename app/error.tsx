'use client'

import { Button } from "@/components/ui/button"
import { useEffect } from "react"
 
export default function Error({
    error,
    reset,
  }: {
    error: Error
    reset: () => void
  }) {

    useEffect(() => {
        console.error(error)
    }, [error])

    return (
        <div className=" w-full h-full flex flex-col items-center justify-center mt-20 gap-y-8 px-10 text-center">
            <h1 className="text-6xl font-extrabold">Coś poszło nie tak 😥</h1>
            <div className="flex gap-x-2">
                <Button>Skontaktuj się z nami</Button>
                <Button onClick={() => reset()} variant={'outline'}>Spróbuj ponownie</Button>
            </div>
            <p className="text-sm text-foreground">Skontaktuj się z nami na Discordzie. W konsoli przeglądarki <code>(F12)</code> masz informacje o błędzie</p>
        </div>
    )
}