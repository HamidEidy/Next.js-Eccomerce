import { getFetch } from "@/utils/fetch";
import TabProduct from "./TabProduct";
import TabsTitle from "../TabsTitle";
const MenuTabs = async () => {
    const Product = await getFetch('/products/products-tabs');
    
    const tabList = Product.data.tabList
    const tabPanel = Product.data.tabPanel
    return (
        <section className="MenuTabs container text-center">
          <TabsTitle titletext='منوی محصولات' />
            <TabProduct tabPanel={tabPanel} tabList={tabList} />
        </section >

    )
}
export default MenuTabs;