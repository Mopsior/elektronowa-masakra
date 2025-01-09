'use client'

import { Button } from "@/components/ui/button";
import { CardContent, CardDescription, CardFooter } from "@/components/ui/card";
import { RadioGroup } from "@/components/ui/radio-group";
import { PaymentMethod } from "@/features/shop/payment-method";
import { zodResolver } from "@hookform/resolvers/zod";
import { LockKeyhole, Smartphone } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { LoadingCircle, MotionButton, tapPreset } from "@/components/motion-components";
import { useContext, useState } from "react";
import { useRouter } from "next/navigation";
import { catchError } from "@/utils/catch-error";
import { useToast } from "@/hooks/use-toast";
import { PromotionContext } from "./transaction-provider";

const formSchema = z.object({
    paymentMethod: z.enum(["cards", "blik", "paypal", "paysafecard"], {
        required_error: "Wybierz sposób płatności"
    }),
    nick: z.string()
        .min(3, { message: "Nick musi mieć przynajmniej 3 znaki" })
        .max(16, { message: "Nick może mieć maksymalnie 16 znaków" })
        .regex(/^[a-zA-Z0-9_]+$/, { message: 'Nazwa gracza może zawierać tylko litery, cyfry i podkreślenia' }),
    email: z.string().email({ message: "Niepoprawny adres email" }),
    promocode: z.string().optional()
})

export const PaymentForm = ({ slug }: { slug: string }) => {
    const [loading, setLoading] = useState(false)
    const { setPromotion} = useContext(PromotionContext)

    const router = useRouter()
    const { toast } = useToast()

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            paymentMethod: "cards",
            nick: "",
            email: "",
            promocode: ""
        }
    })

    const onSubmit = async (data: z.infer<typeof formSchema>) => {
        setLoading(true)
        const body = new URLSearchParams({
            productId: slug,
            nick: data.nick,
            paymentMethod: data.paymentMethod,
            email: data.email,
        })
        if (data.promocode) body.append("promocode", data.promocode)

        const [fetchError, fetchResponse] = await catchError(fetch(`${process.env.NEXT_PUBLIC_API_URL}/transaction/create`, {
            method: "POST",
            body: body,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            }
        }))

        if (fetchError) {
            console.error(fetchError, fetchResponse)
            toast({
                variant: 'destructive',
                title: 'O nie! Coś poszo nie tak.',
                description: 'Wystąpił problem z tworzeniem transakcji. Twoje konto nie zostało obciążone. Skontaktuj się z administracją'
            })
            setLoading(false)
            return
        }

        const [parseError, json] = await catchError(fetchResponse.json())
        if (parseError) {
            toast({
                variant: 'destructive',
                title: 'O nie! Coś poszo nie tak.',
                description: 'Wystąpił problem z przetwarzaniem odpowiedzi serwera. Twoje konto nie zostało obciążone. Skontaktuj się z administracją'
            })
            setLoading(false)
            return
        }
        if (json.success && json.redirectUrl) {
            toast({
                variant: 'default',
                title: 'Sukces!',
                description: 'Zaraz przekierujemy ciebie do dokończenia płatności. Nie zamykaj okna przeglądarki.'
            })
            return router.replace(json.redirectUrl)
        }
        setLoading(false)
        return toast({
            variant: 'destructive',
            title: 'O nie! Coś poszo nie tak.',
            description: 'Wystąpił nieznany problem z procesem transakcji. Twoje konto nie zostało obciążone. Skontaktuj się z administracją'
        })
    }

    const handlePromocode = async (data: z.infer<typeof formSchema>) => {
        setLoading(true)
        if (!data.promocode || data.promocode.length < 1) {
            return toast({
                variant: 'destructive',
                title: 'Niepoprawny kod promocyjny',
                description: 'Nie podałeś żadnego kodu promocyjnego.'
            })
        }

        const [fetchError, fetchResponse] = await catchError(fetch(`${process.env.NEXT_PUBLIC_API_URL}/promocode/check/${data.promocode}`, { cache: 'no-store' }))
        if (fetchError) {
            setLoading(false)
            return toast({
                variant: 'destructive',
                title: 'Niepoprawny kod promocyjny',
                description: 'Podany kod promocyjny jest niepoprawny.'
            })
        }
        const [parseError, json] = await catchError(fetchResponse.json())
        if (parseError || !json.success) {
            setLoading(false)
            return toast({
                variant: 'destructive',
                title: 'Niepoprawny kod promocyjny',
                description: 'Podany kod promocyjny jest niepoprawny.'
            })
        }

        toast({
            title: 'Użyto kod promocyjny',
            description: `Kod promocyjny ${data.promocode} został pomyślnie użyty. Otrzymujesz ${json.promocode.discount}% zniżki na zakup.`
        })
        setPromotion(json.promocode.discount)
        return setLoading(false)
    }

    return (
        <Form {...form}>
            <form>
                <CardContent className="grid gap-4">
                    <FormField
                        control={form.control}
                        name="paymentMethod"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <RadioGroup className="grid md:grid-cols-4 gap-4 grid-cols-2 grid-rows-2 md:grid-rows-1" defaultValue="cards" onValueChange={field.onChange}>
                                        <PaymentMethod value="cards" name="Karta" loading={loading}>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                className="mb-3 h-6 w-6"
                                            >
                                                <rect width="20" height="14" x="2" y="5" rx="2" />
                                                <path d="M2 10h20" />
                                            </svg>
                                        </PaymentMethod>
                                        <PaymentMethod value="blik" name="Blik" loading={loading}>
                                            <Smartphone className="mb-3 h-6 w-6" />
                                        </PaymentMethod>
                                        <PaymentMethod value="paypal" name="PayPal" loading={loading}>
                                            <svg role="img" viewBox="0 0 24 24" className="mb-3 h-6 w-6">
                                                <path
                                                    d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944.901C5.026.382 5.474 0 5.998 0h7.46c2.57 0 4.578.543 5.69 1.81 1.01 1.15 1.304 2.42 1.012 4.287-.023.143-.047.288-.077.437-.983 5.05-4.349 6.797-8.647 6.797h-2.19c-.524 0-.968.382-1.05.9l-1.12 7.106zm14.146-14.42a3.35 3.35 0 0 0-.607-.541c-.013.076-.026.175-.041.254-.93 4.778-4.005 7.201-9.138 7.201h-2.19a.563.563 0 0 0-.556.479l-1.187 7.527h-.506l-.24 1.516a.56.56 0 0 0 .554.647h3.882c.46 0 .85-.334.922-.788.06-.26.76-4.852.816-5.09a.932.932 0 0 1 .923-.788h.58c3.76 0 6.705-1.528 7.565-5.946.36-1.847.174-3.388-.777-4.471z"
                                                    fill="currentColor"
                                                />
                                            </svg>
                                        </PaymentMethod>
                                        <PaymentMethod value="paysafecard" name="PSC" loading={loading}>
                                            <LockKeyhole className="mb-3 h-6 w-6" />
                                        </PaymentMethod>
                                    </RadioGroup> 
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                            )} />
                    <FormField
                        control={form.control}
                        name="nick"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Nazwa gracza<span className="text-destructive"> *</span></FormLabel>
                                <FormControl>
                                    <Input placeholder="mopsior" {...field} disabled={loading}/>
                                </FormControl>
                                <FormDescription>Nazwa gracza z gry Minecraft</FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                        />
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email<span className="text-destructive"> *</span></FormLabel>
                                <FormControl>
                                    <Input placeholder="kontakt@elektronowa.xyz" {...field} disabled={loading} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                        />
                    <FormField
                        control={form.control}
                        name="promocode"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Kod promocyjny</FormLabel>
                                <div className="flex min-w-full max-w-sm justify-between gap-x-2">
                                    <FormControl>
                                        <Input placeholder="KOD123" {...field} disabled={loading}  />
                                    </FormControl>
                                    <Button onClick={form.handleSubmit(handlePromocode)}>Dodaj</Button>
                                </div>
                                <FormMessage />
                            </FormItem>
                        )}
                        />
                    <CardDescription className="text-sm">Pola oznaczone <span className="text-destructive">*</span> są wymagane</CardDescription>
                </CardContent>
                <CardFooter>
                    <MotionButton
                        className="w-full"
                        type="submit"
                        initial={{ scale: 1 }}
                        whileTap={tapPreset}
                        disabled={loading}
                        onClick={form.handleSubmit(onSubmit)}>
                            Przejdź do płatności{loading && <LoadingCircle />}
                        </MotionButton>
                </CardFooter>
            </form>
        </Form>
    )
}