import Link from "next/link";
const Footer = (): JSX.Element => {
    return (
        <footer className="footer_section bg-dark text-light text-center py-5 mt-5">
        <div className="footer-info">
            <div className="footer_detail">
                <h2 className="footer-logo fs-1 mb-3">
                    وبسایت فروشگاهی فست فود
                </h2>
                <p>
                    ابزار های مورد استفاده: html, css, Next.js, Laravel api
                </p>
                <div className="footer_social">
                    <a href="https://www.linkedin.com/in/hamidreza-eidy/" data-toggle="tooltip" title="لینکدین">
                    <img width="50" height="50" src="https://img.icons8.com/plasticine/100/linkedin.png" alt="linkedin"/>
                    </a>
                    <a href="https://github.com/HamidEidy" data-toggle="tooltip" title="گیت هاب">
                    <img width="50" height="50" src="https://img.icons8.com/plasticine/100/github.png" alt="github"/>
                 </a>
                 <a href="mailto:hamidreza.eidy1999@gmail.com" data-toggle="tooltip" title="ایمیل">
                    <img width="50" height="50" src="https://img.icons8.com/plasticine/100/gmail.png" alt="gmail"/>
                     </a>
                    <a href="https://t.me/HamidrezaEidy" data-toggle="tooltip" title="تلگرام">
                    <img width="50" height="50" src="https://img.icons8.com/plasticine/100/telegram-app.png" alt="telegram-app"/>
                    </a>
                    <a href="Tel:+989071749865" data-toggle="tooltip" title="تلفن">
                    <img width="50" height="50" src="https://img.icons8.com/plasticine/100/apple-phone.png" alt="apple-phone"/>
                    </a>
                </div>
            </div>
            <p className="mt-3">
                  پیاده سازی توسط  
                <a className=" text-decoration-none text-warning" href="https://hamideidy.ir/"> حمیدرضا عیدی</a>
            </p>
        </div>
    </footer>
    )
}
export default Footer;