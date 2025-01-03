import { CopyAddress } from "./copy-address"
import { MotionButton, tapPreset } from "@/components/motion-components"
import Link from "next/link"
import { OnlineMark } from "./online-mark"

export const Hero = () => {
    return (
        <main className="px-3 text-center mt-20 md:mt-28 relative w-fit mx-auto">
            <h1 className="uppercase text-4xl md:text-8xl font-bold tracking-wide before:content-[''] before:bg-[url('/crown.png')] before:absolute before:bg-cover before:w-16 md:before:w-24 before:h-16 md:before:h-24 before:ml-[14.5rem] md:before:ml-[23.5rem] before:top-[-45px] md:before:top-[-65px] before:z-[-1] before:rotate-6">Elektronowa<br />Masakra</h1>
            <OnlineMark />
            <div className="mt-10 gap-x-2 md:gap-x-4 flex justify-center">
                <CopyAddress>
                    <MotionButton
                        size={'hero'}
                        initial={false}
                        animate={{ scale: 1 }}
                        whileTap={tapPreset}>Dołącz</MotionButton>
                </CopyAddress>
                <Link href={process.env.NEXT_PUBLIC_DISCORD_INVITE || '/'}>
                    <MotionButton
                        size={"hero"}
                        variant={'outline'}
                        initial={false}
                        animate={{ scale: 1 }}
                        whileTap={tapPreset}>Discord</MotionButton>
                </Link>
            </div>
        </main>
    )
}