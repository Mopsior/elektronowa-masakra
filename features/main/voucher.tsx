'use client'
import { SectionDivider } from "@/components/section-divider"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp"
import { REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp"

const formSchema = z.object({
    username: z.string()
        .min(3, { message: 'Nazwa gracza musi mieć co najmniej 3 znaki' })
        .max(16, { message: 'Nazwa gracza nie może mieć więcej niż 16 znaków' })
        .regex(/^[a-zA-Z0-9_]+$/, { message: 'Nazwa gracza może zawierać tylko litery, cyfry i podkreślenia' }),
    code: z.string()
})

export const VoucherSection = () => {
    const form = useForm<z.infer<typeof formSchema>>(({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: '',
            code: ''
        }
    }))

    const onSubmit = async (values: z.infer<typeof formSchema>) => {

    }
    
    return (
        <div className="w-full mt-14 py-14 bg-background text-primary dark">
            <SectionDivider>Odbierz Voucher</SectionDivider>
            <div className="mt-12 w-fit mx-auto px-2">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-4">
                        <FormField
                            control={form.control}
                            name="username"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-lg">Nazwa gracza</FormLabel>
                                    <FormControl>
                                        <Input placeholder="mopsior" {...field} />
                                    </FormControl>
                                    <FormDescription>
                                        Nazwa gracza, u którego chcesz odebrać voucher
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )} />
                        <FormField
                            control={form.control}
                            name="code"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-lg">Kod</FormLabel>
                                    <FormControl>
                                        <InputOTP maxLength={8} {...field}>
                                            <InputOTPGroup>
                                                <InputOTPSlot index={0} />
                                                <InputOTPSlot index={1} />
                                                <InputOTPSlot index={2} />
                                                <InputOTPSlot index={3} />
                                                <InputOTPSlot index={4} />
                                                <InputOTPSlot index={5} />
                                                <InputOTPSlot index={6} />
                                                <InputOTPSlot index={7} />
                                            </InputOTPGroup>
                                        </InputOTP>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}/>
                        <Button>Odbierz</Button>
                    </form>
                </Form>
            </div>
        </div>
    )
}