import React from 'react';
import CustomNavbar from '../sections/CustomNavbar';
import HomeERP from '../sections/Banner/ErpBanner';
import ErpService from '../sections/Service/ErpService';
import ErpAction from '../sections/ErpAction';
import ErpFeatures from '../sections/Features/ErpFeatures';
import Erpanalytics from '../sections/Erpanalytics';
import ErpCustomerlogo from '../sections/ErpCustomerlogo';
import ErpActionTwo from '../sections/ErpActionTwo';
import ErpTestimonial from '../sections/Testimonial/ErpTestimonial';
import FooterErp from '../sections/Footer/FooterErp';
import FooterData from '../sections/Footer/FooterData';

const Homeerp = () => {
    return(
        <div className="body_wrapper">
            <CustomNavbar mClass="erp_menu" hbtnClass="er_btn" nClass="mr-auto"/>
            <HomeERP/>
            <ErpService/>
            <ErpAction/>
            <ErpFeatures/>
            <Erpanalytics/>
            <ErpCustomerlogo/>
            <ErpTestimonial/>
            <ErpActionTwo/>
            <FooterErp fClass="h_footer_dark_two" FooterData={FooterData}/>
        </div>
    )
}
export default Homeerp;
