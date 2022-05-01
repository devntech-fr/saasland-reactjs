import React from "react";
import Fade from "react-reveal/Fade";

function SeoPartnerLogo({ title, logo_collection }) {
    const renderLogos = () => {
        return logo_collection.map((logo, key) => {
            console.log('logo partner',logo);
            return (
                <div className="logo_item" key={key}>
                    <a href={logo.href}><img src={logo.image ?? '../img/seo/logo_01.png'} alt="" height={120}/></a>
                </div>
            )
        })
    }
    return (
        <section className="seo_partner_logo_area sec_pad">
            <div className="container">
                <div className="seo_sec_title text-center mb_70">
                    <Fade bottom><h2 dangerouslySetInnerHTML={{ __html: title }}></h2></Fade>
                </div>
                <div className="partner_logo_area_four">
                    <div className="row partner_info">
                        {renderLogos()}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SeoPartnerLogo;
