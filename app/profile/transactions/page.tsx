import Paginate from "@/components/menuPage/Paginate";
import Layout from "@/components/profile/layout";
import APIManager from "@/utils/fetchWithToken";
import { numberFormat } from "@/utils/helper";

const transactions = async ({ searchParams }: any) => {
    const params = new URLSearchParams(searchParams)
    const data = await APIManager.getOrders(`/profile/transactions?${params.toString()}`)


    return (
        <Layout>
            <div className="col-12">
                <div className="table-responsive">
                    <table className="table align-middle">
                        <thead>
                            <tr>
                                <th>شماره سفارش</th>
                                <th>مبلغ</th>
                                <th>وضعیت</th>
                                <th>شماره پیگیری</th>
                                <th>تاریخ</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.data.transactions.map((item:any) => (
                                <tr>
                                    <th>
                                        {item.id}
                                    </th>
                                    <td>{numberFormat(item.amount)} تومان</td>
                                    <td>
                                        <span className={item.status === 'موفق' ? 'text-success' : 'text-danger'}>{item.status}</span>
                                    </td>
                                    <td>{item.order_id * 85642}</td>
                                    <td>{item.created_at}</td>
                                </tr>
                            ))}


                        </tbody>
                    </table>
                </div>
                { data.data.transactions.length < 8 ? (
                     <Paginate links={data.data.meta.links} params={params} />
                ) : (
                    <></>
                ) }
               
            </div>
        </Layout>
    )
}
export default transactions;