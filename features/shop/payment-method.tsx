import { MotionFormLabel, tapPreset } from "@/components/motion-components"
import { FormControl, FormItem } from "@/components/ui/form"
import { RadioGroupItem } from "@/components/ui/radio-group"
import { ReactNode } from "react"

export const PaymentMethod = ({ value, name, children, loading }: { value: string, name: string, children: ReactNode, loading: boolean }) => {
    return (
        <FormItem>
            <FormControl>
                <RadioGroupItem
                    value={value}
                    id={value}
                    className="peer sr-only"
                    disabled={loading}
                    />
            </FormControl>
            <MotionFormLabel
                initial={{ scale: 1 }}
                whileTap={tapPreset}   
                htmlFor={value}
                className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-transparent p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary cursor-pointer transition-all"
                >
                {children}
                {name}
            </MotionFormLabel>
        </FormItem>
    )
}