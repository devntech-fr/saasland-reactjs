import React from "react";
import RichContent from "components/Content/RichContent";

class SoftwareFeaturedInfo extends RichContent {
    render() {
        const { reverse, image, buttonLink } = this.props;
        return (
            <div className={`row saas_featured_info ${reverse && ` flex-row-reverse`}`}>
                <div className="col-lg-6">
                    <div className="f_img_one img_border wow fadeInLeft">
                        { image && <img className="img-fluid" src={image.src} alt={image.alt} />}
                    </div>
                </div>
                <div className={`col-lg-6 d-flex align-items-center ${reverse ? `pr_70` : `pl_100`}`}>
                    <div className="saas_featured_content wow fadeInRight">
                        <h2 className="f_size_30 f_600 f_p w_color l_height40 mb_20" dangerouslySetInnerHTML={this.displayTitle()}></h2>
                        <p className="d_p_color f_400 f_size_15 l_height28" dangerouslySetInnerHTML={this.displayParagraph()}></p>
                        {buttonLink && <a href="/#" className="btn_hover saas_banner_btn mt_40">{buttonLink.label}</a>}
                    </div>
                </div>
            </div>
        )
    }
}

export default SoftwareFeaturedInfo;
