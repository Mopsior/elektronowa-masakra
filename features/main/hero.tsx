import { Button } from "@/components/ui/button"
import { OnlinePin } from "./online"

export const Hero = () => {
    return (
        <main className="px-3 text-center mt-40 md:mt-52 relative w-fit mx-auto">
            <h1 className="uppercase text-4xl md:text-8xl font-bold tracking-wide before:content-[''] before:bg-[url('/crown.png')] before:absolute before:bg-cover before:w-16 md:before:w-24 before:h-16 md:before:h-24 before:ml-[14.5rem] md:before:ml-[23.5rem] before:top-[-45px] md:before:top-[-65px] before:z-[-1] before:rotate-6">Elektronowa<br />Masakra</h1>
            <div className="flex gap-x-2 text-xl text-center mx-auto w-fit mt-4 relative">
                <OnlinePin />
                <p>Gra teraz <span className="font-bold">380 osób</span></p>
            </div>
            <div className="mt-10 gap-x-2 md:gap-x-4 flex justify-center">
                <Button size={'hero'}>Dołącz</Button>
                <Button size={"hero"} variant={'outline'}>Discord</Button>
            </div>
        </main>
    )
}