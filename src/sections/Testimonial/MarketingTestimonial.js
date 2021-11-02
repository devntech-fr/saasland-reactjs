import React, {Component} from 'react';
import Slider from 'react-slick';
import MarketingTestimonialItem from "components/Testimonial/MarketingTestimonialItem";
import BannerData from "sections/Banner/BannerData";

class MarketingTestimonial extends Component {
   render(){
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            arrows: true,
            autoplay: true,
            autoplaySpeed: 2000,
            slidesToShow: 1,
            slidesToScroll: 1,
        };
        var { bgColor, title, testimonialCollection } = this.props;
        return(
            <section className={`agency_testimonial_area sec_pad ${bgColor}`}>
                <div className="container">
                    <h2 className="f_size_30 f_600 t_color3 l_height40 text-center mb_60">{title}</h2>
                    <div className="agency_testimonial_info">
                        <Slider className="testimonial_slider" {...settings}>
                            {
                                testimonialCollection.map((testimonial, key)=>{
                                   return(
                                       <div key={key}>
                                           <MarketingTestimonialItem testimonial={testimonial}/>
                                       </div>
                                     )
                                })
                            }
                        </Slider>
                    </div>
                </div>
            </section>
        )
   }
}

MarketingTestimonial.defaultProps = {
    title:`We've heard things like`,
    testimonialCollection: BannerData.AgencyTestimonial
}

export default MarketingTestimonial;
