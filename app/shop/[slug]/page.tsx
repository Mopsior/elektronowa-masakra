import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { PaymentForm } from "@/features/shop/payment-form";
import { PriceLabel } from "@/features/shop/price-label";
import { TransactionProvider } from "@/features/shop/transaction-provider";
import { catchError } from "@/utils/catch-error";
import { imgURLParse } from "@/utils/img-url-parse.";
import { Info } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ItemDescription } from "@/features/shop/markdown-parser";

export default async function ItemBuyPage({ params }: { params: { slug: string } }) {
    const [fetchError, data] = await catchError(fetch(`${process.env.NEXT_PUBLIC_API_URL}/product/get/${params.slug}`, { cache: 'no-store' }))
    if (fetchError) {
        return notFound()
    }
    const [parseError, product] = await catchError(data.json())
    if (parseError) {
        return notFound()
    }

    const imgSrc = imgURLParse(product.image)

    return (
        <TransactionProvider>
        <div className="flex md:flex-nowrap flex-wrap justify-between gap-4 px-10 md:px-28 pb-[calc(176px_+_56px)] md:pb-[calc(136px+_56px)]">
            <Card className="xl:w-2/3 w-full h-fit">
                <div className="grid md:grid-cols-2">
                    <CardHeader>
                        <Image src={imgSrc} alt={product.name} width={300} height={300} />
                        <CardTitle>{product.name}</CardTitle>
                        <PriceLabel price={product.price} />
                    </CardHeader>
                    <CardContent className="md:pt-8 md:pr-8">
                        <ItemDescription>{product.description}</ItemDescription>
                    </CardContent>
                </div>
                <CardFooter className="flex gap-x-2">
                    <Info width={16} height={16} className="min-w-4 min-h-4 max-w-4 max-h-4 text-muted-foreground" />
                    <p className="text-sm text-muted-foreground mt-[1px]">Dokonując zakup, akcpetujesz&nbsp;<Link href="/regulamin" className="text-primary underline-animation">Regulamin Płatności</Link></p>
                </CardFooter>
            </Card>
            <Card className="xl:w-1/3 w-full h-fit">
                <CardHeader className="pb-2">
                    <CardTitle>Zakup</CardTitle>
                    <CardDescription>Wybierz sposób płatności</CardDescription>
                </CardHeader>
                <PaymentForm slug={params.slug}/>
            </Card>
        </div>
        </TransactionProvider>
    )
}