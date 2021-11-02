import React from 'react';
import PropTypes from "prop-types";

function ErpBanner({ title, p, buttonLink, image, clouds }) {
    const showClouds = () => {
        for (let i = 0; i <= clouds; i++) {
            return (
                <li><img src={`/img/erp-home/cloud_0${i}.png`} alt=""/></li>
            )
        }
    }
    return (
        <section className="erp_banner_area_two">
            <ul className="list-unstyled cloud_animation">
                {showClouds()}
            </ul>
            <div className="erp_shap"></div>
            <div className="section_intro">
                <div className="section_container">
                    <div className="intro">
                        <div className=" intro_content">
                            <h1>{title}</h1>
                            <p>{p}</p>
                            {
                                buttonLink && (
                                    <a href={buttonLink.href} target={buttonLink.target} className="er_btn er_btn_two">{buttonLink.label}</a>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
            <div className="animation_img wow fadeInUp" data-wow-delay="0.3s">
                <div className="container">
                    {
                        image && (
                            <img src={image.src} alt={image.alt} />
                        )
                    }
                </div>
            </div>
        </section>
    )
}

export default ErpBanner;

ErpBanner.propTypes = {
    title: PropTypes.string.isRequired,
    p: PropTypes.string.isRequired,
    image: PropTypes.shape({
        src: PropTypes.string.isRequired,
        alt: PropTypes.string.isRequired
    }),
    buttonLink: PropTypes.shape({
        href: PropTypes.string,
        target: PropTypes.string,
        label: PropTypes.string
    }),
    clouds: PropTypes.number
}
