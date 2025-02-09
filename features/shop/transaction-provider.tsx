'use client'
import { createContext, useState } from "react"

export const PromotionContext = createContext<{promotion: number, setPromotion: React.Dispatch<React.SetStateAction<number>>}>({
    promotion: 0,
    setPromotion: () => {}
})

export const QuantityContext = createContext<{quantity: number, setQuantity: React.Dispatch<React.SetStateAction<number>>}>({
    quantity: 1,
    setQuantity: () => {}
})

export const TransactionProvider = ({ children }: { children: React.ReactNode }) => {
    const [promotion, setPromotion] = useState<number>(0)
    const [quantity, setQuantity] = useState<number>(1)

    return (
        <PromotionContext.Provider value={{promotion, setPromotion}}>
            <QuantityContext.Provider value={{quantity, setQuantity}}>
                {children}
            </QuantityContext.Provider>
        </PromotionContext.Provider>
    )
}
