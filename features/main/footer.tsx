import { ExternalLink } from "lucide-react"
import Link from "next/link"

export const Footer = () => {
    return (
        <footer className="w-full bg-background text-primary py-4 text-center dark">
            <h3>Copyright {(new Date()).getFullYear()} &copy; elektronowa.xyz</h3>
            <h3 className="mb-4 flex text-center justify-center items-center">Strona stworzona przez&nbsp;<Link href={'https://github.com/mopsior'}><span className="underline underline-offset-2 deocration-1">Mopsior</span></Link><span className="text-muted ml-1 "><ExternalLink size={16} /></span></h3>
            <LegalParagraph>Serwer elektronowa.xyz nie jest w żaden sposób powiązany z firmą Microsoft oraz Mojang</LegalParagraph>
            <LegalParagraph>Server elektronowa.xyz is not associated with Mojang or Microsoft</LegalParagraph>
        </footer>
    )
}

const LegalParagraph = ({ children }: { children: React.ReactNode }) => {
    return (
        <h4 className="text-muted text-sm">{children}</h4>
    )
}