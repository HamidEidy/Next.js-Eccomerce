'use client'
import { useFormState } from "react-dom";
import SubmitButton from "../SubmitButton";
import { updateClient } from "@/actions/profile";
import { useEffect } from "react";
import { toast } from "react-toastify";


const ClientDataForm = ({client}:any) =>{
    const [state, updateForm] = useFormState<any, any>(updateClient, {})
    useEffect(() =>{
        // toast(state?.message, { type: `${state?.status}` });
        // ref.current?.reset();
        if (state?.status === 'error') {
            toast.error(state?.message)
        }else{
            toast.success(state?.message)

        }
    }, [state])
    return(
        <form action={updateForm} className="vh-70">
        <div className="row g-4" >
            <div className="col col-md-6 col-sm-12">
                <label className="form-label">نام و نام خانوادگی</label>
                <input name="name" type="text" className="form-control" defaultValue={client.name} />
            </div>
            <div className="col col-md-6 col-sm-12">
                <label className="form-label">ایمیل</label>
                <input name="email" type="text" className="form-control" defaultValue={client.email} />
            </div>
            <div className="col col-md-6 col-sm-12">
                <label className="form-label">شماره تلفن</label>
                <input type="text" className="form-control" disabled defaultValue={client.cellphone} />
            </div>
        </div>
        {/* <button className="btn btn-primary mt-4">ویرایش</button> */}
        <SubmitButton  title="ویرایش" style="btn btn-warning mt-3"  />
    </form>
    )
}
export default ClientDataForm;