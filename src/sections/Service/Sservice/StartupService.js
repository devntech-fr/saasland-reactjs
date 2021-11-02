import React from 'react';
import StartupServiceItem from 'sections/Service/Sservice/StartupServiceItem';
import Reveal from 'react-reveal';
import RichContent from "components/Content/RichContent";

class StartupService extends RichContent {
    render() {
        const { children } = this.props;
        return(
            <section className="startup_service_area sec_pad bg_color">
                <div className="container">
                    <div className="sec_title mb_70 wow fadeInUp" data-wow-delay="0.4s">
                        <Reveal effect="fadeInUp"><h2 className="f_p f_size_30 l_height40 f_600 t_color text-center" dangerouslySetInnerHTML={this.displayTitle()}></h2></Reveal>
                    </div>
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="startup_service_img">
                                <div className="shape"></div>
                                <img className="laptop_img" src={'/img/new/laptop.png'} alt=""/>
                                {/*<img className="phone_img" src={'/img/new/phone.png'} alt=""/>*/}
                            </div>
                        </div>

                        <div className="col-lg-3 d-flex align-items-center">
                            <div className="startup_service_info">
                                {children}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
export default StartupService;
