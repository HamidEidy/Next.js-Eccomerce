'use client'

import { useFormState } from "react-dom";
import SubmitButton from "../SubmitButton";
import { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import { CreateAddress } from "@/actions/profile";
const CreateAddressForm = ({ provinces, cities }: any) => {
    const [state, createNewAddress] = useFormState<any, any>(CreateAddress, {})
    const [selectedProvince, setSelectedProvince] = useState('');
    const handleProvinceChange = (e) => {
        const selectedProvince = e.target.value;
        setSelectedProvince(selectedProvince);
    };
    const ref = useRef<HTMLFormElement>(null);
    useEffect(() => {
        // toast(state?.message, { type: `${state?.status}` });
        // ref.current?.reset();
        if (state?.status === 'error') {
            toast.error(state?.message)
        } else {
            toast.success(state?.message)
            ref.current?.reset();
        }
    }, [state])
    return (
        <>
            <button className="btn btn-warning" type="button" data-bs-toggle="collapse"
                data-bs-target="#collapseExample">
                ایجاد آدرس جدید
            </button>
            <div className="collapse mt-3" id="collapseExample">
                <form className="card card-body" action={createNewAddress} ref={ref}>
                    <div className="row g-4">
                        <div className="col col-md-6 col-sm-12">
                            <label className="form-label">عنوان</label>
                            <input type="text" name="title" className="form-control" />

                        </div>
                        <div className="col col-md-6 col-sm-12">
                            <label className="form-label">شماره تماس</label>
                            <input type="text" name="cellphone" className="form-control" />
                        </div>
                        <div className="col col-md-6 col-sm-12" >
                            <label className="form-label">کد پستی</label>
                            <input type="text" name="postal_code" className="form-control" />
                        </div>
                        <div className="col col-md-6 ">
                            <label className="form-label">استان</label>
                            <select name="province_id" className="form-select" onChange={handleProvinceChange}>
                                <option disabled selected>استان خود را انتخاب کنید</option>
                                {provinces.map((item: any) => (
                                    <option key={item.id} value={item.id}>{item.name}</option>
                                ))}
                            </select>
                        </div>
                        <div className="col col-md-6">
                            <label className="form-label">شهر</label>
                            <select name="city_id" className="form-select" >
                                <option disabled selected>شهر خود را انتخاب کنید</option>
                                {selectedProvince ? (
                                    cities.filter((item) => item.province_id == selectedProvince).map((item) => (
                                        <option key={item.id} value={item.id} >{item.name}</option>
                                    ))

                                ) : (
                                    <option key={100} disabled>ابتدا استان  خود را وارد کنید</option>
                                )}

                            </select>
                        </div>
                        <div className="col col-12">
                            <label className="form-label">آدرس</label>
                            <textarea name="address" rows={5} className="form-control"></textarea>
                        </div>
                    </div>
                    <div>
                        <SubmitButton title="ایجاد آدرس" style="btn btn-warning mt-3" />
                    </div>
                </form>
            </div>
        </>
    )
}
export default CreateAddressForm;