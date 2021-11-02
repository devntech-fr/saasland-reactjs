import React from "react";
import SeoTitle from "sections/Title/SeoTitle";
import Fade from "react-reveal/Fade";

function SeoService() {
    return (
        <section className="seo_service_area sec_pad">
            <div className="container">
                <SeoTitle Title='How does it work?' TitleP='The full monty burke posh excuse my French Richard cheeky bobby spiffing crikey Why gormless, pear shaped.!'/>
                <div className="row seo_service_info">
                    <Fade bottom duration={500}>
                        <div className="col-lg-4 col-md-6">
                            <div className="seo_service_item">
                                <img src={'../../img/seo/icon1.png'} alt=""/>
                                <a href=".#">
                                    <h4>Digital Analytics</h4>
                                </a>
                                <p>Twit cras excuse my French matie boy grub it's all gone to pot off his nut butty horse play blow off pardon you hanky panky.!</p>
                                <a href=".#"><i className="arrow_right"></i></a>
                            </div>
                        </div>
                    </Fade>
                    <Fade bottom duration={700} >
                        <div className="col-lg-4 col-md-6">
                            <div className="seo_service_item">
                                <img src={'../../img/seo/icon2.png'} alt=""/>
                                <a href=".#">
                                    <h4>Digital Marketing</h4>
                                </a>
                                <p>Twit cras excuse my French matie boy grub it's all gone to pot off his nut butty horse play blow off pardon you hanky panky.!</p>
                                <a href=".#"><i className="arrow_right"></i></a>
                            </div>
                        </div>
                    </Fade>
                    <Fade bottom duration={1000}>
                        <div className="col-lg-4 col-md-6">
                            <div className="seo_service_item">
                                <img src={'../../img/seo/icon5.png'} alt=""/>
                                <a href=".#">
                                    <h4>Email Marketing</h4>
                                </a>
                                <p>Twit cras excuse my French matie boy grub it's all gone to pot off his nut butty horse play blow off pardon you hanky panky.!</p>
                                <a href=".#"><i className="arrow_right"></i></a>
                            </div>
                        </div>
                    </Fade>
                    <div className="col-lg-12 text-center mt_40">
                        <a href=".#" className="seo_btn seo_btn_one btn_hover">All Features</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SeoService;
