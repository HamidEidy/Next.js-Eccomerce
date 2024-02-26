'use client'

import { addToCart, removeFromCart } from "@/redux/cart/action"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { toast } from "react-toastify"


const AddToCartButton = ({product, qty}:any) => {
    const dispatch = useDispatch()

    const handleAddToCart = () => {
        dispatch(removeFromCart(product.id))
        dispatch(addToCart(product, qty))
    }

    return(
        <button className="btn bg-warning w-100" onClick={handleAddToCart}>افزودن به سبد خرید</button>
    )
}
export default AddToCartButton