import { CopyAddress } from "./copy-address"
import { MotionButton, tapPreset } from "@/components/motion-components"
import Link from "next/link"
import { OnlineMark } from "./online-mark"

export const Hero = () => {
    return (
        <main className="px-3 text-center mt-20 md:mt-28 relative w-fit mx-auto overflow-x-clip md:overflow-x-visible">
            <h1 className="uppercase text-4xl md:text-8xl font-bold tracking-wide before:content-[''] before:bg-[url('/crown.png')] before:absolute before:bg-cover before:w-16 md:before:w-24 before:h-16 md:before:h-24 before:ml-[14.5rem] md:before:ml-[23.5rem] before:top-[-45px] md:before:top-[-65px] before:z-[-1] before:rotate-6 md:pb-20 pb-16"><span className={`after:content-['Elektronowa'] after:-z-10 after:outline-to-bottom after:uppercase after:absolute after:font-outline after:text-transparent
            after:text-[40px] after:left-0 after:-top-7 after:leading-[60px] after:opacity-50
            md:after:text-[110px] md:after:-left-10 md:after:-top-20 after:md:opacity-60 after:md:leading-normal
            lg:after:text-[140px] lg:after:left-[-150px] lg:after:-top-28 after:lg:opacity-70 after:lg:leading-normal after:overflow-clip`}>Elektronowa</span><br /><span className={`after:content-['Masakra'] after:uppercase after:absolute after:font-outline after:text-transparent after:-z-10 after:outline-to-top
            after:text-[40px] after:right-12 after:top-12 after:leading-normal after:opacity-50
            md:after:text-[110px] md:after:left-24 md:after:top-28 md:after:opacity-60
            lg:after:text-[140px] lg:after:left-6 lg:px-40 lg:after:top-24 lg:after:opacity-70 after:overflow-clip
            `}>Masakra</span></h1>
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