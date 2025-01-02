'use client'

import { motion } from "motion/react"
import { Card } from "./ui/card"
import { Button } from "./ui/button"
import { FormLabel } from "./ui/form"
import { LoaderCircle } from "lucide-react"
import Image from "next/image"

export const MotionCard = motion.create(Card)
export const MotionButton = motion.create(Button)
export const MotionFormLabel = motion.create(FormLabel)
export const MotionLoaderCircle = motion.create(LoaderCircle)
export const MotionImage = motion.create(Image)

export const hoverPreset = {
    scale: 1.05, transition: { ease: 'easeOut', duration: 0.2 }
}
export const tapPreset = {
    scale: 0.95, transition: { ease: 'easeOut', duration: 0.2 }
}

export const LoadingCircle = () => {
    return (
        <MotionLoaderCircle
            className="animate-spin margin-0"
            initial={{ opacity: 0,x: -20 }}
            animate={{ opacity: 1,x: 0, transition: { ease: 'easeOut', duration: 0.1, bounce: 0 }}} />
    )
}