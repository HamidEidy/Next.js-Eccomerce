import APIManager from "@/utils/fetchWithToken";
import Link from "next/link";
import { Address } from "@/interfaces";
const Address = async () => {
    const data = await APIManager.getClientProfileData('/user/addresses')

    const UserAddress = data?.data

    return (
        <>

            {UserAddress.length > 1 ? (
                <>
                    <div>
                        انتخاب آدرس
                    </div>
                    <select style={{ width: "200px" }} className="form-select me-3" aria-label="Default select example">
                        {UserAddress.map((address: Address) => (
                            <option value={address.id}>{address.title}</option>
                        ))
                        }
                    </select>
                </>
            ) : (
                <Link href={'/profile/addresses'} className="btn btn-warning">
                    ایجاد آدرس
                </Link>
            )}


        </>
    )
}
export default Address;