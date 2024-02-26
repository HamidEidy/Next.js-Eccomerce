import localFont from "next/font/local";
import "bootstrap/dist/css/bootstrap.min.css";
import "../scss/globals.scss";
import 'react-toastify/dist/ReactToastify.css';
import BootstrapClient from "@/components/libraries/BootstrapClient";
import Header from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer";
import { ToastContainer } from "react-toastify";
import NextNprogress from "@/components/libraries/NextNprogress";
import Providers from "@/components/libraries/ReduxProvider";
const myFont = localFont({
  src: '../public/font/Vazir.woff2'
})
export default function RootLayout({children}:any):any {
  return (
    <html lang="fa-ir">
      <body className={myFont.className} suppressHydrationWarning={true}>
        <NextNprogress>
        <Providers>
          <Header />
          <div className="content d-flex justify-content-center">
            <main className="col-lg-9 col-sm-11">
                {children}
              <BootstrapClient />
              <ToastContainer
                rtl={true}
              />
            </main>
          </div>
          </Providers>
          <Footer />
        </NextNprogress>
      </body>
    </html>
  );
}
