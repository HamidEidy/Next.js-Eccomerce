'use client'

import Link from "next/link";

const MenuButton = (): JSX.Element => {
    return (
        <div className="gotoMenu border rounded text-center container mt-5">
            <Link href={'/menu'} className="m-5 btn bg-warning">مشاهده کامل منو و سفارش آنلاین</Link>
        </div>
    )
}
export default MenuButton;