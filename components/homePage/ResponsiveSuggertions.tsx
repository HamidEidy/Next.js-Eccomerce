import Card from "../card/Card";
import { CartItem } from "@/interfaces";
const ResponsiveSuggestions = ({Products}:any) =>{
    return(
        <div className="d-lg-none d-md-none d-sm-block d-lg-none d-xl-none row">
        <div className="d-flex row justify-content-center">
        {Products.data.map((product: CartItem) => (
            <div className="col-6 py-2" key={product.id}>
                <Card product={product} />
            </div>
        ))}
        </div>
    
    </div>
    )
}
export default ResponsiveSuggestions;