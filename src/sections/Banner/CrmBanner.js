import React from 'react';
import Reveal from 'react-reveal';
import PropTypes from "prop-types";
import RichContent from "components/Content/RichContent";

class CrmBanner extends RichContent {
    render() {
        const { image, buttonLink, lines } = this.props;
        return (
            <section className="new_startup_banner_area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 wow fadeInLeft" data-wow-delay="0.4s">
                            <Reveal left cascade>
                                <div className="new_startup_img">
                                    {/*<div className="line line_one"><img src={'../../img/new/line_01.png'} alt=""/></div>*/}
                                    {/*<div className="line line_two"><img src={'../../img/new/line_02.png'} alt=""/></div>*/}
                                    {/*<div className="line line_three"><img src={'../../img/new/line_03.png'} alt=""/></div>*/}
                                    {image && <img src={image.src} alt={image.alt} />}
                                </div>
                            </Reveal>
                        </div>
                        <div className="col-lg-6 d-flex align-items-center">
                            <Reveal bottom cascade duraton={1200}>
                                <div className="new_startup_content">
                                    <h2 className="f_700 f_size_40 l_height50 w_color mb_20 wow fadeInRight" data-wow-delay="0.3s" dangerouslySetInnerHTML={this.displayTitle()}></h2>
                                    <p className="f_400 w_color l_height28 wow fadeInRight" data-wow-delay="0.4s" dangerouslySetInnerHTML={this.displayParagraph()}></p>
                                    <div className="action_btn d-flex align-items-center mt_40 wow fadeInRight" data-wow-delay="0.6s">
                                        {
                                            buttonLink &&
                                            <a href={buttonLink.href} target={buttonLink.target} className="btn_hover app_btn">
                                                {buttonLink.label} <i className={buttonLink.iconClass}></i>
                                            </a>
                                        }
                                    </div>
                                </div>
                            </Reveal>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

CrmBanner.propTypes = {
    title: PropTypes.string,
    p: PropTypes.string,
    buttonLink: PropTypes.shape({
        href: PropTypes.string,
        target: PropTypes.string,
        label: PropTypes.string,
        iconClass: PropTypes.string
    }),
    image: PropTypes.shape({
        src: PropTypes.string,
        alt: PropTypes.string
    }),
    lines: PropTypes.number
}

export default CrmBanner;
