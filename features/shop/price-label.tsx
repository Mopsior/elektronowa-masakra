'use client'

import { CardDescription } from "@/components/ui/card"
import { useContext } from "react"
import { PromotionContext } from "./transaction-provider"

export const PriceLabel = ({ price }: { price: number}) => {
    const { promotion } = useContext(PromotionContext)

    if (promotion) {
        return (
            <CardDescription><span className="line-through decoration-destructive decoration-2">{price} zł</span> {(price - (price*(promotion/100))).toFixed(2)} zł</CardDescription>
        )
    }

    return (
        <CardDescription>{price} zł</CardDescription>
    )
}