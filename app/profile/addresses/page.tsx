
import Addresses from "@/components/profile/Addresses";
import CreateAddressForm from "@/components/profile/CreateAddressForm";
import Layout from "@/components/profile/layout";
import APIManager from "@/utils/fetchWithToken";

const addresses = async () => {
    const resApi = await APIManager.getClientProfileData('/profile/addresses')
    const data = resApi.data;
    




    return (
        <Layout>
            <div className="col-12">
                <CreateAddressForm provinces={data.provinces} cities={data.cities} />
                <hr />
                {data.addresses.map((address: any) => (
                 <Addresses address={address} provinces={data.provinces} cities={data.cities} />
                ))}
            </div>
        </Layout>
   

    )
}
export default addresses;