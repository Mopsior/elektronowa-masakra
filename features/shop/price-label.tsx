'use client'

import { CardDescription } from "@/components/ui/card"
import { useContext } from "react"
import { PromotionContext, QuantityContext } from "./transaction-provider"

export const PriceLabel = ({ price }: { price: number}) => {
    const { promotion } = useContext(PromotionContext)
    const { quantity } = useContext(QuantityContext)

    if (promotion) {
        return (
            <CardDescription><span className="line-through decoration-destructive decoration-2">{(price*quantity).toFixed(2)} zł</span> {((price - (price*(promotion/100)))*quantity).toFixed(2)} zł</CardDescription>
        )
    }

    return (
        <CardDescription>{(price*quantity).toFixed(2)} zł</CardDescription>
    )
}