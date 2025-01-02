import { hoverPreset, MotionButton, MotionCard, tapPreset } from "@/components/motion-components"
import { CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { imgURLParse } from "@/utils/img-url-parse."
import Image from "next/image"
import Link from "next/link"
import { SmallDescription } from "./markdown-parser"

export const Item = ({ title, children, image, alt, price, id }: { title: string, children: string, image: string, alt: string, price: number, id: string }) => {
    const imageSrc = imgURLParse(image)
    return (
        <MotionCard
            className="w-80 h-fit"
            initial={false}
            animate={{ scale: 1 }}
            whileHover={hoverPreset}
            whileTap={hoverPreset}>
            <CardContent className="flex justify-center items-center pt-6">
                <Image src={imageSrc} alt={alt} width={256} height={256} />
            </CardContent>
            <CardHeader className="pt-0">
                <CardTitle>{title}</CardTitle>
                <SmallDescription>{children}</SmallDescription>
            </CardHeader>
            <CardFooter className="w-full flex flex-col gap-y-3 ">
                <CardTitle>{price} zł</CardTitle>
                <Link href={`/shop/${id}`} className="w-full">
                    <MotionButton
                        variant={'default'}
                        className="w-full"
                        initial={false}
                        animate={{ scale: 1 }}
                        whileTap={tapPreset}>Kupuję</MotionButton>
                </Link>
            </CardFooter>
        </MotionCard>
    )
}