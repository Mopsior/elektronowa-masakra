import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import { ClassNameValue } from "tailwind-merge";

export const SectionDivider = ({children, className}: {children: ReactNode, className?: ClassNameValue }) => {
    return (
            <div className="flex justify-between items-center text-primary w-4/5 mx-auto">
                <Separator className="w-1/4 md:w-1/3" />
                <p className={cn("text-2xl md:text-3xl px-auto font-semibold text-center", className)}>{children}</p>
                <Separator className="w-1/4 md:w-1/3" />
            </div>
    )
}