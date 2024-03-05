'use client'
const Slider = (): JSX.Element => {
    return (
        <section className="slider_section mt-4">
            <div className="bg-box container">
                <div id="carouselExampleAutoplaying" className="carousel slide " data-bs-ride="carousel">
                    <div className="carousel-inner rounded">
                        <div className="carousel-item text-center active">
                            <img src="/images/slider1.jpg" className="d-block w-100" alt="slider-1" />
                        </div>
                        <div className="carousel-item">
                            <img src="/images/slider2.jpg" className="d-block w-100" alt="slider-2" />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying"
                        data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying"
                        data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </section>
    )
}
export default Slider;