import React from 'react';
import Reveal from 'react-reveal';
import RichContent from "components/Content/RichContent";

class AppBanner extends RichContent {
    render() {
        const { buttonLink, backgroundImage } = this.props;
        return(
            <section
                className="app_banner_area"
                style={{
                    background: `url(${backgroundImage}) no-repeat scroll center 100%`,
                }}
            >
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7">
                            <Reveal bottom cascade>
                                <div className="app_banner_contentmt mt_40">
                                    <h2 className="f_p f_700 f_size_50 w_color mb_20 wow fadeInLeft" data-wow-delay="0.2s" dangerouslySetInnerHTML={this.displayTitle()}></h2>
                                    <p className="f_400 f_size_18 l_height30 w_color wow fadeInLeft" data-wow-delay="0.3s" dangerouslySetInnerHTML={this.displayParagraph()}></p>
                                    {
                                        buttonLink && <a href={buttonLink.href} target={buttonLink.target} className="btn_hover mt_30 app_btn wow fadeInLeft"
                                        data-wow-delay="0.5s">{buttonLink.label}</a>
                                    }
                                </div>
                            </Reveal>
                        </div>
                        <div className="col-lg-5">
                            <div className="app_img">
                                <img className="app_screen one wow fadeInDown" src={'/img/home7/01.png'} alt=""/>
                                <img className="app_screen two wow fadeInDown" src={'/img/home7/03.png'} alt=""/>
                                <img className="app_screen three wow fadeInDown" src={'/img/home7/02.png'} alt=""/>
                                <img className="mobile" src={'/img/home7/app.png'} alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default AppBanner;

AppBanner.defaultProps = {
    title: `Spend time<br/> with loved ones`,
    p: `Why I say old chap that is spiffing off his nut arse pear shaped plastered Jeffrey bodge barney some dodgy.`,
    buttonLink:{
        href: '/#',
        label: 'Démarrer',
        target: '_self',
    },
    backgroundImage: '/img/home7/banner.png'
}
