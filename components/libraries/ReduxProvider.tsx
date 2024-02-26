'use client';
import { Provider } from "react-redux";
import store from "@/redux/store";
import { createContext, useEffect, useState } from "react";
import { me } from "@/actions/auth";


export const AuthContext = createContext(null);

const Providers = ({ children }: any) => {
    const [user, setUser] = useState(null);
    const loginContext = (user: any): any => {
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