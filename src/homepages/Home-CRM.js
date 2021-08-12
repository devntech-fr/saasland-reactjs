import React from 'react';
import CustomNavbar from '../sections/CustomNavbar';
import CrmBanner from '../sections/Banner/CrmBanner';
import StartupFeatures from '../sections/Features/StartupFeatures';
import Stservice from '../sections/Service/Sservice/StartupService';
import Testimonial from '../sections/Testimonial/Testimonial';
import Cprogress from '../sections/CircleProgressbar';
import PrototypeFooter from '../sections/Footer/PrototypeFooter';
import FooterData from '../sections/Footer/FooterData';

const HomeCRM = () => {
    return(
        <div className="body_wrapper">
            <CustomNavbar slogo="sticky_logo" mClass="menu_four" nClass="w_menu" hbtnClass="btn_get_radious menu_custfive"/>
            <CrmBanner/>
            <StartupFeatures/>
            <Stservice/>
            <Cprogress/>
            <Testimonial tClass="testimonial_area_four sec_pad" FooterData={FooterData}/>
            <PrototypeFooter rclass={'payment_footer_area_two'} FooterData={FooterData}/>
        </div>
    )
}
export default HomeCRM;
