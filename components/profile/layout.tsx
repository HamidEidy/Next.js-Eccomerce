import Link from "next/link";
import LogOutButton from "./LogOutButton";

const Layout = ({ children }) => {

    return (
        <section className="profile_section mt-5">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-lg-3 mb-5">
                        <ul className="list-group">
                            <li className="list-group-item">
                                <Link href="/profile">
                                    اطلاعات کاربر
                                </Link>
                            </li>
                            <li className="list-group-item">
                                <Link href="/profile/addresses">
                                  آدرس ها
                                </Link>
                            </li>
                            <li className="list-group-item">
                                <Link href="/profile/orders">
                                سفارشات
                                </Link>
                            </li>
                            <li className="list-group-item">
                                <Link href="/profile/transactions">
                                تراکنش ها
                                </Link>
                            </li>
                            <li className="list-group-item">
                            <LogOutButton />
                            </li>
                        </ul>
                    </div>

                    <div className="col-sm-12 col-lg-9">
                        {children}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Layout;