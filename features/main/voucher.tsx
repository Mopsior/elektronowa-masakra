'use client'
import { SectionDivider } from "@/components/section-divider"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp"
import { MotionButton, MotionImage } from "@/components/motion-components"
import { useState } from "react"
import { catchError } from "@/utils/catch-error"
import { useToast } from "@/hooks/use-toast"
import { REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp"

const formSchema = z.object({
    username: z.string()
        .min(3, { message: 'Nazwa gracza musi mieć co najmniej 3 znaki' })
        .max(16, { message: 'Nazwa gracza nie może mieć więcej niż 16 znaków' })
        .regex(/^[a-zA-Z0-9_]+$/, { message: 'Nazwa gracza może zawierać tylko litery, cyfry i podkreślenia' }),
    code: z.string()
        .min(1, { message: 'Kod musi mieć co najmniej 1 znak' })
        .max(8, { message: 'Kod nie może mieć więcej niż 8 znaków' })
})

export const VoucherSection = () => {
    const { toast } = useToast()
    const [status, setStatus] = useState<'initial' | 'hover'>('initial')
    const form = useForm<z.infer<typeof formSchema>>(({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: '',
            code: ''
        }
    }))

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        const [fetchError, response] = await catchError(fetch(`${process.env.NEXT_PUBLIC_API_URL}/voucher/use`, {
            method: "POST",
            body: new URLSearchParams({
                nick: values.username,
                code: values.code
            }),
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            }
        }))
        if (fetchError) {
            console.error(fetchError)
            return toast({
                title: 'Błąd',
                description: 'Niepoprawny voucher',
                variant: 'destructive'
            })
        }

        const [jsonError, data] = await catchError(response.json())
        if (jsonError) {
            console.error(jsonError)
            return toast({
                title: 'Błąd',
                description: 'Nie udało się odebrać vouchera',
                variant: 'destructive'
            })
        }

        if ((response.status !== 200) || !data.success) {
            return toast({
                title: 'Błąd',
                description: 'Niepoprawny voucher',
                variant: 'destructive'
            })
        }

        toast({
            title: 'Sukces',
            description: `Voucher ${values.code} został odebrany pomyślnie dla ${values.username}`
        })
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
                                        <Input placeholder="np. Qbiter" {...field} />
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
                                        <InputOTP
                                            maxLength={8}
                                            {...field}
                                            pattern={REGEXP_ONLY_DIGITS_AND_CHARS}
                                            inputMode="text">
                                            <InputOTPGroup className="uppercase">
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
                        <div className="relative mt-10">
                            <MotionImage
                                className="absolute top-[-30px] image-fade"
                                src={'/vouchers.png'}
                                alt="vouchery"
                                width={320}
                                height={160}
                                animate={status}
                                onHoverStart={() => setStatus('hover')}
                                onHoverEnd={() => setStatus('initial')}
                                onTouchStart={() => setStatus('hover')}
                                onFocus={() => setStatus('hover')}
                                onBlur={() => setStatus('initial')}
                                variants={{
                                    initial: { opacity: 1, transitionDuration: "0.2s" },
                                    hover: { opacity: 0.3, transitionDuration: "0.2s" }
                                }}
                                />
                            <MotionButton
                                type="submit"
                                animate={status}
                                onClick={form.handleSubmit(onSubmit)}
                                onHoverStart={() => setStatus('hover')}
                                onHoverEnd={() => setStatus('initial')}
                                onTouchStart={() => setStatus('hover')}
                                onFocus={() => setStatus('hover')}
                                onBlur={() => setStatus('initial')}
                                variants={{
                                    initial: { scale: 1, transitionDuration: "0.2s" },
                                    hover: { scale: 1.05, transitionDuration: "0.2s" },
                                }}
                             className="w-full cursor-pointer">Odbierz</MotionButton>
                        </div>
                    </form>
                </Form>
            </div>
        </div>
    )
}