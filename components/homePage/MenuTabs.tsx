import { getFetch } from "@/utils/fetch";
import TabProduct from "./TabProduct";
const MenuTabs = async () => {
    const Product = await getFetch('/products/products-tabs');
    
    const tabList = Product.data.tabList
    const tabPanel = Product.data.tabPanel
    return (
        <section className="MenuTabs container text-center mt-5">
            <h1 className="spaceBg py-3">منوی محصولات</h1>
            <TabProduct tabPanel={tabPanel} tabList={tabList} />
        </section >

    )
}
export default MenuTabs;