'use client'
import { createContext, useState } from "react"

export const PromotionContext = createContext<{promotion: number, setPromotion: React.Dispatch<React.SetStateAction<number>>}>({
    promotion: 0,
    setPromotion: () => {}
})

export const TransactionProvider = ({ children }: { children: React.ReactNode }) => {
    const [promotion, setPromotion] = useState<number>(0)

    return (
        <PromotionContext.Provider value={{promotion, setPromotion}}>
            {children}
        </PromotionContext.Provider>
    )
}
