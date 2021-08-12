import React from 'react';
import CustomNavbar from '../sections/CustomNavbar';
import HRBanner from '../sections/Banner/HRBanner';
import HRService from '../sections/Service/HRService';
import ServiceData from '../sections/Service/ServiceData';
import Video from '../sections/Video';
import MarketingGetstarted from '../sections/MarketingGetstarted';
import PrototypeFooter from '../sections/Footer/PrototypeFooter';
import FooterData from '../sections/Footer/FooterData';

const HRManagement = () => {
    return(
        <div className="body_wrapper">
            <CustomNavbar mClass="menu_four" nClass="w_menu"/>
            <HRBanner/>
            <HRService ServiceData={ServiceData}/>
            <Video/>
            <MarketingGetstarted/>
            <PrototypeFooter rclass={'payment_footer_area_two'} FooterData={FooterData}/>
        </div>
    )
}
export default HRManagement;
