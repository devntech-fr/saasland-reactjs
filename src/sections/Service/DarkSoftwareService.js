import React from 'react';
import RichContent from "components/Content/RichContent";

class DarkSoftwareService extends RichContent {
    render(){
        const { buttonLink, children } = this.props;
        return(
            <section className="saas_featured_area sec_pad dk_bg_one">
                <div className="square_box box_one"></div>
                <div className="square_box box_two"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5">
                            <div className="saas_featured_content pr_70 mt_60">
                                <h2 className="f_600 f_p f_size_30 w_color l_height40 mb-30 wow fadeInUp" dangerouslySetInnerHTML={this.displayTitle()}></h2>
                                <p className="f_400 f_size_15 l_height_28 d_p_color mb_50 wow fadeInUp" dangerouslySetInnerHTML={this.displayParagraph()}></p>
                                {buttonLink && <a href={buttonLink.href} target={buttonLink.target} className="btn_hover btn_five wow fadeInUp">{buttonLink.label}</a>}
                            </div>
                        </div>
                        <div className="col-lg-7 saas_featured_info">
                            <div className="row mb_30">
                                {children}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
export default DarkSoftwareService;
