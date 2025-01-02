import { DiscordSection } from "@/features/main/discord";
import { Hero } from "@/features/main/hero";
import { ShopSection } from "@/features/main/shop";
import { VoucherSection } from "@/features/main/voucher";
import Image from 'next/image';

export default function HomePage() {
    return (
        <div>
            <Hero />
            <Image
                src={'/ludzik.svg'}
                width={412} height={500}
                alt="Miencraft Skin"
                className="absolute md:right-0 xl:top-1/4 md:inline hidden w-1/4 max-w-[410px] max-h-[500px] min-w-[200px] min-h-[300px]" />
            <ShopSection />
            <VoucherSection />
            <DiscordSection />
        </div>
    )
}