import React, {Component} from 'react';
import AboutWidget from "sections/Footer/FooterWidget/AboutWidget";
import Reveal from "react-reveal/Reveal";
import SocialWidget from "components/Footer/SocialWidget";
import CompanyWidget from "components/Footer/CompanyWidget";

class PrototypeFooter extends Component {
    render(){
        const { rclass, FooterData } = this.props;
        const imageLink= {
            href: '/',
                src: '/img/logo3.png',
                alt: 'logo'
        };
        const copyrights={
            date: '2021',
                brand: 'DroitThemes'
        };
        return(
            <footer className={`payment_footer_area ${rclass}`}>
                <div className="footer_top_six">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-sm-6">
                                <div className="f_widget company_widget">
                                    {
                                        imageLink && (
                                            <a href={imageLink.href} className="f-logo"><img src={imageLink.src} alt={imageLink.alt}/></a>
                                        )
                                    }
                                    {
                                        copyrights && (
                                            <p className="mt_40">Copyright © {copyrights.date} Design by <a href=".#">{copyrights.brand}</a></p>
                                        )
                                    }
                                </div>
                            </div>
                            <Reveal effect="fadeInUp" duration={1200}>
                                <div className="col-lg-3 col-md-6">
                                    <AboutWidget title={`A propos`} links={FooterData.aboutLinks}/>
                                </div>
                            </Reveal>
                            <Reveal effect="fadeInUp" duration={1200}>
                                <div className="col-lg-3 col-md-6">
                                    <AboutWidget title={`Need help ?`} links={FooterData.helpLinks}/>
                                </div>
                            </Reveal>
                            <div className="col-lg-2 col-sm-6">
                                <SocialWidget
                                    title={`Follow Us`}
                                    links={FooterData.socialIcon}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}
export default PrototypeFooter;
