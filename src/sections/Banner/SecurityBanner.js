import React from 'react';
import PropTypes from "prop-types";

function SecurityBanner({ title, p, buttons, image, shapes, imageShape }) {
    const showButtons = () => {
        buttons.map((btn,key) => {
            const { href, classNames, imageSrc, label } = btn;
            return (
                <a key={key} href={href} className={classNames}>
                    {
                        imageSrc
                            ? <img src={imageSrc} alt={""} />
                            : <React.Fragment></React.Fragment>
                    }
                    {label}
                </a>
            )
        })
    }
    return (
        <section className="h_security_banner_area">
            {
                imageShape &&
                <img className="p_absolute s_shap" src={imageShape.src} alt={imageShape.alt} title={imageShape.title} />
            }
            {
                shapes && <React.Fragment>
                    <div className="s_round one"></div>
                    <div className="s_round two"></div>
                </React.Fragment>
            }
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 d-flex align-items-center">
                        <div className="security_banner_content">
                            <h2 className="wow fadeInUp" data-wow-delay="0.3s">{title}</h2>
                            <p className="f_400 w_color l_height28 wow fadeInUp" data-wow-delay="0.4s">{p}</p>
                            <div className="action_btn d-flex align-items-center mt_40 wow fadeInUp" data-wow-delay="0.6s">
                                {
                                    buttons.map((btn,key) => {
                                        const { href, classNames, imageSrc, label } = btn;
                                        return (
                                            <a key={key} href={href} className={classNames}>
                                                {
                                                    imageSrc
                                                        ? <img src={imageSrc} alt={""} />
                                                        : <React.Fragment></React.Fragment>
                                                }
                                                {label}
                                            </a>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 wow fadeInRight" data-wow-delay="0.4s">
                        {
                            image && <div className="new_startup_img">
                                <img src={image.src} alt={image.alt}/>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}
export default SecurityBanner;

SecurityBanner.propTypes = {
    title: PropTypes.string.isRequired,
    p: PropTypes.string.isRequired,
    imageShape: PropTypes.shape({
        src: PropTypes.string.isRequired,
        alt: PropTypes.string.isRequired,
        title: PropTypes.string
    }),
    image: PropTypes.shape({
        src: PropTypes.string.isRequired,
        alt: PropTypes.string.isRequired,
        title: PropTypes.string
    }),
    shapes: PropTypes.bool
}

SecurityBanner.defaultProps = {
    title:`Your Unified Solution For PC Security and Performance`,
    p:`Download Free Antivirus and System Optimization Utility`,
    imageShape: {
        src: "/img/home-security/shap.png",
        alt: "Security banner",
        title: "Security banner"
    },
    image:{
        src: "/img/home-security/banner.png",
        alt: "Security banner",
        title: "Security banner"
    },
    buttons:[
        {
            href: "/#",
            classNames: "btn_hover app_btn",
            label: "Free download",
        },
        {
            href: "/#",
            classNames: "w_btn",
            label: "Windows 10",
            imageSrc: "/img/home-security/windows_icon.png",
        },
        {
            href: "/#",
            classNames: "w_btn",
            label: "Apple MacOS",
            imageSrc: "/img/home-security/apple_icon.png",
        },
    ],
    shapes: true
}
