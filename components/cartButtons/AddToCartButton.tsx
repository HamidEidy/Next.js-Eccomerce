'use client'

import { addToCart, removeFromCart } from "@/redux/cart/action"
import { useDispatch } from "react-redux"
import { CartItem } from "@/interfaces"


const AddToCartButton = ({product, qty}:{product:CartItem, qty:number}) => {
    const dispatch = useDispatch()

    const handleAddToCart = () => {
        dispatch(removeFromCart(product.id))
        dispatch(addToCart(product, qty))
        // console.log('product :',product);
        
    }

    return(
        <button className="btn bg-warning w-100" onClick={handleAddToCart}>افزودن به سبد خرید</button>
    )
}
export default AddToCartButton