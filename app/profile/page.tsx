

import ClientDataForm from "@/components/profile/ClientDataForm";
import APIManager from "@/utils/fetchWithToken";
const profile = async () => {
    const resApi = await APIManager.getClientProfileData('/profile/info')
     const client = resApi.data;
    return (
 
            <div className="col-sm-12 col-lg-9">
                <ClientDataForm client={client} />
            </div>
    

    )
}
export default profile;