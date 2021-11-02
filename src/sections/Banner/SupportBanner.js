import React from 'react';
import RichContent from "components/Content/RichContent";

class SupportBanner extends RichContent {
    render() {
        const { form, image } = this.props;
        return (
            <section className="support_home_area">
                <div className="banner_top">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 text-center">
                                <h2 className="f_p f_size_40 l_height60 wow fadeInUp" data-wow-delay="0.3s" dangerouslySetInnerHTML={this.displayTitle()}></h2>
                                <p className="f_size_18 l_height30 wow fadeInUp" data-wow-delay="0.5s" dangerouslySetInnerHTML={this.displayParagraph()}></p>
                                {
                                    form && <form className="mailchimp wow fadeInUp" data-wow-delay="0.6s" method="post">
                                        <div className="input-group subcribes">
                                            <input type="text" name="EMAIL" className="form-control memail" placeholder="saasland@gmail.com"/>
                                            <button className="btn btn_submit f_size_15 f_500" type="submit">Get Started</button>
                                        </div>
                                    </form>
                                }
                            </div>
                        </div>
                        <div className="support_home_img wow fadeInUp" data-wow-delay="0.9s">
                            {image && <img src={image.src} width={1320} height={390} alt={image.alt} />}
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

SupportBanner.defaultProps = {
    title:`Un support de haute qualité`,
    p:`lorem`,
    image:{
        src: '/img/new-home/banner.png',
        alt: 'Support',
    },
    form: false
}

export default SupportBanner;
