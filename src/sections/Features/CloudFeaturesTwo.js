import React from 'react';

const CloudFeaturesTwo = ({ title, p, buttonLink, image }) => {
    return(
        <section className="software_featured_area_two sec_pad">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="software_featured_img wow fadeInLeft" data-wow-delay="0.2s">
                            <img className="img-fluid" src={image.src} alt={image.alt} />
                        </div>
                    </div>
                    <div className="col-lg-5 offset-lg-1 d-flex align-items-center pl-0">
                        <div className="software_featured_content">
                            <h2 className="f_700 f_size30 l_height_40 w_color f_p mb-30 wow fadeInRight" data-wow-delay="0.2s">{title}</h2>
                            <p className="w_color f_400 mb_50 wow fadeInRight" data-wow-delay="0.4s">{p}</p>
                            {
                                buttonLink &&
                                <a href={buttonLink.href} target={buttonLink.target} className="btn_hover btn_four wow fadeInRight" data-wow-delay="0.6s">{buttonLink.label}</a>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CloudFeaturesTwo;

CloudFeaturesTwo.defaultProps = {
    title: `Un hébergement cloud pour tout le monde`,
    image: {
        src: `/img/home5/featured_img1.png`,
        alt: "Cloud banner",
    },
    buttonLink: {
        href: "/#",
        target: '_self',
        label: "Plus d'info"
    }
}
