import React from 'react';
import CustomNavbar from '../sections/CustomNavbar';
import SupportBanner from '../sections/Banner/SupportBanner';
import BannerData from '../sections/Banner/BannerData';
import SupportPartnerlogo from '../sections/SupportPartnerlogo';
import SupportItem from '../sections/Service/SupportItem';
import Designtab from '../sections/Features/Designtab';
import SupportIntegration from '../sections/SupportIntegration';
import Price from '../sections/Price';
import MarketingTestimonial from '../sections/Testimonial/MarketingTestimonial';
import SupportSubscribe from '../sections/SupportSubscribe';
import FooterSecurity from "../sections/Footer/FooterSecurity";
import FooterData from '../sections/Footer/FooterData';

const HomeSupport = () => {
    return(
        <div className="body_wrapper">
            <CustomNavbar mClass="menu_four" hbtnClass="d-none"/>
            <SupportBanner/>
            <SupportPartnerlogo BannerData={BannerData}/>
            <SupportItem/>
            <Designtab/>
            <SupportIntegration/>
            <Price/>
            <MarketingTestimonial BannerData={BannerData}/>
            <SupportSubscribe/>
            <FooterSecurity FooterData={FooterData}/>
        </div>
    )
}
export default HomeSupport;
