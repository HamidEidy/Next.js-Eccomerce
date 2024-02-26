'use client'
import LoginForm from "@/components/auth/login/LoginForm";
import CheckOtpForm from "@/components/auth/login/CheckOtpForm";
import { useEffect, useState } from "react";


const logins: React.FC = () => {
    const [auth, setAuth]: [boolean, React.Dispatch<React.SetStateAction<boolean>>] = useState(true)
    useEffect(() => {
        setAuth(true)
    }, [])
    return (
        <div className="my-5">
            {auth ? (
                <LoginForm setAuth={setAuth} />
            ) : (
                <CheckOtpForm />
            )}
        </div>
    )
}
export default logins;