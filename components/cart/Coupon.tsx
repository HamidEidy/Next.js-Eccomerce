'use client'
import { useFormState } from "react-dom";
import SubmitButton from "../SubmitButton";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { checkOtpp } from "@/utils/fetchWithToken";
import { checkCode } from "@/actions/profile";

const Coupon = () => {
    const [state, checkOtp] = useFormState<any, any>(checkCode, {})
    useEffect(() =>{
        // toast(state?.message, { type: `${state?.status}` });
        // ref.current?.reset();
        if (state?.status === 'error') {
            toast.error(state?.message)
        
            
        }else{
            toast.success(state?.message)

        }
    }, [state])
    return (
        <form className="couponbox input-group mb-3" action={checkOtp}>
            <SubmitButton title="اعمال کد تخفیف" style="btn btn-warning" />
            <input name="code" type="text" className="form-control text-end" placeholder="کد تخفیف" />
        </form>
    )
}
export default Coupon;