import React from 'react';
import Reveal from 'react-reveal/Reveal/';
import PropTypes from 'prop-types';
import AboutButton from "../../components/About/AboutButton";
import Image from "types/Image";

const DesignBanner = ({ title, p, buttons, image, bubbles }) => {
    return(
        <section className="seo_home_area">
            {bubbles && (
                <div className="home_bubble">
                    <div className="bubble b_one"></div>
                    <div className="bubble b_two"></div>
                    <div className="bubble b_three"></div>
                    <div className="bubble b_four"></div>
                    <div className="bubble b_five"></div>
                    <div className="bubble b_six"></div>
                    <div className="triangle b_seven" data-parallax='{"x": 20, "y": 150}'><img src={'/img/seo/triangle_one.png'} alt=""/></div>
                    <div className="triangle b_eight" data-parallax='{"x": 120, "y": -10}'><img src={'/img/seo/triangle_two.png'} alt=""/></div>
                    <div className="triangle b_nine"><img src={'/img/seo/triangle_three.png'} alt=""/></div>
                </div>
            )}
            <div className="banner_top">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center seo_banner_content">
                            <Reveal effect="fadeInUp" duration={500}><h2 dangerouslySetInnerHTML={{ __html: title }}></h2></Reveal>
                            <Reveal effect="fadeInUp" duration={1000}><p className="wow fadeInUp" data-wow-delay="0.5s">{p}</p></Reveal>
                            {
                                buttons?.map((btn, key) => (
                                    <Reveal effect="fadeInLeft" duration={1200} key={key}>
                                        <a href={btn.href} className={btn.classNames}>{btn.label}</a>
                                    </Reveal>
                                ))
                            }
                        </div>
                    </div>
                    <div className="saas_home_img">
                        {image && (<Reveal effect="fadeInUp" duration={1400}><img src={image.src} alt={image.alt} title={image.title} /></Reveal>)}
                    </div>
                </div>
            </div>
        </section>
    )
}
DesignBanner.propTypes = {
    h2: PropTypes.string,
    p: PropTypes.string,
    getStartedButton: PropTypes.instanceOf(AboutButton),
    learnMoreButton: PropTypes.instanceOf(AboutButton),
    image: PropTypes.shape(Image)
}
export default DesignBanner;
