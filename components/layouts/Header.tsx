'use client'
import store from "@/redux/store";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { AuthContext } from "../libraries/ReduxProvider";

const Header = (): any => {
    const route = usePathname()
    const [cartCount, setCartCount] = useState<[] | null>([]);
    const state = useSelector((state:any) => state.shoppingCart);
    const { user } = useContext<any>(AuthContext);

    useEffect(() => {
        setCartCount(state.cart.length)
    }, [state])


    return (
        <nav className="navbar navbar-expand-lg shadow-sm bg-white">
            <div className="container">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                <a className="navbar-brand" href="/">
                    <img src="https://img.icons8.com/external-vitaliy-gorbachev-lineal-color-vitaly-gorbachev/50/external-pizza-fast-food-vitaliy-gorbachev-lineal-color-vitaly-gorbachev-1.png" alt="external-pizza-fast-food-vitaliy-gorbachev-lineal-color-vitaly-gorbachev-1" />
                </a>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <Link className={route === '/' ? 'me-3 nav-link activenav' : ' me-3 nav-link'} href="/">صفحه اصلی</Link>
                        <Link className={route === '/menu' ? 'me-3 nav-link activenav' : ' me-3 nav-link'} href="/menu">منوی محصولات</Link>
                        <Link className={route === '/contact-us' ? ' me-3 nav-link activenav' : ' me-3 nav-link'} href="/contact-us">تماس با ما</Link>
                        <Link className={route === '/branches' ? ' me-3 nav-link activenav' : ' me-3 nav-link'} href="/branches">شعب و نمایندگی</Link>
                    </ul>
                    <Link href="/cart" className="cartIcon">
                        <Image className="ms-3" width="40" height="40" src="https://img.icons8.com/external-flaticons-flat-flat-icons/64/external-cart-100-most-used-icons-flaticons-flat-flat-icons.png" alt="cart-icon" />

                        <small className="cartCounter text-dark">{cartCount}</small>
                    </Link>
                    <Link className="btn btn-warning rounded" href={user ? '/profile' : '/login'}>{user ? 'پروفایل' : 'ورود | عضویت'}</Link>
                </div>

            </div>
        </nav>
    )
}
export default Header;