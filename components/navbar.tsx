'use client'

import { Menu, ShoppingCart } from "lucide-react"
import { Button } from "./ui/button"
import Link from "next/link"

export const Navbar = () => {
    return (
        <nav className={`
        md:px-10 md:py-10 py-6 px-6 flex justify-between absolute w-full top-0 z-10`}>
                <div>
                    <Link href={'/'}>
                        <h1 className="text-xl font-bold text-center leading-5">Elektronowa<br /> Masakra</h1>
                    </Link>
                </div>
                <div className="flex md:gap-x-4 gap-x-1">
                    <Button variant={'link'} className="px-2 text-lg"><ShoppingCart />Sklep</Button>
                    <Button variant={'link'} className="px-2 text-lg">Discord</Button>
                </div>
            </nav>
    )
}