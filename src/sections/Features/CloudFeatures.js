import React from 'react';
import SectionTitle from "sections/Title/SectionTitle";

function CloudFeatures({ title, p, titleClass, featureImages, buttonLink }) {
    return(
        <section className="design_developers_area sec_pad">
            <div className="container">
                <SectionTitle
                    title={title}
                    p={p}
                    sClass={titleClass}
                />
                <div className="row">
                    <div className="col-lg-7 col-md-7">
                        <div className="design_img wow fadeInRight" data-wow-delay="0.2s">
                            <img className="img-fluid" src={featureImages[0].src} alt={featureImages[0].alt} />
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-5 d-flex align-items-center">
                        <div className="design_img_two wow fadeInRight" data-wow-delay="0.4s">
                            <img className="img-fluid" src={featureImages[1].src} alt={featureImages[1].alt} />
                        </div>
                    </div>
                </div>
                {
                    buttonLink &&
                    <div className="text-center wow fadeInUp" data-wow-delay="0.4s">
                        <a href={buttonLink.href} target={buttonLink.target} className="btn_hover btn_four mt_70">{buttonLink.label}</a>
                    </div>
                }
            </div>
        </section>
    )
}
export default CloudFeatures;

CloudFeatures.defaultProps = {
    title: `Your design process, in one place`,
    p: `Show off show off pick your nose and blow off Elizabeth grub haggle dropped a clanger cracking !`,
    titleClass: `sec_title text-center mb_70`,
    featureImages: [
        {
            src: `/img/home5/design1.png`,
            alt: 'Design 1'
        },
        {
            src: `/img/home5/design2.png`,
            alt: `Design 2`
        }
    ],
    buttonLink:{
        href: '/#',
        label: 'API Documentation',
        target: '_self'
    },
}
