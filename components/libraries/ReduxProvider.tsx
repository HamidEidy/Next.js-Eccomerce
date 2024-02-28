'use client';
import { Provider } from "react-redux";
import store from "@/redux/store";
import { createContext, useEffect, useState } from "react";
import { me } from "@/actions/auth";
import { User } from "@/interfaces";

export const AuthContext = createContext<any>(null);

const Providers = ({ children }: {children:React.ReactNode}) => {
    const [user, setUser] = useState<any>(null);
    const loginContext = (user:User | null) => {
        setUser(user)   
    }
    useEffect(() => {
        const checkUserLoggedIn = async () => {
            const usersData = await me()

            if (!usersData) {
                setUser(null)
            } else {
                setUser(usersData.user)
            }
        }
        checkUserLoggedIn();

    }, [])
    return (
        <>
            <AuthContext.Provider value={{ user, loginContext }}>
                <Provider store={store}>
                    {children}
                </Provider>
            </AuthContext.Provider>
        </>
    )
}
export default Providers;