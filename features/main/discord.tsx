import { MotionButton, tapPreset } from "@/components/motion-components"
import { SquareArrowOutUpRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export const DiscordSection = () => {
    return (
        <section className="mt-10 flex xl:px-40 px-10 flex-wrap xl:flex-nowrap xl:pb-[65px] pb-[250px] xl:justify-between justify-center">
            <div>
                <Image src={'/discord.png'} width={302} height={360} alt="Image girl render" className="xl:h-full xl:w-full"/> 
            </div>
            <div className="md:text-end md:mt-20 text-center">
                <h2 className="pb-2 md:text-5xl text-3xl font-extrabold tracking-tight">Bądź częścią społeczności...</h2>
                <p className="text-2xl font-medium tracking-tight">I dołącz na serwer Discord!</p>
                    <Link href={process.env.NEXT_PUBLIC_DISCORD_INVITE || '/'}>
                        <MotionButton
                            size={'hero'}
                            className="md:mt-7 mt-3"
                            initial={false}
                            animate={{ scale: 1 }}
                            whileTap={tapPreset}>DISCORD <SquareArrowOutUpRight className="mt-[-1px]"/>
                        </MotionButton>
                    </Link>
            </div>
        </section>
    )
}