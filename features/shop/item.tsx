import { MotionCard } from "@/components/motion-components"
import { Button } from "@/components/ui/button"
import { CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import { ReactNode } from "react"
import { Url } from "url"

export const Item = ({ title, children, image, alt }: { title: string, children: ReactNode, image: string, alt: string }) => {
    return (
        <MotionCard
            className="w-80"
            // initial for SSR
            initial={false}
            animate={{ scale: 1 }}
            whileHover={{ scale: 1.05, transition: { ease: 'easeOut', duration: 0.2 } }}
            whileTap={{ scale: 1.05, transition: { ease: 'easeOut', duration: 0.2 } }}>
            <CardContent className="flex justify-center items-center pt-6">
                <Image src={image} alt={alt} width={128} height={128} />
            </CardContent>
            <CardHeader className="pt-0">
                <CardTitle>{title}</CardTitle>
                <CardDescription>{children}</CardDescription>
            </CardHeader>
            <CardFooter className="w-full">
                <Button variant={'default'} className="w-full ">Kupuję</Button>
            </CardFooter>
        </MotionCard>
    )
}