import Slider from "@/components/homePage/Slider";
import MenuTabs from "@/components/homePage/MenuTabs";
import MenuButton from "@/components/homePage/GoToMenuButton";
import Suggestions from "@/components/homePage/Suggestions";
import ContactForm from "@/components/homePage/contact-us/ContactForm";
import dynamic from "next/dynamic";
const DynamicComponentWithNoSSR = dynamic(() => import('@/components/homePage/contact-us/Map'), {
  ssr: false
})
export default function Home() {
  return (
    <div className="container">
    <div className="row">
    <main className="col-12">
      <Slider />
      <MenuTabs />
      <MenuButton />
      <Suggestions title={'محصولات پیشنهادی'}/>
      <DynamicComponentWithNoSSR />
      <ContactForm />
    </main>
    </div></div>
  );
}
