import React from 'react';
import CustomNavbar from '../sections/CustomNavbar';
import CloudBanner from '../sections/Banner/CloudBanner';
import CloudService from '../sections/Service/CloudService';
import CloudServiceTab from '../sections/Service/Sservice/CloudServiceTab';
import CloudFeatures from '../sections/Features/CloudFeatures';
import CloudFeaturesTwo from '../sections/Features/CloudFeaturesTwo';
import DeveloperTab from '../sections/DeveloperTab';
import Partner from '../sections/Partner';
import ServiceSubscribe from '../sections/ServiceSubscribe';
import FooterTwo from '../sections/Footer/FooterTwo';
import FooterData from '../sections/Footer/FooterData';

const HomeCloud = () => {
    return(
        <div className="body_wrapper">
            <CustomNavbar slogo="sticky_logo" mClass="menu_four" nClass="w_menu" hbtnClass="btn_get_radious menu_custfive"/>
            <CloudBanner/>
            <CloudService/>
            <CloudFeatures/>
            <CloudServiceTab/>
            <CloudFeaturesTwo/>
            <DeveloperTab/>
            <Partner pClass="partner_logo_area_two" pClasst="pt-0 mb-0"/>
            <ServiceSubscribe/>
            <FooterTwo fClass="pt_150" FooterData={FooterData}/>
        </div>
    )
}
export default HomeCloud;
