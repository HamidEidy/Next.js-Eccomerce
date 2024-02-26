'use server'
import APIManager from "@/utils/fetchWithToken";
// import { EditClientProfile, checkOtpp, deleteUserAddress } from "@/utils/fetchWithToken";
import { handleError } from "@/utils/helper";
import { revalidatePath } from "next/cache";

interface UpdateClientResponse {
    status: string;
    message: string;
}
interface AddressResponse {
    status: string;
    message: string;
}

const updateClient = async (state: any, formData: FormData): Promise<UpdateClientResponse> => {
    const name = formData.get('name');
    const email = formData.get('email');
    if (name === '' || email === '') {
        return {
            status: 'error',
            message: "تمامی فیلد هارا پر کنید."
        }
    }
    const data = await APIManager.editClientProfile('/profile/info/edit', { name, email })
    if (data.status === 'success') {
        revalidatePath('/profile')
        return {
            status: data.status,
            message: "اطلاعات شما ویرایش شد",
        }
    } else {
        return {
            status: data.status,
            message: handleError(data.message),
        }
    }
}


const CreateAddress = async (state: any, formData: FormData): Promise<AddressResponse> => {
    const title = formData.get('title')
    const cellphone = formData.get('cellphone')
    const postal_code = formData.get('postal_code')
    const province_id = formData.get('province_id')
    const city_id = formData.get('city_id')
    const address = formData.get('address')
    const data = await APIManager.editClientProfile('/profile/addresses/create', {
        title,
        cellphone,
        postal_code,
        province_id,
        city_id,
        address
    })
    if (data.status === 'success') {
        revalidatePath('/profile/addresses')
        return {
            status: data.status,
            message: "آدرس جدید ایجاد شد",
        }
    } else {
        return {
            status: data.status,
            message: handleError(data.message),
        }
    }

}
const EditAddress = async (state: any, formData: FormData): Promise<AddressResponse>=> {
    const title = formData.get('title')
    const cellphone = formData.get('cellphone')
    const postal_code = formData.get('postal_code')
    const province_id = formData.get('province_id')
    const city_id = formData.get('city_id')
    const address = formData.get('address')
    const address_id = formData.get('address_id')
    const data = await APIManager.editClientProfile('/profile/addresses/edit', {
        title,
        cellphone,
        postal_code,
        province_id,
        city_id,
        address,
        address_id,

    })

    if (data.status === 'success') {
        revalidatePath('/profile/addresses')
        return {
            status: data.status,
            message: "آدرس با موفیقیت ویرایش شد",
        }
    } else {
        return {
            status: data.status,
            message: handleError(data.message),

        }

    }



}
const checkCode = async (state: any, formData: FormData): Promise<AddressResponse> => {
    const code = formData.get('code')
    const data = await APIManager.checkOtp('/check-coupon', {
        code
    })
    if (data.status === 'success') {
          revalidatePath('/profile/addresses')
        return {
            status: data.status,
            message: "تخفیف اعمال شد",
        }
    } else {
        return {
            status: data.status,
            message: handleError(data.message),
        }
    }
}
const addressDelete = async (id: number): Promise<AddressResponse> => {
    const data = await APIManager.deleteUserAddress('/profile/addresses/delete', {address_id:id})
    if (data.status === 'success') {
           revalidatePath('/profile/addresses')
        return {
            status: data.status,
            message: "آدرس مورد نظر حذف شد",
        }
    } else {
        return {
            status: data.status,
            message: handleError(data.message),
        }
    }
}


export { updateClient, CreateAddress, EditAddress, checkCode, addressDelete }