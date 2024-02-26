'use client'
import { resendOtp } from "@/actions/auth";
import SubmitButton from "@/components/SubmitButton";
import { useEffect, useState } from "react";
import { useFormState } from "react-dom";
import { toast } from "react-toastify";

const ResendOtpButton = () => {
    const [stateResendOtp, formActionresendOtp] = useFormState<any, any>(resendOtp, {});
    const [second, setSecond] = useState(15);
    useEffect(() => {
        const interval = setInterval(() => {
            if (second > 0) {
                setSecond(second - 1);
            }
        }, 1000); 
        return () => clearInterval(interval);
    }, [second])
    useEffect(() =>{
        if (stateResendOtp.status === 'reSend-otp') {
            toast.success(stateResendOtp.message)
            setSecond(15)
        }
        if (stateResendOtp.status === 'error') {
            toast.error(stateResendOtp.message)
        }
    }, [stateResendOtp])
    return (
        <form action={formActionresendOtp}>
            {second > 0 ? (
                            <small>00:{second < 10 ? `0${second}` : second} مانده تا ارسال مجدد کد</small>
            ) : (
                <SubmitButton title={'ارسال مجدد کد'} style={' btn btn-dark'} />
            )}


        </form>
    )
}
export default ResendOtpButton;