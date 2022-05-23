import React from "react";
import SeoTitle from "sections/Title/SeoTitle";
import Fade from "react-reveal/Fade";

function SeoService({ title, p, services, button }) {
    return (
        <section className="seo_service_area sec_pad">
            <div className="container-fluid">
                <SeoTitle
                    title={title}
                    p={p}
                />
                <div className="row seo_service_info">
                    {
                        services.map((service, key) => {
                            const lg = services.length / 4;
                            return (
                                <Fade bottom duration={500}>
                                    <div className="col-lg-4 col-md-6" key={key}>
                                        <div className="seo_service_item">
                                            <img src={service.icon} alt=""/>
                                            <a href=".#">
                                                <h4>{service.title}</h4>
                                            </a>
                                            <p>{service.description}</p>
                                            <a href={`/service/${service.slug}`}><i className="arrow_right"></i></a>
                                        </div>
                                    </div>
                                </Fade>
                            )
                        })
                    }
                    <div className="col-lg-12 text-center mt_40">
                        <a href={button.href} target={button.target} className="seo_btn seo_btn_one btn_hover">{button.label}</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SeoService;
