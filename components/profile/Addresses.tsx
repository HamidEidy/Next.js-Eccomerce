'use client'
import { useFormState } from "react-dom";
import SubmitButton from "../SubmitButton";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { EditAddress, addressDelete } from "@/actions/profile";

const Addresses = ({ address, provinces, cities }: any) => {
    const [selectedProvince, setSelectedProvince] = useState('');

    const [state, updateAddress] = useFormState<any, any>(EditAddress, {})
    const handleProvinceChange = (e: any) => {
        const selectedProvince = e.target.value;
        setSelectedProvince(selectedProvince);
    };

    const DeleteAdres = async (e: any) => {
        e.preventDefault();
        const delet = await addressDelete(address.id)
        if (delet.status === 'success') {
            toast.success(delet.message)
        } else {
            console.log(delet.message);

        }
    }
    useEffect(() => {
        setSelectedProvince(address.province_id)
        if (state?.status === 'error') {
            toast.error(state?.message)
        } else {
            toast.success(state?.message)
        }
    }, [state])
    return (
        <div className="card card-body">
            <form action={updateAddress}>
                <div className="row g-4">
                    <div className="col col-md-6 col-sm-12">
                        <label className="form-label">عنوان</label>
                        <input name="title" type="text" className="form-control" defaultValue={address.title} />
                    </div>
                    <div className="col col-md-6 col-sm-12">
                        <label className="form-label">شماره تماس</label>
                        <input name="cellphone" type="text" defaultValue={address.cellphone} className="form-control" />
                    </div>
                    <div className="col col-md-6 col-sm-12">
                        <label className="form-label">کد پستی</label>
                        <input name="postal_code" type="text" defaultValue={address.postal_code} className="form-control" />
                    </div>



                    <div className="col col-md-6">
                        <label className="form-label">استان</label>
                        <select defaultValue={address.province_id} name="province_id" className="form-select" onChange={handleProvinceChange}>
                            {provinces.map((item: any) => (

                                <option key={item.id} value={item.id}>{item.name}</option>
                            ))}
                        </select>
                    </div>


                    <div className="col col-md-6">
                        <label className="form-label">شهر</label>
                        <select defaultValue={address.city_id} name="city_id" className="form-select" >
                            {cities.filter((item: any) => item.province_id == selectedProvince).map((item: any) => (
                                <option key={item.id} value={item.id}>{item.name}</option>
                            ))}
                        </select>
                    </div>


                    <div className="col col-12">
                        <label className="form-label">آدرس</label>
                        <textarea defaultValue={address.address} name="address" rows={5}
                            className="form-control"></textarea>
                    </div>
                    <input className="d-none" name="address_id" defaultValue={address.id}></input>
                </div>
                <div className="d-flex justify-content-between mt-4">
                    <SubmitButton title="ویرایش" style="btn btn-warning" />
                    <button className="btn btn-danger" onClick={DeleteAdres}>حذف</button>
                </div>
            </form>

        </div>
    )
}
export default Addresses;
