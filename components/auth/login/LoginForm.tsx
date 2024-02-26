'use client'
import { useFormState } from "react-dom";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { login } from "@/actions/auth";
import { useRouter } from "next/navigation";
import SubmitButton from "@/components/SubmitButton";
const LoginForm = ({ setAuth }) => {
    const [stateLogin, formActionLogin] = useFormState<any, any>(login, {});
    const oruter = useRouter()
    useEffect(() => {
        if (stateLogin.status === 'error') {
            toast.error(stateLogin.message)
        } else {
            toast.success(stateLogin.message)
            setAuth(false)
        }
    }, [stateLogin])
    return (
        <section className="loginpage d-flex justify-content-center align-items-center ">
            <form action={formActionLogin} className="loginform border rounded p-5 bg-light shadow-lg">
                <h3>ورود | ثبت نام</h3>
                <p>سلام!</p>
                <p>لطفا شماره موبایل خود را وارد کنید</p>
                <input type="text" name="cellphone" />
                <SubmitButton title={'دریافت کد ورود'} style={'btn btn-warning'} />
            </form>
        </section>
    )
}
export default LoginForm;