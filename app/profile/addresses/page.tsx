
import Addresses from "@/components/profile/Addresses";
import CreateAddressForm from "@/components/profile/CreateAddressForm";
import APIManager from "@/utils/fetchWithToken";
import { Address } from "@/interfaces";
const addresses = async () => {
    const resApi = await APIManager.getClientProfileData('/profile/addresses')
    const data = resApi.data;
    return (
            <div className="col-sm-12 col-lg-9">
                <CreateAddressForm provinces={data.provinces} cities={data.cities} />
                <hr />
                {data.addresses.map((address: Address) => (
                 <Addresses address={address} provinces={data.provinces} cities={data.cities} />
                ))}
            </div>
    )
}
export default addresses;