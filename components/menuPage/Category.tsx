'use client'
import { getFetch } from "@/utils/fetch";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const Categort = ({categories}:any)=> {
    const pathname = usePathname()
    const router = useRouter()
    const searchParams = useSearchParams()
 
    const changeCategory = (id: string) =>{
        const params = new URLSearchParams(searchParams)
       params.set('category' , id)
       params.delete('page')
       router.replace(`${pathname}?${params.toString()}`)
        
        
    }
    return (
        <div className="category mt-3 shadow-sm bg-white">
            <div className="filter-list rounded mt-3">
                <div className="categoryTitle">
                    <span className="me-4">دسته بندی :</span>
                </div>
                <ul>
                    {categories.map((item:any) => (
                        <li className={searchParams.has('category') && searchParams.get('category') == item.id ? "active" : ""} onClick={() => changeCategory(item.id)} key={item.id}>{item.name}</li>
                    ))}
                </ul>
            </div>
        </div >
    )
}

export default Categort;