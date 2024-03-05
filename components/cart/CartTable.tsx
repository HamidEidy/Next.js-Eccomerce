import { clearCart, decrement, increment, removeFromCart } from "@/redux/cart/action";
import { numberFormat, salePercent } from "@/utils/helper";
import Image from "next/image";
import Coupon from "./Coupon";
import { toast } from "react-toastify";
import { CartItem } from "@/interfaces";

const CartTable = ({data, dispatch, children}:{data: CartItem[] , dispatch: any, children:any}):JSX.Element =>{
    console.log('cart :', dispatch);
    
    return(
        <section className="container">
        <div className="row">
            <div className="justify-content-center d-flex align-items-center text-center">
                <div className="col-lg-10 col-sm-11">
                    <div className="row gy-5">
                        <div className="col-12">
                            <div className="table-responsive">
                                <table className="table align-middle mt-5">
                                    <thead>
                                        <tr>
                                            <th>محصول</th>
                                            <th>نام</th>
                                            <th>قیمت</th>
                                            <th>تعداد</th>
                                            <th>قیمت کل</th>
                                            <th></th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        {data.map((product: CartItem) => (
                                            <tr key={product.id}>
                                                <th>
                                                    <Image src={product.primary_image} width="100" height={60} alt="" />
                                                </th>
                                                <td className="fw-bold">{product.name}</td>
                                                <td>
                                                    <span>
                                                        {product.is_sale ? (
                                                            <>
                                                                <span>{numberFormat(product.sale_price)}</span>
                                                                <del className="me-1">{numberFormat(product.price)}</del>
                                                            </>
                                                        ) : (
                                                            <span>{numberFormat(product.price)}</span>
                                                        )}
                                                        <span>تومان</span>

                                                        {product.is_sale &&
                                                            <div className="text-danger fs-6">
                                                                {salePercent(product.price, product.sale_price)}% تخفیف
                                                            </div>}
                                                    </span>
                                                </td>
                                                <td>
                                                    <div className="input-counter">
                                                        <span className="plus-btn" onClick={() => product.qty < product.quantity && dispatch(increment(product.id))}>
                                                            +
                                                        </span>
                                                        <div className="input-number">{product.qty}</div>
                                                        <span className="minus-btn" onClick={() => product.qty > 1 && dispatch(decrement(product.id))}>
                                                            -
                                                        </span>
                                                    </div>
                                                </td>
                                                <td>

                                                    {product.is_sale ? (
                                                        <span>{numberFormat(product.sale_price * product.qty)}</span>
                                                    ) : (<span>{numberFormat(product.price * product.qty)}</span>)}




                                                    <span className="ms-1">تومان</span>
                                                </td>
                                                <td className="delt" onClick={() => {dispatch(removeFromCart(product.id)); toast.warning(`${product.name} از سبد خرید حذف شد !`)}}>
                                                    حذف
                                                </td>
                                            </tr>
                                        ))}

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-12 col-md-6">
                            <Coupon />
                        </div>
                        <div className="col-12 col-md-6 d-flex justify-content-end align-items-baseline">
                            {/* <Address /> */}
                            {children}
                        </div>
                    </div>
                    <div className="row justify-content-center mt-5">
                        <div className="col-12 col-md-6">
                            <div className="card">
                                <div className="card-body p-4">
                                    <h5 className="card-title fw-bold">مجموع سبد خرید</h5>
                                    <ul className="list-group mt-4">
                                        <li className="list-group-item d-flex justify-content-between">
                                            <div>مجموع قیمت :</div>
                                            <div>
                                                {numberFormat(data.reduce((total: number, product: CartItem) => {
                                                    return product.is_sale ? (total + product.sale_price * product.qty) : (total + product.price * product.qty)
                                                }, 0))}
                                                تومان
                                            </div>
                                        </li>
                                        <li className="list-group-item d-flex justify-content-between">
                                            <div>تخفیف :
                                                <span className="text-danger ms-1">  0 %</span>
                                            </div>
                                            <div className="text-danger">
                                                0 تومان
                                            </div>
                                        </li>
                                        <li className="list-group-item d-flex justify-content-between">
                                            <div>قیمت پرداختی :</div>
                                            <div>
                                                {/* {numberFormat((data.reduce((total:any, product:any) => {
                                                    return product.is_sale ? (total + product.sale_price * product.qty) : (total + product.price * product.qty)
                                                }, 0)) - (data.reduce((total:any, product:any) => {
                                                    return product.is_sale ? (total + product.sale_price * product.qty) : (total + product.price * product.qty)
                                                }, 0)))} */}
                                                {numberFormat(data.reduce((total: number, product: CartItem) => {
                                                    return product.is_sale ? (total + product.sale_price * product.qty) : (total + product.price * product.qty)
                                                }, 0))}
                                                تومان
                                            </div>
                                        </li>
                                    </ul>
                                    <div className="d-flex justify-content-between">
                                        <button className="btn btn-warning mt-3" onClick={() => dispatch(clearCart())}>پاک کردن سبد خرید</button>
                                        <button className="btn btn-success mt-3">پرداخت</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}
export default CartTable;