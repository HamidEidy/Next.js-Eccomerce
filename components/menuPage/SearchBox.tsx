'use client'
import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react"

const SearchBox = (): JSX.Element => {
    const [term, setTerm] = useState<string>('');
    const pathname = usePathname();
    const router = useRouter();
    const searchParams = useSearchParams()
    const handleSearch = (remove:boolean | null): void => {
        const params = new URLSearchParams(searchParams);
        if (remove) {
            params.delete('search')
            setTerm('')
        }else{
            params.set('search', term)
        }
        router.replace(`${pathname}?${params.toString()}`)
    }
    return (
        <div className="mt-3 navbar navbar-expand-lg shadow-sm bg-white rounded">
            <div className="container justify-content-center d-flex">
                <div className="col-lg-2 col-sm-4 py-2">
                    <span>
                        دنبال چی میگردی؟
                    </span>
                </div>
                <div className="col-lg-10 col-sm-8 searchbox">
                    <input onChange={(e) => setTerm(e.target.value)} value={term} className="rounded searchInput" id="search" type="text" placeholder="اینجا بنویس..." />


                   {term && <Image onClick={() => handleSearch(null)} className="serch" width="25" height="25" src="https://img.icons8.com/dusk/100/search--v1.png" alt="search--v1" />} 
                   {searchParams.has('search') && term && <Image onClick={() => handleSearch(true)} width="25" className="remove" height="25" src="https://img.icons8.com/fluency/100/delete-sign.png" alt="delete-sign" /> }
                </div>
            
            </div>
       
        </div>
    )
}
export default SearchBox;