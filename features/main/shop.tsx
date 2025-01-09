import { catchError } from "@/utils/catch-error"
import { SectionDivider } from "../../components/section-divider"
import { Item } from "../shop/item"

export const ShopSection = async () => {
    const [error, data] = await catchError(fetch(`${process.env.NEXT_PUBLIC_API_URL}/product/get`, { cache: 'no-store' }))
    if (error) {
        throw error
    }
    const items = await data.json()
    return (
        <div className="w-full mt-40 py-8 px-6" id="shop">
            <SectionDivider>Sklep</SectionDivider>
            <div className="mt-10 flex flex-wrap w-full justify-center gap-y-4 gap-x-8 ">
                {items && items.map((item: any) => {
                    return <Item title={item.name} image={item.image} alt={item.name} key={item.id} price={item.price} id={item.id}>{item.description}</Item>
                })}
            </div>
        </div>
    )
}