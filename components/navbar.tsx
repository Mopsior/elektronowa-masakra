'use client'

import { ShoppingCart } from "lucide-react"
import { Button } from "./ui/button"
import Link from "next/link"
import Image from "next/image"

export const Navbar = () => {
    return (
        <nav className={`
        md:px-10 md:py-10 py-6 px-6 flex justify-between w-full top-0 z-10`}>
                <div>
                    <Link href={'/'}>
                        <Image src="/logo.png" alt="Elektronowa masakra" width={140} height={35}/>
                    </Link>
                </div>
                <div className="flex md:gap-x-4 gap-x-1">
                    <Link href="/#shop">
                        <Button variant={'link'} className="px-2 text-lg underline-animation hover:no-underline after:top-8"><ShoppingCart />Sklep</Button>
                    </Link>
                    <Link href={process.env.NEXT_PUBLIC_DISCORD_INVITE || '/'}>
                        <Button variant={'link'} className="px-2 text-lg underline-animation hover:no-underline after:top-8">Discord</Button>
                    </Link>
                </div>
            </nav>
    )
}