
import Categort from "@/components/menuPage/Category";
import Paginate from "@/components/menuPage/Paginate";
import SearchBox from "@/components/menuPage/SearchBox";
import SortBy from "@/components/menuPage/SortBy";
import { getFetch } from '@/utils/fetch';
import ProductList from "@/components/menuPage/ProductList";
import { ReactElement } from "react";
interface MenuProps {
    searchParams: string;
}

const menu = async ({ searchParams }: MenuProps): Promise<ReactElement> => {
    const params = new URLSearchParams(searchParams)
    const categories = await getFetch('/categories');

    const data = await getFetch(`/menu?${params.toString()}`)

    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                <SearchBox />
                </div>
           
                <div className="col-lg-3 col-sm-12">
                    <Categort categories={categories.data} />
                </div>
                <div className="col-lg-9 col-sm-12">
                    <SortBy />
                    <ProductList data={data.data}/>
                    <Paginate links={data.data.meta.links} params={params} />
                </div>
            </div>
        </div>

    )
}
export default menu;