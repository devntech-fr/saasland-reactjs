import React, {Component} from 'react';
import Slider from 'react-slick';
import SectionTitle from "sections/Title/SectionTitle";
import SecurityTestimonialItem from 'components/Testimonial/SecurityTestimonialItem';

class SecurityTestimonial extends Component {
    render(){
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            arrows: false,
            autoplay: true,
            centerMode: true,
            autoplaySpeed: 2000,
            centerPadding: '0px',
            slidesToShow: 3,
            slidesToScroll: 1,
        };
        const { title, p } = this.props;
        return(
            <section className="feedback_area dk_bg_one sec_pad">
                <div className="container custom_container">
                    <SectionTitle
                        sClass="sec_title text-center mb_70"
                        tClass="w_color"
                        title={title}
                        p={p}
                    />
                    <Slider className="feedback_slider" {...settings}>
                        <SecurityTestimonialItem
                            image={{
                                src: "/img/home6/feedback_img_two.png",
                                alt: "feedback"
                            }}
                            name="Bailey Wonger"
                            designation="web designer"
                            text="Why I say old chap that is spiffing barney, nancy boy bleeder chimney pot Richard cheers the little rotter so I said, easy peasy buggered blower bevvy A bit of how's your father he nicked it arse over tit. Geeza the BBC bits.!!"
                            date="Oct 24, 2018"
                        />
                        <SecurityTestimonialItem
                            image={{
                                src: "/img/home6/feedback_img_two.png",
                                alt: "feedback"
                            }}
                            name="Bailey Wonger"
                            designation="web designer"
                            text="Why I say old chap that is spiffing barney, nancy boy bleeder chimney pot Richard cheers the little rotter so I said, easy peasy buggered blower bevvy A bit of how's your father he nicked it arse over tit. Geeza the BBC bits.!!"
                            date="Oct 24, 2018"
                        />
                        <SecurityTestimonialItem
                            image={{
                                src: "/img/home6/feedback_img_two.png",
                                alt: "feedback"
                            }}
                            name="Bailey Wonger"
                            designation="web designer"
                            text="Why I say old chap that is spiffing barney, nancy boy bleeder chimney pot Richard cheers the little rotter so I said, easy peasy buggered blower bevvy A bit of how's your father he nicked it arse over tit. Geeza the BBC bits.!!"
                            date="Oct 24, 2018"
                        />
                        <SecurityTestimonialItem
                            image={{
                                src: "/img/home6/feedback_img_two.png",
                                alt: "feedback"
                            }}
                            name="Bailey Wonger"
                            designation="web designer"
                            text="Why I say old chap that is spiffing barney, nancy boy bleeder chimney pot Richard cheers the little rotter so I said, easy peasy buggered blower bevvy A bit of how's your father he nicked it arse over tit. Geeza the BBC bits.!!"
                            date="Oct 24, 2018"
                        />
                    </Slider>
                </div>
            </section>
        )
    }
}

export default SecurityTestimonial;
