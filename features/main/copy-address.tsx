'use client'
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { ReactNode } from "react"

const address = 'elektronowa.xyz'

export const CopyAddress = ({ children }: { children: ReactNode }) => {
    const handleClick = () => {
        navigator.clipboard.writeText(address)
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