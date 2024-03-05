'use client'
import { useFormState } from "react-dom";
import SubmitButton from "../../SubmitButton";
import { create } from "@/actions/contact";
import { useEffect, useRef } from "react";
import { toast } from "react-toastify";
import TabsTitle from "@/components/TabsTitle";

const ContactForm = () => {
const [state, formAction] = useFormState<any, any>(create, {});
const ref = useRef<HTMLFormElement>(null);
useEffect(() =>{
    // toast(state?.message, { type: `${state?.status}` });
    // ref.current?.reset();
    if (state?.status === 'error') {
        toast.error(state.message)
    }else{
        toast.success(state.message)
        ref.current?.reset();
    }
}, [state])

    return (
        <section className="container text-center">
           <TabsTitle titletext='تماس با ما' />
            <form action={formAction} ref={ref}>
                <div className="form-group row">
                    <div className="form-group col-md-6 pt-3">
                        <input name="name" type="text" className="form-control shadow-none" placeholder="نام و نام خانوادگی" />
                    </div>
                    <div className="form-group col-md-6 pt-3">
                        <input name="email" type="text" className="form-control shadow-none" placeholder="ایمیل" />
                    </div>
                </div>
                <div className="form-group pt-3">
                    <input name="subject" type="text" className="form-control shadow-none" placeholder="موضوع پیام" />
                </div>
                <div className="form-group pt-3">
                    <textarea name="text"  className="form-control shadow-none" placeholder="متن پیام را بنویسید..." rows={10} />
                </div>
               <SubmitButton title="ارسال پیام" style="btn btn-warning mt-3" />
            </form>
        </section>
    )
}
export default ContactForm;