'use client'
import { logOutUser } from "@/actions/auth";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const LogOutButton = () => {
    const router = useRouter();
    const logOut = () => {
        logOutUser()
        router.push('/')
        toast.success('با موفقیت خارج شدید')
    }
    
    return (
        <span className={'logoutbtn'} onClick={logOut}>خروج</span>
    )
    
}
export default LogOutButton; 