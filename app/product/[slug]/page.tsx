import { getFetch } from "@/utils/fetch";
import { getBlurDataURL, numberFormat, salePercent } from "@/utils/helper";
import Image from "next/image";
import IncDecButtons from "../../../components/cartButtons/IncDecButtons";
import Suggestions from "@/components/homePage/Suggestions";
import { ParamType } from "@/interfaces";

const product = async ({ params }: {params : ParamType}) => {
    console.log('param :', params);
    const product2 = await getFetch(`/products/${params.slug}`)
    const product = product2.data
    return (
        <>
            <section className="single_page_section mt-5">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-10 offset-md-1 ">
                            <div className="row gy-5">
                                <div className="col-sm-12 col-lg-6">
                                    <h3 className="fw-bold my-4">{product.name}</h3>
                                    <p>{product.description}</p>
                                    <h5>
                                        {product.is_sale ? (
                                            <>
                                                <span>{numberFormat(product.sale_price)}</span>
                                                <del className="me-1">{numberFormat(product.price)}</del>
                                            </>
                                        ) : (
                                            <span>{numberFormat(product.price)}</span>
                                        )}
                                        <span>تومان</span>

                                        {product.is_sale &&
                                            <div className="text-danger fs-6">
                                                {salePercent(product.price, product.sale_price)}% تخفیف
                                            </div>}
                                    </h5>
                                    <IncDecButtons product={product} />
                                </div>
                                <div className="col-sm-12 col-lg-6">
                                    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                                        <div className="carousel-indicators">
                                            <button type="button" data-bs-target="#carouselExampleIndicators"
                                                data-bs-slide-to="0" className="active"></button>

                                            {product.images.map((img: any, index: number) => (
                                                <button key={index} type="button" data-bs-target="#carouselExampleIndicators"
                                                    data-bs-slide-to={index + 1}></button>
                                            ))}
                                        </div>

                                        <div className="carousel-inner rounded">
                                            <div className="carousel-item active">
                                                <Image src={product.primary_image} placeholder='blur' blurDataURL={getBlurDataURL()} width={464} height={309} className="d-block w-100" alt="product-primary-image" />
                                            </div>
                                            {product.images.map((img: any) => (
                                                <div key={img.id} className="carousel-item">
                                                    <Image src={img.image} placeholder='blur' blurDataURL={getBlurDataURL()} width={464} height={309} className="d-block w-100" alt="product-image" />
                                                </div>
                                            ))}
                                        </div>

                                        <button className="carousel-control-prev" type="button"
                                            data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                            <span className="carousel-control-prev-icon"></span>
                                            <span className="visually-hidden">Previous</span>
                                        </button>
                                        <button className="carousel-control-next" type="button"
                                            data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                            <span className="carousel-control-next-icon"></span>
                                            <span className="visually-hidden">Next</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <hr />
       
            <Suggestions title={'سایر محصولات'} />
                
       
 
        </>
    )
}
export default product