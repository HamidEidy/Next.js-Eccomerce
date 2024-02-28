'use client'
import { addToCart } from "@/redux/cart/action";
import { useDispatch } from "react-redux";
import { CartItem } from "@/interfaces";
const AddButton = ({ product }: { product: CartItem }) => {
    const dispatch = useDispatch();

    const handleAddToCart = (product: CartItem) => {
        dispatch(addToCart(product, 1))
        console.log(product);


    }
    return (
        <button onClick={() => handleAddToCart(product)} className="buy btn btn-secondary">افزودن به سبد خرید</button>
    )
}

export default AddButton;