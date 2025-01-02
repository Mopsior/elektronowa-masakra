'use client'
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { useToast } from "@/hooks/use-toast"
import { catchError } from "@/utils/catch-error"
import { ReactNode } from "react"

const address = 'elektronowa.xyz'

export const CopyAddress = ({ children }: { children: ReactNode }) => {
    const { toast } = useToast()
    const handleClick = async () => {
        const [error] = await catchError(navigator.clipboard.writeText(address))
        if (error) {
            console.error(error)
            return toast({
                title: 'Nie udało się skopiować nazwy serwera',
                description: <p>Skopiuj ręcznie <code>elektronowa.xyz</code></p>,
                action: <Button onClick={() => handleClick()}>Skopiuj</Button>
            })
        }
        toast({
            title: 'Skopiowano nazwę serwera 🥳'
        })
    }    

    return (
        <Dialog>
            <DialogTrigger asChild onClick={() => handleClick()}>{children}</DialogTrigger>
            <DialogContent className="w-[300px] rounded-md">
                <DialogHeader>
                    <DialogTitle>Adres serwera</DialogTitle>
                    <DialogDescription>Skopiowaliśmy go już za ciebie!</DialogDescription>
                </DialogHeader>
                <Card className="py-2 px-8 text-center">
                    <code className="font-extrabold !text-center w-full">{address}</code>
                </Card>
                <DialogFooter>
                    <DialogClose asChild>
                        <Button onClick={() => handleClick()} className="w-full">Skopiuj</Button>
                    </DialogClose>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}