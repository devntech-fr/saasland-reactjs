import React from 'react';
import RichContent from "components/Content/RichContent";

class SoftwareDarkBanner extends RichContent {
    render() {
        const { buttonLink, image } = this.props;
        return(
            <section className="saas_banner_area d-flex align-items-center">
                <img className="saas_shap" src={"/img/home6/shape-1.png"} alt=""/>
                <img className="saas_shap" src={"/img/home6/shape2.png"} alt=""/>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="saas_banner_content text-center">
                                <h2 className="f_700 f_size_40 w_color mb-0 wow fadeInUp" data-wow-delay="0.3s" dangerouslySetInnerHTML={this.displayTitle()}></h2>
                                <p className="w_color f_400 f_size_18 l_height30 mt_30 wow fadeInUp" data-wow-delay="0.4s" dangerouslySetInnerHTML={this.displayParagraph()}></p>
                                <div className="action_btn d-flex align-items-center mt_40 justify-content-center wow fadeInUp" data-wow-delay="0.5s">
                                    {buttonLink && <a href={buttonLink.href} target={buttonLink.target} className="btn_hover saas_banner_btn">{buttonLink.label}</a>}
                                </div>
                            </div>
                            <div className="dasboard_img mt_60 wow fadeInUp" data-wow-delay="0.7s">
                                {
                                    image && <img className="img-fluid" src={image.src} alt={image.alt} />
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default SoftwareDarkBanner;
