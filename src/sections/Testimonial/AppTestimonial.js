import React, {Component} from 'react';
import Slider from 'react-slick';
class AppTestimonial extends Component{
    constructor(props) {
        super(props);
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
    }
    next() {
        this.slider.slickNext();
    }
    previous() {
        this.slider.slickPrev();
    }
    renderTestimonials() {
        const testimonials = this.props.testimonials;
        if (testimonials.length <= 0) {
            return;
        }
        return testimonials.map((testimonial, key) => {
            console.log('testi',testimonial);
            return (
                <div className="app_testimonial_item text-center" key={key}>
                    <div className="author-img"><img src={testimonial.image.src} alt=""/></div>
                    <div className="author_info">
                        <h6 className="f_p f_500 f_size_18 t_color3 mb-0">{testimonial.name}</h6>
                        <p>{testimonial.company}</p>
                    </div>
                    <p className="f_400">{testimonial.comment}</p>
                </div>
            )
        })
    }
    render(){
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 2000,
            slidesToShow: 1,
            slidesToScroll: 1,
        };
        return(
            <section className="app_testimonial_area" id="testimonial">
                <div className="text_shadow" data-line="Feedback"></div>
                <div className="container nav_container">
                    <div className="slider_nav">
                        <i className="ti-arrow-left prev" onClick={this.previous}></i>
                        <i className="ti-arrow-right next" onClick={this.next}></i>
                    </div>
                    <div className="shap one"></div>
                    <div className="shap two"></div>
                    <Slider ref={c => (this.slider = c)} className="app_testimonial_slider" {...settings}>
                        {this.renderTestimonials()}
                    </Slider>
                </div>
            </section>
        )
    }
}
export default AppTestimonial;
