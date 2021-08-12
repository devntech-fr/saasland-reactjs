import React from 'react';
import CustomNavbar from '../sections/CustomNavbar';
import SecurityBanner from "../sections/Banner/SecurityBanner";
import SecurityFeatures from "../sections/Features/SecurityFeatures";
import SecurityPowerFeatures from "../sections/Features/SecurityPowerfulFeatures";
import SecurityService from "../sections/Service/SecurityService";
import SequrityPrice from "../sections/Features/SecurityPrice";
import Analyticeslist from "../sections/Analyticeslist";
import SecurityCustomerLogo from "../sections/SecurityCustomersLogo";
import SecurityIntegration from "../sections/SecurityIntegration";
import SecurityAction from "../sections/SecurityAction";
import FooterSecurity from "../sections/Footer/FooterSecurity";
import FooterData from '../sections/Footer/FooterData';

const HomeSecurity =()=> {
    return(
        <div className="body_wrapper">
            <CustomNavbar mClass="menu_eight" nClass="w_menu" slogo="sticky_logo" hbtnClass="security_btn"/>
            <SecurityBanner/>
            <SecurityFeatures/>
            <SecurityPowerFeatures/>
            <SecurityService/>
            <SequrityPrice/>
            <Analyticeslist/>
            <SecurityCustomerLogo/>
            <SecurityIntegration/>
            <SecurityAction/>
            <FooterSecurity FooterData={FooterData}/>
        </div>
    )
}

export default HomeSecurity;
