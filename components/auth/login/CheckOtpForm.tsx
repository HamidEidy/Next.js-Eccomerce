'use client'
import { useFormState } from "react-dom";
import { checkOtp, resendOtp } from "@/actions/auth";
import { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import SubmitButton from "@/components/SubmitButton";
import { AuthContext } from "@/components/libraries/ReduxProvider";
import ResendOtpButton from "./ResendOtpButton";
const checkOtpForm = () => {
    const [stateOtp, formActionOtp] = useFormState<any, any>(checkOtp, {});
    const router = useRouter();
    const { loginContext } = useContext<any>(AuthContext);
    useEffect(() => {
        if (stateOtp.status === 'error') {
            toast.error(stateOtp.message)
        }
        if (stateOtp.status === 'checked-otp') {
            toast.success(stateOtp.message)
            loginContext(stateOtp.data)
            router.push('/')
        }
 
    }, [stateOtp])
    return (
        <section className="loginpage d-flex justify-content-center align-items-center">
            <div className="loginform border rounded p-5 bg-light shadow-lg">
                <form action={formActionOtp}>
                    <h3>کد تایید را وارد کنید</h3>
                    <p>برای ساخت حساب ، کد تایید برای شما ارسال گردید.</p>
                    <div className="alert alert-warning">
    فکر کن کد ورود 123456 برات پیامک شده :)
        </div>
                    <input type="text" name="otp" />
                    <SubmitButton title={'ورود'} style={'btn btn-warning mb-3'} />
                </form>
                <ResendOtpButton />
            </div>
        </section>
    )
}
export default checkOtpForm;