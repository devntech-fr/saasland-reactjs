import React from "react";
import Fade from "react-reveal/Fade";

function SeoFeatures({ title, p, image, features }) {
    return (
        <section className="seo_features_one sec_pad">
            <div className="container">
                <div className="row flex-row-reverse">
                    <div className="col-lg-6">
                        <div className="seo_features_img">
                            <div className="round_circle"></div>
                            <div className="round_circle two"></div>
                            {image && <img src={image} alt="" height={500}/>}
                            {!image && <img src={'/img/seo/features_img.png'} alt=""/>}
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <Fade bottom cascade>
                            <div className="seo_features_content">
                                <h2>{title}</h2>
                                <p>{p}</p>
                                {
                                    features.map((feature, key) => (
                                        <div className="media seo_features_item" key={key}>
                                            <div className="icon">
                                                <img src={feature.image} alt=""/>
                                            </div>
                                            <div className="media-body">
                                                <h3>{feature.title}</h3>
                                                <p>{feature.description}</p>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </Fade>
                    </div>
                </div>
            </div>
        </section>
    )
}

function SeoFeaturesReverse({ title, subtitle, p, image, button }) {
    return (
        <section className="seo_features_one sec_pad">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="seo_features_img seo_features_img_two">
                            <div className="round_circle"></div>
                            <div className="round_circle two"></div>
                            {image && <img src={image} alt="" width={500}/>}
                            {!image && <img src={'/img/seo/features_img_two.png'} alt=""/>}
                        </div>
                    </div>
                    <div className="col-lg-6 d-flex align-items-center">
                        <Fade bottom cascade>
                            <div className="seo_features_content">
                                <h2 className="wow fadeInUp">{title}</h2>
                                <h6 className="wow fadeInUp">{subtitle}</h6>
                                <p className="wow fadeInUp">{p}</p>
                                {button && <a href={button.href} className="seo_btn seo_btn_one btn_hover wow fadeInUp">{button.label}</a>}
                            </div>
                        </Fade>
                    </div>
                </div>
            </div>
        </section>
    )
}

export { SeoFeatures, SeoFeaturesReverse };
