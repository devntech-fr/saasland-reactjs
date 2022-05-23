import React from 'react';
import SectionTitle from "sections/Title/SectionTitle";
import Slider from 'react-slick';
// import "slick-carousel/slick/slick.css"
// import "slick-carousel/slick/slick-theme.css"

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
}

function ScreenShowCase({ screens }) {
    const showSlider = () => {
        return screens.map((screen, key) => (
            <div className="item" key={key}>
                <div className="screenshot_img">
                    <a href={screen.href} className="image-link">
                        <img src={screen.image} alt=""/>
                    </a>
                </div>
            </div>
        ))
    }

    return(
        <section className="app_screenshot_area sec_pad" id="showcase">
            <div className="container custom_container p0">
                <SectionTitle
                    sClass="sec_title text-center mb_70"
                    title="Awesome app Screenshots"
                    tClass="t_color3 mb_20"
                    p="Why I say old chap that is spiffing barney, nancy boy bleeder chimney pot richard cheers the little rotter.!"
                />
                <div className="app_screen_info">
                    <Slider className="app_screenshot_slider" {...settings}>
                        {showSlider()}
                    </Slider>
                </div>
            </div>
        </section>
    )
}

export default ScreenShowCase;
