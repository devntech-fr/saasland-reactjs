import React from 'react';
import CustomNavbar from '../sections/CustomNavbar';
import PaymentBanner from '../sections/Banner/PaymentBanner';
import PaymentFeatures from '../sections/Features/PaymentFeatures';
import PaymentService from '../sections/Service/PaymentService';
import ServiceData from '../sections/Service/ServiceData';
import PaymentProcess from '../sections/PaymentProcess';
import PaymentTestimonial from '../sections/Testimonial/PaymentTestimonial';
import FooterThree from '../sections/Footer/FooterThree';
import FooterData from '../sections/Footer/FooterData';

const PaymentProcessing = () => {
    return(
        <div className="body_wrapper">
            <CustomNavbar slogo="sticky_logo" mClass="menu_four" nClass="w_menu"/>
            <PaymentBanner/>
            <PaymentFeatures/>
            <PaymentService ServiceData={ServiceData}/>
            <PaymentProcess/>
            <PaymentTestimonial/>
            <FooterThree FooterData={FooterData}/>
        </div>
    )
}
export default PaymentProcessing;
