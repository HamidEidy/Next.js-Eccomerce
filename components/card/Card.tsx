
import { addToCart, increment } from "@/redux/cart/action";
import store from "@/redux/store";
import { getBlurDataURL, numberFormat } from "@/utils/helper";
import Image from "next/image";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import AddButton from "./AddButton";
import { CartItem } from "@/interfaces";

const Card = ({ product }: { product: CartItem }) => {

    return (
        <div className="col">
            <div className="card h-100">
                <div className="card-body">
                    <Image className="card-img-top" src={product.primary_image} alt="img" width={0}
                        height={0}
                        placeholder="blur"
                        blurDataURL={getBlurDataURL()}
                        sizes="100vw"
                        style={{ width: '100%', height: '200px', borderRadius: '5px' }} />
                    <h1 className="card-title mt-3">
                        <Link href={`/product/${product.slug}`}>
                            {product.name}
                        </Link>

                    </h1>
                    <p className="card-text">{product.description}</p>
                </div>
                <div className="card-footer justify-content-between align-items-baseline d-flex">
                    {product.is_sale ? (
                        <>
                            <small className="text-muted">
                                {numberFormat(product.sale_price)} تومان
                            </small>
                            <del className="isSale text-muted">{numberFormat(product.price)}</del>
                        </>
                    ) : (
                        <small className="text-muted">
                            {numberFormat(product.price)} تومان
                        </small>
                    )}

                    <AddButton product={product} />

                </div>

            </div>
        </div>
    )
}
export default Card;