import Card from "../card/Card"
import NotFoundProduct from "./NotFoundProduct"

const ProductList = ({data}: any) => {
    return(
        <div className="mt-3">
        <div className="row row-cols-1 row-cols-md-3 g-4">
            {data.products.map((product: any) => (
                <div key={product.id}>
                    <Card product={product} />
                </div>
            ))}
            {data.products == '' && <NotFoundProduct />}

        </div>
    </div>
    )
}
export default ProductList