'use client'

import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"
import { useContext } from "react"
import { QuantityContext } from "./transaction-provider"

export const Quantity = () => {
    const { quantity, setQuantity } = useContext(QuantityContext)

    const change = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        if (Number(e.target.value) < 1 || Number(e.target.value) > 100) return
        setQuantity(Number(e.target.value))
    }

    return (
        <div className="!mt-4 flex flex-col gap-y-2">
            <Label htmlFor="quantity" className="text-muted-foreground">Ilość:</Label>
            <div className="relative flex *:shadow-sm">
                <QuantityButton variant="minus" />
                <input name="quantity" type='number' placeholder="1" value={quantity} onChange={change} className="border-y border-border w-fit p-2 px-4 max-w-16 text-sm text-center [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none" min={1} max={100}/>
                <QuantityButton variant="plus" />
            </div>
        </div>
    )
}

const QuantityButton = ({ variant }: { variant: 'plus' | 'minus'}) => {
    const { quantity, setQuantity } = useContext(QuantityContext)

    const minus = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (quantity <= 1) return
        setQuantity(prev => prev - 1)
    } 

    const plus = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (quantity >= 100) return
        setQuantity(prev => prev + 1)
    }

    return (
        <button className={cn('w-8 flex items-center justify-center border border-border rounded-md text-lg text-muted-foreground transition-colors hover:bg-secondary',
            variant === 'plus' ? ' rounded-l-none' : ' rounded-r-none',
        )} onClick={
            variant === 'plus' ? plus : minus
        }>
            {variant === 'plus' ? '+' : '-'}
        </button>
    )
}