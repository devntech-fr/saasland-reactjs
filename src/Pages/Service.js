import React from 'react';
import CustomNavbar from 'components/Navbar/CustomNavbar';
import Breadcrumb from 'sections/Breadcrumb/Breadcrumb';
import HRServices from 'sections/Service/HRServices';
import PrototypeService from 'sections/Service/Sservice/PrototypeService';
import PartnerLogo from 'sections/PartnerLogo/PartnerLogo';
import ServiceSubscribe from 'sections/CallToAction/ServiceSubscribe';
import FooterTwo from 'sections/Footer/FooterTwo';
import ServiceData from 'sections/Service/ServiceData';
import FooterData from 'sections/Footer/FooterData';

const Service = () => {
    return(
        <div className="body_wrapper">
            <CustomNavbar slogo="sticky_logo" mClass="menu_four" nClass="w_menu ml-auto mr-auto"/>
            <Breadcrumb breadcrumbClass="breadcrumb_area" imgName="breadcrumb/banner_bg.png" Ptitle="Our services" Pdescription="Why I say old chap that is spiffing off his nut arse pear shaped plastered Jeffrey bodge barney some dodgy.!!"/>
            <HRServices ServiceData={ServiceData}/>
            <PrototypeService/>
            <PartnerLogo pClass="partner_logo_area_two" pClasst="pt-0 mb-0"/>
            <ServiceSubscribe sClass="s_form_info_two"/>
            <FooterTwo fClass="pt_150" FooterData={FooterData}/>
        </div>
    )
}
export default Service;
