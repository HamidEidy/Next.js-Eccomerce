'use client'
import { decrement, increment } from "@/redux/cart/action"
import store from "@/redux/store"
import Image from "next/image"
import { useEffect, useState } from "react"
import AddToCartButton from "./AddToCartButton"

const IncDecButtons = ({ product }: any) => {
    const [qty , setQty] = useState(1)




    return (
        <>
                <div className=" d-flex justify-content-between flex-row">
        <div>
            <span>تعداد :       </span>
            <span className="input-number">{qty}</span>
        </div>

        <div className="input-counter ms-4 mb-2">
            <Image
                onClick={() => qty < product.quantity && setQty(qty + 1)
                }
                width="30" height="30" src="https://img.icons8.com/pulsar-line/100/circled-chevron-up.png" alt="circled-chevron-up" />
            <Image
                onClick={() => qty > 1 && setQty(qty - 1)
                }
                width="30" height="30" src="https://img.icons8.com/pulsar-line/100/circled-chevron-down.png" alt="circled-chevron-down" />
        </div>
        </div>
        <AddToCartButton product={product} qty={qty} />
        </>

        
    )
}

export default IncDecButtons;