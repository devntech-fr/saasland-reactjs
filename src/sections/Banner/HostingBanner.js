import React from 'react';
import Fade from 'react-reveal/Fade';

const HostingBanner = ({ title, p, buttonLink, image, lines }) => {
    const displayLines = () => {
        for (let i = 0; i < lines.length; i++) {
            return (
                <li className="wow fadeInUp" data-wow-delay="0.4s">
                    <img src={`/img/hosting/line_0${i}.png`} alt=""/>
                </li>
            )
        }
    }
    return(
        <section className="hosting_banner_area">
            <Fade bottom cascade>
                <ul className="list-unstyled b_line">
                    {displayLines()}
                    <li className="wow fadeInUp" data-wow-delay="0.4s"><img src={"/img/hosting/line_01.png"} alt=""/></li>
                    <li className="wow fadeInUp" data-wow-delay="0.7s"><img src={"/img/hosting/line_02.png"} alt=""/></li>
                    <li className="wow fadeInUp" data-wow-delay="0.9s"><img src={"/img/hosting/line_03.png"} alt=""/></li>
                    <li className="wow fadeInUp" data-wow-delay="1.2s"><img src={"/img/hosting/line_04.png"} alt=""/></li>
                    <li className="wow fadeInUp" data-wow-delay="0.4s"><img src={"/img/hosting/line_05.png"} alt=""/></li>
                    <li className="wow fadeInUp" data-wow-delay="1s"><img src={"/img/hosting/line_06.png"} alt=""/></li>
                    <li className="wow fadeInUp" data-wow-delay="1s"><img src={"/img/hosting/line_07.png"} alt=""/></li>
                    <li className="wow fadeInUp" data-wow-delay="1.3s"><img src={"/img/hosting/line_08.png"} alt=""/></li>
                </ul>
            </Fade>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-7 d-flex align-items-center">
                        <div className="hosting_content">
                            <h2 className="wow fadeInUp" data-wow-delay="0.3s">{title}</h2>
                            <p className="wow fadeInUp" data-wow-delay="0.5s">{p}</p>
                            {buttonLink && <a href={buttonLink.href} className="hosting_btn btn_hover wow fadeInUp" target={buttonLink.target} data-wow-delay="0.7s">{buttonLink.label}</a>}
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-5">
                        {image && <img className="img-fluid wow fadeInRight" data-wow-delay="0.7s" src={image.src} alt={image.alt}/>}
                    </div>
                </div>
            </div>
        </section>
    )
}
export default HostingBanner;
