'use client'

import { Menu, ShoppingCart } from "lucide-react"
import { Button } from "./ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu"
import { useMediaQuery } from "@/hooks/use-media-query"
import Link from "next/link"
import { Separator } from "./ui/separator"

export const Navbar = () => {
    const isDesktop = useMediaQuery('(min-width: 768px)')
    return (
        <nav className={`
        p-10 flex justify-between absolute w-full top-0 z-10`}>
                <div>
                    <Link href={'/'}>
                        <h1 className="text-xl font-bold text-center leading-5">Elektronowa<br /> Masakra</h1>
                    </Link>
                </div>
                {!isDesktop ? (
                    <div>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant={'outline'} className="px-3"><Menu /></Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="mr-6 bg-background flex flex-col gap-y-1 p-2">
                                <DropdownMenuItem asChild>
                                    <Button variant={'link'} className="w-full shadoww"><ShoppingCart />Sklep</Button>
                                </DropdownMenuItem>
                                <Separator />
                                <DropdownMenuItem asChild>
                                    <Button className="w-full" variant={'link'}>Discord</Button>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                ): (
                    <div className="flex gap-x-4">
                        <Button variant={'link'} className="px-2"><ShoppingCart />Sklep</Button>
                    <Button variant={'link'} className="px-2">Discord</Button>
                    </div>
                )}
            </nav>
    )
}