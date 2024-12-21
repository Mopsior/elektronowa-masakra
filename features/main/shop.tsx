import { SectionDivider } from "../../components/section-divider"
import { Item } from "../shop/item"

export const ShopSection = () => {
    return (
        <div className="w-full mt-40 py-8 px-6">
            <SectionDivider>Sklep</SectionDivider>
            <div className="mt-10 flex flex-wrap w-full justify-center gap-y-4 gap-x-8 ">
                <Item title="Ranga VIP" image="https://tawk.link/5e84768f69e9320caabf2a6b/kb/attachments/WET4q0_V-A.png" alt="Ranga VIP">Dzięki tej randze, dostaniesz opcje darmowych koks jabłek oraz kanał na dsc. Twój nich będzie się świecić jak psu jajca</Item>
                <Item title="Ranga VIP" image="https://tawk.link/5e84768f69e9320caabf2a6b/kb/attachments/WET4q0_V-A.png" alt="Ranga VIP">Dzięki tej randze, dostaniesz opcje darmowych koks jabłek oraz kanał na dsc. Twój nich będzie się świecić jak psu jajca</Item>
                <Item title="Ranga VIP" image="https://tawk.link/5e84768f69e9320caabf2a6b/kb/attachments/WET4q0_V-A.png" alt="Ranga VIP">Dzięki tej randze, dostaniesz opcje darmowych koks jabłek oraz kanał na dsc. Twój nich będzie się świecić jak psu jajca</Item>
            </div>
        </div>
    )
}