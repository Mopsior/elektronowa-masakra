import { Hero } from "@/features/main/hero";
import { ShopSection } from "@/features/main/shop";
import { VoucherSection } from "@/features/main/voucher";

export default function HomePage() {
    return (
        <>
            <Hero />
            <ShopSection />
            <VoucherSection />
        </>
    )
}