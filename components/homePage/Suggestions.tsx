import { getFetch } from '@/utils/fetch';
import Card from '../card/Card';
import { Slider } from '../libraries/slickSliderClient'
import ResponsiveSuggestions from './ResponsiveSuggertions';
import { CartItem } from '@/interfaces';
const settings = {
    style: { textAlign: 'center' },
    rtl: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 4,
    swipeToSlide: true,
};
const Suggestions = async ({title}: { title: string }) => {
    const Products = await getFetch('/random-products?count=8')
    return (
        <section className="container text-center">
            <h1 className="tabsTitle">{title}</h1>
            <div className="slider-container d-lg-block d-md-block d-none d-lg-block d-xl-block">
                <div className="suggest">
                    <Slider {...settings} >
                        {Products.data.map((product: CartItem) => (
                            <div className="p-2" key={product.id}>
                                <Card product={product} />
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
            <ResponsiveSuggestions Products={Products} />

        </section>
    )
}
export default Suggestions;