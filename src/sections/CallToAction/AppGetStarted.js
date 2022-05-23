import React from 'react';
import Reveal from 'react-reveal';
import PropTypes from "prop-types";
import Image from 'types/Image';
import CallToActionButton from "types/CallToActionButton";

const AppGetStarted = ({ title, subtitle, p, buttons, image }) => {
    const showButtons = () => {
        if (undefined === buttons || buttons.length === 0) {
            return (
                <>
                    <a href=".#" className="app_btn app_btn_one wow fadeInLeft" data-wow-delay="0.5s"><img src={'/img/home7/google_icon.png'} alt=""/>Google Play</a>
                    <a href=".#" className="app_btn app_btn_two wow fadeInLeft" data-wow-delay="0.6s"><i className="fab fa-apple"></i>App Store</a>
                </>
            )
        }
        buttons.map((btn, key) => (
            <a href={btn.href} className="app_btn app_btn_one wow fadeInLeft" data-wow-delay="0.5s" key={key}>
                {btn.image && <img src={'/img/home7/google_icon.png'} alt=""/>}
                {btn.iconClass && <i className="fab fa-apple"></i>}
                {btn.label}
            </a>
        ))
    }
    const showImage = () => {
        if(!image) {
            return (
                <div className="col-lg-6 text-right">
                    <Reveal effect="fadeInRight" duration={2200}>
                        <img src={'/img/home7/iPhoneX2.png'} alt=""/>
                    </Reveal>
                </div>
            )
        } else {
            return (
                <div className="col-lg-6 text-right">
                    <Reveal effect="fadeInRight" duration={2200}>
                        <img src={image.src} alt={image.alt} />
                    </Reveal>
                </div>
            )
        }
    }
    return(
        <section className="get_started_area">
            <div className="shap one"></div>
            <div className="shap two"></div>
            <div className="shap one three"></div>
            <div className="shap two four"></div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 d-flex align-items-center">
                        <Reveal bottom cascade>
                            <div className="get_content">
                                {subtitle && <h3 className="f_400 f_p wow fadeInLeft" data-wow-delay="0.2s">{subtitle}</h3>}
                                {title && <h2 className="f_700 f_p f_size_40 l_height50 mb_20 wow fadeInLeft" data-wow-delay="0.3s">{title}</h2>}
                                {p && <p className="f_400 f_p mb_40 wow fadeInLeft" data-wow-delay="0.4s">{p}</p>}
                                {showButtons()}
                            </div>
                        </Reveal>
                    </div>
                    {showImage()}
                </div>
            </div>
        </section>
    )
}
export default AppGetStarted;

AppGetStarted.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
    p: PropTypes.string,
    buttons: PropTypes.arrayOf(CallToActionButton),
    image: PropTypes.objectOf(Image)
}

AppGetStarted.defaultProps = {
    title: 'Download this app Now',
    subtitle: `Dev'nTech`,
    p: `Why I say old chap that is spiffing barney, nancy boy bleeder chimney pot Richard cheers the little rotter so I said, easy peasy buggered blower bevvy A bit of how's your father he nicked.`,
    buttons: [
        {
            label: 'Google Play',
            href: '/download-google-play',
            image: {
                src: '',
                alt: ''
            },
        },
        {
            label: 'App Store',
            href: '/download-app-store',
            image: {
                src: '',
                alt: ''
            },
        },
    ],
    image: '/img/home7/iPhoneX2.png'
}
