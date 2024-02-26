'use client'
import { addToCart } from "@/redux/cart/action";
import { useDispatch } from "react-redux";

const AddButton = ({ product }:any) => {
    const dispatch = useDispatch();

    const handleAddToCart = () => {
         dispatch(addToCart(product, 1))
     
        
    }
    return (
        <button onClick={() => handleAddToCart(product)} className="buy btn btn-secondary">افزودن به سبد خرید</button>
    )
}

export default AddButton;