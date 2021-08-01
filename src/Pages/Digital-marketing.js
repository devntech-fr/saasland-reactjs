import React from 'react';
import CustomNavbar from '../sections/CustomNavbar';
import AgencyBanner from '../sections/Banner/AgencyBanner';
import BannerData from '../sections/Banner/BannerData';
import MarketingService from '../sections/Service/MarketingService';
import ServiceData from '../sections/Service/ServiceData';
import AgencyAbout from '../sections/About/AgencyAbout';
import Features from '../sections/Features/Features';
import MarketingTestimonial from '../sections/Testimonial/MarketingTestimonial';
import AgencyAction from '../sections/AgencyAction';
import FooterTwo from '../sections/Footer/FooterTwo';
import FooterData from '../sections/Footer/FooterData';


const DigitalMarketing = () => {
    return(
        <div className="body_wrapper">
            <CustomNavbar mClass="menu_four" cClass="custom_container p0" nClass="pl_120 mr-auto ml-auto" hbtnClass="menu_cus"/>
            <AgencyBanner BannerData={BannerData}/>
            <MarketingService ServiceData={ServiceData}/>
            <AgencyAbout ServiceData={ServiceData}/>
            <Features/>
            <MarketingTestimonial BannerData={BannerData}/>
            <AgencyAction/>
            <FooterTwo FooterData={FooterData}/>
        </div>
    )
}
export default DigitalMarketing;
