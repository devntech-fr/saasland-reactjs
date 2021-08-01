import React from 'react';
import CustomNavbar from '../sections/CustomNavbar';
import StartupBanner from '../sections/Banner/StartupBanner';
import Sservice from '../sections/Service/Sservice/Sservice';
import AgencyAbout from '../sections/About/AgencyAbout';
import Features from '../sections/Features/Features';
import Funfact from '../sections/Funfact';
import Partner from '../sections/Partner';
import MarketingTestimonial from '../sections/Testimonial/MarketingTestimonial';
import ServiceData from '../sections/Service/ServiceData';
import BannerData from '../sections/Banner/BannerData';
import FooterTwo from '../sections/Footer/FooterTwo';
import FooterData from '../sections/Footer/FooterData';

const Startup = () => (
    <div className="body_wrapper">
        <CustomNavbar slogo="sticky_logo" mClass="menu_four" nClass="w_menu"/>
        <StartupBanner/>
        <Sservice/>
        <AgencyAbout ServiceData={ServiceData}/>
        <Features aClass="agency_featured_area_two"/>
        <Funfact fclass="fun_fact_area_two" manImg="home8/fact.png" tClass="t_color3" ftitle="Trusted" fdescription="Why I say old chap that is spiffing barney, nancy boy bleeder chimney pot Richard cheers the little rotter so I said, easy peasy buggered blower bevvy A bit of how's your father he nicked it arse over tit."
        CnumberOne="7" CnumberTwo="100"/>
        <MarketingTestimonial BannerData={BannerData}/>
        <Partner pClass="partner_logo_area bg_color"/>
        <FooterTwo FooterData={FooterData}/>
    </div>
)
export default Startup;
