'use client'
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const Paginate = ({ links }: any): any => {
    const pathName = usePathname()
    const router = useRouter();
    const searchParams = useSearchParams()
    const changePage = (page: string) => {
        const params = new URLSearchParams(searchParams)
        params.set('page', page)
        router.replace(`${pathName}?${params.toString()}`)

    }
    return (
        <nav>
            <ul className="pagination pagination-sm mt-5">
                {links.slice(1, -1).map((item: any, index: number) => (
                    <li key={index} className="page-item">
                        <button onClick={() => changePage(item.label)} className={item.active ? "page-link active" : "page-link"}>{item.label}</button>
                    </li>
                ))}
            </ul>
        </nav>
    )

}
export default Paginate;