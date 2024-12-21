'use client'

import { motion } from "motion/react"
import { Card } from "./ui/card"
import { Button } from "./ui/button"

export const MotionCard = motion.create(Card)
export const MotionButton = motion.create(Button)

export const hoverPreset = {
    scale: 1.05, transition: { ease: 'easeOut', duration: 0.2 }
}
export const tapPreset = {
    scale: 0.95, transition: { ease: 'easeOut', duration: 0.2 }
}