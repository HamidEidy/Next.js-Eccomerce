
'use client'
import store from "@/redux/store"
import Image from "next/image"
import Link from "next/link"
import { useDispatch, useSelector } from "react-redux"
import CartTable from "./CartTable"
const layout = ({children}:any) => {
    const data = useSelector(store.getState).shoppingCart?.cart
    const dispatch = useDispatch()
    return(
        <div className="cart">
        {data?.length != 0 ? (
               <CartTable data={data} dispatch={dispatch} children={children} />
        ) : (
            <div className="cart-empty">
                <div className="text-center">
                    <div>
                        <Image width="100" height="100" src="https://img.icons8.com/quill/100/shopping-basket.png" alt="shopping-basket" />
                    </div>
                    <h3 className="text-bold mt-3">سبد خرید شما خالی است !</h3>
                    <Link href="/menu" className="btn btn-outline-dark mt-3">
                        مشاهده محصولات
                    </Link>
                </div>
            </div>
        )
        }
    </div>
    )
}
export default layout;