
import ContactForm from "@/components/homePage/contact-us/ContactForm";
import Map from "@/components/homePage/contact-us/Map";
import dynamic from "next/dynamic";
const DynamicComponentWithNoSSR = dynamic(() => import('@/components/homePage/contact-us/Map'), {
    ssr: false
  })
  

const contactUs = (): JSX.Element => {
    return (
        <>
            <DynamicComponentWithNoSSR />
            <ContactForm />
        </>
    )
}
export default contactUs;