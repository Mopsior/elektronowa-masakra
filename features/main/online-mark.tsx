'use client'

import { useEffect, useState } from "react"
import { OnlinePin } from "./online"
import { useToast } from "@/hooks/use-toast"
import { catchError } from "@/utils/catch-error"
import { ToastAction } from "@/components/ui/toast"

export const OnlineMark = () => {
    const [status, setStatus] = useState<'loading' | 'online' | 'offline'>('loading')
    const [players, setPlayers] = useState<number | null>(null)
    const { toast } = useToast()

    const handleError = () => {
        setStatus('loading')
        setPlayers(null)
        return toast({
            title: 'Nie pobrano statusu serwera',
            description: 'Nie udało się pobrać statusu serwera',
            action: <ToastAction altText="Spróbuj ponownie" onClick={() => fetchStatus()}>Spróbuj ponownie</ToastAction>
        })
    }


    const fetchStatus = async () => {
        const [fetchError, response] = await catchError(fetch('https://api.mcsrvstat.us/3/elektronowa.xyz', { next: { revalidate: 20 }, cache: 'no-store' }))
        if (fetchError) {
            return handleError()
        }

        const [jsonError, data] = await catchError(response.json())
        if (jsonError) {
            return handleError()
        }


        switch (data.online) {
            case true:
                setStatus('online')
                setPlayers(data.players.online)
                break
            case false:
                setStatus('offline')
                setPlayers(null)
                break
        }

    }
    
    useEffect(() => {
        setStatus('loading')
        fetchStatus()
        const getData = setInterval(() => {
            fetchStatus()
        }, 30000)

        return () => clearInterval(getData)
    }, [])

    return (
        <div className="flex gap-x-2 text-xl text-center mx-auto w-fit mt-4 relative">
            <OnlinePin status={status} />
            {status === 'online' ? <p>Gra teraz <span className="font-bold">{players} osób</span></p> : null}
            {status === 'offline' ? <p>Serwer jest wyłączony</p> : null}
            {status === 'loading' ? <p>Ładowanie...</p> : null}
        </div>
    )
}