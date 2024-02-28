import Paginate from "@/components/menuPage/Paginate";
import Layout from "@/app/profile/layout";
import APIManager from "@/utils/fetchWithToken";
import { getBlurDataURL, numberFormat } from "@/utils/helper";
import Image from "next/image";
import { ParamType } from "@/interfaces";
const orders = async ({ searchParams }: any) => {
    console.log('searchParam  :', searchParams);
    
    const params = new URLSearchParams(searchParams)
    const data = await APIManager.getOrders(`/profile/orders?${params.toString()}`)
    return (
        <div className="col-sm-12 col-lg-9">
            {data?.data ? (
                <div className="col-12 orders">
                    <div className="table-responsive">
                        <table className="table align-middle">
                            <thead>
                                <tr>
                                    <th>شماره سفارش</th>
                                    <th>آدرس</th>
                                    <th>وضعیت</th>
                                    <th>وضعیت پرداخت</th>
                                    <th>قیمت کل</th>
                                    <th>تاریخ</th>
                                    <th>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.data.orders.map((order: any) => (
                                    <tr key={order.id}>
                                        <th>
                                            {order.id}
                                        </th>
                                        <td>{order.address_title}</td>
                                        <td>{order.status}</td>
                                        <td>
                                            <span className={order.payment_status == 'موفق' ? 'text-success' : 'text-danger'}>{order.payment_status}</span>
                                        </td>
                                        <td>{numberFormat(order.paying_amount)} تومان</td>
                                        <td>{order.created_at}</td>
                                        <td>
                                            <button type="button" className="btn btn-warning" data-bs-toggle="modal"
                                                data-bs-target={`#modal-${order.id}`}>
                                              جزییات
                                            </button>
                                            <div className="modal fade" id={`modal-${order.id}`}>
                                                <div className="modal-dialog modal-lg">
                                                    <div className="modal-content">
                                                        <div className="modal-header aval">

                                                            <h6 className="modal-title">محصولات سفارش
                                                                شماره {order.id}</h6>

                                                            <button type="button" className="btn-close" data-bs-dismiss="modal"
                                                                aria-label="Close"></button>

                                                        </div>
                                                        <div className="modal-body">
                                                            <table className="table align-middle">
                                                                <thead>
                                                                    <tr>
                                                                        <th>محصول</th>
                                                                        <th>نام</th>
                                                                        <th>قیمت</th>
                                                                        <th>تعداد</th>
                                                                        <th>قیمت کل</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    {order.order_items.map((item:any) => (
                                                                        <tr key={item.id}>
                                                                            <th>
                                                                                <Image className="axx" src={item.product_primary_image} layout="responsive" width={0} height={0}
                                                                                    style={{
                                                                                        width: '40px',
                                                                                        height: '20px'
                                                                                    }}
                                                                                    alt="primary-image" />
                                                                            </th>
                                                                            <td className="fw-bold">{item.product_name}</td>
                                                                            <td>{numberFormat(item.price)} تومان</td>
                                                                            <td>
                                                                                {item.quantity}
                                                                            </td>
                                                                            <td>{numberFormat(item.subtotal)} تومان</td>
                                                                        </tr>

                                                                    ))}
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>

                                ))}

                            </tbody>
                        </table>
                    </div>
                    {data.data.orders.length < 9 ? (
                        <Paginate links={data.data.meta.links} params={params} />
                    ) : (
                        <></>
                    )
                    }
                </div>
            ) : (
                <h5 className="text-center mt-3">سفارشی برای نمایش وجود ندارد...</h5>
            )

            }





        </div>
    )
}


export default orders;