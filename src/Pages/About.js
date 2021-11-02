import React from 'react';
import CustomNavbar from 'components/Navbar/CustomNavbar';
import Breadcrumb from 'sections/Breadcrumb/Breadcrumb';
import AgencyService from 'sections/Service/Sservice/AgencyService';
import AgencyAbout from 'sections/About/AgencyAbout';
import PartnerLogo from 'sections/PartnerLogo/PartnerLogo';
import FooterTwo from 'sections/Footer/FooterTwo';
import ServiceData from 'sections/Service/ServiceData';
import FooterData from 'sections/Footer/FooterData';

const About = () => {
    return(
        <div className="body_wrapper">
            <CustomNavbar slogo="sticky_logo" mClass="menu_four" nClass="w_menu ml-auto mr-auto"/>
            <Breadcrumb breadcrumbClass="breadcrumb_area" imgName="breadcrumb/banner_bg.png" Ptitle="About Us" Pdescription="Why I say old chap that is spiffing off his nut arse pear shaped plastered Jeffrey bodge barney some dodgy.!!"/>
            <AgencyService/>
            <AgencyAbout ServiceData={ServiceData}/>
            <PartnerLogo pClass="partner_logo_area_five bg_color"/>
            <FooterTwo FooterData={FooterData}/>
        </div>
    )
}
export default About;
