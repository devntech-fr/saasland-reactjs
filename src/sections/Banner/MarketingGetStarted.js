import React from "react";
import Reveal from "react-reveal";
import { displayTitle } from "components/Content/RichContent";

function MarketingGetStarted() {
    return (
        <section className="get_started_three sec_pad">
            <div className="container">
                <div className="sec_title text-center mb_70">
                    <h2 className="f_p f_size_30 l_height45 f_600 t_color3" dangerouslySetInnerHTML={displayTitle(`Help your customers <br/>on every channel`)}></h2>
                </div>
                <div className="startup_tab_img">
                    <Reveal effect="fadeInLeft">
                        <div className="web_img">
                            <img src={'/img/new/web_image.jpg'} alt=""/>
                        </div>
                    </Reveal>
                    <Reveal effect="fadeInRight"><div className="phone_img"><img src={'/img/new/iPhoneX.png'} alt=""/></div></Reveal>
                </div>
                <div className="row get_btn_info">
                    <div className="col-md-6">
                        <div className="get_btn_item">
                            <div className="get_icon">
                                <i className="ti-time"></i>
                            </div>
                            <h3>Conference any time instantly or schedule in advance</h3>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="get_btn_item">
                            <div className="get_icon icon_two">
                                <i className="icon_cloud-upload_alt"></i>
                            </div>
                            <h3>Fully cross - device experience from anywhere in the world</h3>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MarketingGetStarted;
