import React from 'react';
import Reveal from 'react-reveal/Reveal';
import BannerImage from "components/Banner/BannerImage";
import PartnerLogoCollection from "components/Banner/PartnerLogoCollection";
import BannerBackground from "components/Banner/BannerBackground";
import RichContent from "components/Content/RichContent";
import {AgencyButton, AgencyButtonTwo} from "components/Buttons/AgencyButton";
import BannerButtons from "components/Banner/BannerButtons";

class AgencyBanner extends RichContent {

    showImage = () => {
        const { AgencyImage } = this.props.BannerData;
        if (AgencyImage !== undefined) {
            return (
                <div className="col-lg-7 text-right">
                    <Reveal effect="fadeInRight">
                        <BannerImage image={{
                            src: '/img/home4/banner_img.png',
                            alt: 'Bannière',
                            title: 'Hero banner'
                        }}/>
                    </Reveal>
                </div>
            )
        }
    }

    render() {
        const { ClientsLogo } = this.props.BannerData;
        return (
            <section className="agency_banner_area bg_color">
                <BannerBackground src={'/img/home4/banner_bg.png'} />
                <div className="container custom_container">
                    <div className="row">
                        <div className="col-lg-5 d-flex align-items-center">
                            <div className="agency_content">
                                <h2 className="f_700 mb_40 wow fadeInLeft" dangerouslySetInnerHTML={this.displayTitle()}></h2>
                                <p className="f_400 l_height28 wow fadeInLeft" dangerouslySetInnerHTML={this.displayParagraph()}></p>
                                <BannerButtons>
                                    <Reveal effect="fadeInUp">
                                        <AgencyButton btn={{
                                            href: '/#',
                                            label: 'Get in touch',
                                            classNames: 'wow fadeInLeft',
                                            wow: '0.5s'
                                        }}/>
                                        <AgencyButtonTwo btn={{
                                            href: '/#',
                                            label: 'Sign Up',
                                            classNames: 'wow fadeInLeft',
                                            wow: '0.7s'
                                        }}/>
                                    </Reveal>
                                </BannerButtons>
                            </div>
                        </div>
                        {this.showImage()}
                    </div>
                    {
                        ClientsLogo.length > 0 &&
                        (<PartnerLogoCollection clientsLogo={ClientsLogo}/>)
                    }
                </div>
            </section>
        )
    }
}

export default AgencyBanner;

AgencyBanner.defaultProps = {
    title: 'Strategic design and technology agency',
    p: `Why I say old chap that is spiffing off his nut arse pear shaped plastered Jeffrey bodge barney some dodgy.`
}
