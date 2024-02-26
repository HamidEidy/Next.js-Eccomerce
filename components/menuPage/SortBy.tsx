'use client'

import { usePathname, useRouter, useSearchParams } from "next/navigation";

const SortBy = (): JSX.Element => {
    const searchParams = useSearchParams()
    const router = useRouter();
    const pathname = usePathname()
    const params = new URLSearchParams(searchParams)
    const SortBy = (type: string) => {

        params.set('sortBy', type)

        router.replace(`${pathname}?${params.toString()}`)

    }
    const removeFilters = () => {
        params.delete('sortBy')
        router.replace(`${pathname}?${params.toString()}`)
    }
    return (
        <div className="sortby mt-3 shadow-sm bg-white">

            <div className="filter-list rounded mt-3 d-flex row">

                <div className="categoryTitle col-lg-3 col-sm-12">
                    <span className="me-4">فیلتر بر اساس :</span>
                </div>

                <ul className="d-flex row col-lg-9 col-sm-12">
                    <li className={
                        searchParams.has('sortBy') && searchParams.get('sortBy') == 'bestseller' ? "active col-lg-2 col-sm-12" : "col-lg-2 col-sm-12"
                    } onClick={() => SortBy('bestseller')}>
                        محبوب ترین ها
                    </li>
                    <li className={
                        searchParams.has('sortBy') && searchParams.get('sortBy') == 'max' ? "active col-lg-2 col-sm-12" : "col-lg-2 col-sm-12"
                    } onClick={() => SortBy('max')}>
                        بیشترین قیمت

                    </li>
                    <li className={
                        searchParams.has('sortBy') && searchParams.get('sortBy') == 'min' ? "active col-lg-2 col-sm-12" : "col-lg-2 col-sm-12"
                    } onClick={() => SortBy('min')}>
                        کمترین قیمت
                    </li>
                    <li className={
                        searchParams.has('sortBy') && searchParams.get('sortBy') == 'sale' ? "active col-lg-2 col-sm-12" : "col-lg-2 col-sm-12"
                    } onClick={() => SortBy('sale')}>
                        با تخفیف
                    </li>
                    <li className="col-lg-2 col-sm-12 text-danger" onClick={() => removeFilters()}>
                        حذف فیلترها
                    </li>
                </ul>

            </div>
        </div >

    )
}
export default SortBy;