import React, {Component} from 'react';
import Slider from 'react-slick';
import PropTypes from "prop-types";
import AboutContent from "components/About/AboutContent";
import SliderSettings from "components/Slider/SliderSettings";
import AboutItem from "components/About/AboutItem";

class AgencyAbout extends Component {
    render(){
        const settings = {
            dots: true,
            infinite: true,
            speed: 1500,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 4000,
            slidesToShow: 1,
            slidesToScroll: 1,
        };
        return(
            <section className="agency_about_area d-flex bg_color">
                <div className="col-lg-6 about_content_left ">
                    <AboutContent/>
                </div>
                <div className="col-lg-6 about_img">
                    <a href=".#" className="pluse_icon"><i className="ti-plus"></i></a>
                    <Slider className="about_img_slider" {...settings}>
                        <div className="item">
                            <AboutItem
                                image={{
                                    src: '/img/home4/team1.jpg'
                                }}
                                title={`Service data text`}
                                width={'w45'}
                            />
                            <AboutItem
                                image={{
                                    src: '/img/home4/team2.jpg'
                                }}
                                title={`Service data text`}
                                width={'w55'}
                            />
                            <AboutItem
                                image={{
                                    src: '/img/home4/team2.jpg'
                                }}
                                title={`Service data text`}
                                width={'w55'}
                            />
                        </div>
                        <div className="item">
                            <AboutItem
                                image={{
                                    src: '/img/home4/team1.jpg'
                                }}
                                title={`Service data text`}
                                width={'w45'}
                            />
                            <AboutItem
                                image={{
                                    src: '/img/home4/team2.jpg'
                                }}
                                title={`Service data text`}
                                width={'w55'}
                            />
                            <AboutItem
                                image={{
                                    src: '/img/home4/team2.jpg'
                                }}
                                title={`Service data text`}
                                width={'w55'}
                            />
                        </div>
                    </Slider>
                </div>
            </section>
        )
    }
}
AgencyAbout.propTypes = {
    aboutIcon: PropTypes.shape({
        href: PropTypes.string,
        icon: PropTypes.string
    }),
    sliderSettings: PropTypes.object,
    slides: PropTypes.array
}
export default AgencyAbout;
