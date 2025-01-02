import { MotionButton, tapPreset } from "@/components/motion-components";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SquareArrowOutUpRight } from "lucide-react";
import Link from "next/link";

export default function FailurePage() {
    return (
        <div className="flex justify-center items-center w-full text-cetner absolute md:top-1/4 px-5 md:px-10">
            <Card className="md:px-20 h-[430px] md:h-96 flex items-center relative min-w-[100px] flex-col w-[540px]">
                <CardHeader className="absolute top-14 md:top-20">
                    <CardTitle
                        className="text-white-border text-center z-50
                        before:content-['🚫'] before:opacity-30 before:text-[120px] before:absolute before:top-[-23px] before:left-1/4 before:z-[-10]">Błąd podczas zakupu</CardTitle>
                </CardHeader>
                <CardContent className="absolute bottom-0 flex flex-col items-center gap-y-4">
                    <p className="max-w-[500px] min-w-[100px] text-center md:text-base text-sm">Wystąpił błąd podczas płatności po stronie operatora. Upewnij się czy nie zostały pobrane tobie żadne środki. W przypadku powtarzania się tego problemu lub pobraniu środków, skontaktuj się z nami na Discordzie</p>
                    <div className="flex gap-2 flex-wrap justify-center">
                        <Link href={'/'}>
                            <MotionButton
                                initial={{ scale: 1 }}
                                whileTap={tapPreset}>Powróć do strony głównej</MotionButton>
                        </Link>
                        <Link href={process.env.NEXT_PUBLIC_DISCORD_INVITE || '/'}>
                            <MotionButton
                                variant={'outline'}
                                initial={{ scale: 1 }}
                                whileTap={tapPreset}>Serwer Discord <SquareArrowOutUpRight /></MotionButton>
                        </Link>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}