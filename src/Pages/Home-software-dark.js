import React from 'react';
import CustomNavbar from '../sections/CustomNavbar';
import SoftwareDarkBanner from '../sections/Banner/SoftwareDarkBanner';
import BannerData from '../sections/Banner/BannerData';
import DarkSoftwareService from '../sections/Service/DarkSoftwareService';
import SoftwareDarkAction from '../sections/SoftwareDarkAction';
import SoftwareFeatures from '../sections/Features/SoftwareFeatures';
import SecurityFact from '../sections/SecurityFact';
import SecurityTestimonial from '../sections/Testimonial/SecurityTestimonial';
import SecurityPartnerLogo from '../sections/SecurityPartnerLogo';
import PrototypeFooter from '../sections/Footer/PrototypeFooter';
import FooterData from '../sections/Footer/FooterData';

const HomeSoftwareDark = () => {
    return(
        <div className="body_wrapper">
            <CustomNavbar mClass="menu_six" hbtnClass="cus_dark" cClass="custom_container p0" slogo="sticky_logo"/>
            <SoftwareDarkBanner/>
            <DarkSoftwareService/>
            <SoftwareDarkAction/>
            <SoftwareFeatures/>
            <SecurityFact image="trust_img2.png"/>

            <SecurityTestimonial/>
            <SecurityPartnerLogo sClass="partner_logo_area_three dk_bg_two" BannerData={BannerData}/>
            <PrototypeFooter rclass={'footer_area_six'} FooterData={FooterData}/>
        </div>
    )
}
export default HomeSoftwareDark;
