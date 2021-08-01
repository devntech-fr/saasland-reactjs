import React from 'react';
import CustomNavbar from '../sections/CustomNavbar';
import HostingBanner from '../sections/Banner/HostingBanner';
import DomainSearch from '../sections/DomainSearch';
import HostingService from '../sections/Service/HostingService';
import HostingFeatures from '../sections/Service/HostingFeatures';
import HostingFeaturesTwo from '../sections/Service/HostingFeaturesTwo';
import HostingAction from '../sections/HostingAction';
import HostingPlan from '../sections/Features/HostingPlan';
import HostingMap from '../sections/HostingMap';
import HostingBlog from '../sections/Blog/HostingBlog';
import HostingActionTwo from '../sections/HostingActionTwo';
import FooterErp from '../sections/Footer/FooterErp';
import FooterData from '../sections/Footer/FooterData';

const HomeHosting =()=> {
    return(
        <div className="body_wrapper">
            <CustomNavbar mClass="menu_four hosting_menu" nClass="w_menu" slogo="sticky_logo"/>
            <HostingBanner/>
            <DomainSearch/>
            <HostingService/>
            <HostingFeatures/>
            <HostingFeaturesTwo/>
            <HostingAction aClass="h_action_area" aimage="action_img.png" colClass="col-lg-6" colClassTwo="col-lg-6" Atitle="Managed wordpress Hosting on all plans" Atext="Spiffing pukka show off show off pick your nose and blow off easy peasy buggered hotpot Harry, pardon me blatant.!"/>
            <HostingPlan/>
            <HostingMap/>
            <HostingBlog/>
            <HostingActionTwo/>
            <FooterErp FooterData={FooterData}/>
        </div>
    )
}
export default HomeHosting;
