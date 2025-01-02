import { MotionButton, tapPreset } from "@/components/motion-components";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SquareArrowOutUpRight } from "lucide-react";
import Link from "next/link";

export default function SuccessPage() {
    return (
        <div className="flex justify-center items-center w-full text-cetner absolute top-40 md:top-1/4 px-5 md:px-10">
            <Card className="md:px-20 h-80 md:h-96 flex justify-center items-center relative min-w-[100px] flex-col motion-preset-confetti after:top-0 before:top-0 before:left-[-80px] after:left-40">
                <CardHeader>
                    <CardTitle
                        className="text-white-border text-center z-50
                        before:content-['🎉'] before:opacity-30 before:text-[120px] before:absolute before:left-20 md:before:left-48 before:top-24 md:before:top-32 before:z-[-10]">Zakup zakończony pomyślnie!</CardTitle>
                </CardHeader>
                <CardContent className="absolute bottom-0">
                    <Link href={'/'}>
                        <MotionButton
                            initial={{ scale: 1 }}
                            whileTap={tapPreset}>Powróć do strony głównej <SquareArrowOutUpRight /></MotionButton>
                    </Link>
                </CardContent>
            </Card>
        </div>
    )
}