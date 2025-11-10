import '../static/css/banner.css';

function Banner() {
    return (
        <section className="banner-bg">
            <div className="d-flex justify-content-end" style={{width : "90%"}}>

                <div className="">
                    <h1 className="">
                        Best food for <br /> your taste
                    </h1>
                    <p className="">
                        Discover delectable cuisine and unforgettable moments <br /> in our welcoming
                        culinary haven.
                    </p>

                    <div className='butt'>
                        <div className=" gap-4">
                            <button className=" ">
                                Book A Table
                            </button>

                            <button className="border ">
                                Explore Menu
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Banner;