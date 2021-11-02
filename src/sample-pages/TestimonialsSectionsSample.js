import React from "react";
import AppTestimonial from "sections/Testimonial/AppTestimonial";
import ErpTestimonial from "sections/Testimonial/ErpTestimonial";
import MarketingTestimonial from "sections/Testimonial/MarketingTestimonial";
import PaymentTestimonial from "sections/Testimonial/PaymentTestimonial";
import SecurityTestimonial from "sections/Testimonial/SecurityTestimonial";
import StartupTestimonial from "sections/Testimonial/StartupTestimonial";
import FooterData from "sections/Footer/FooterData";
import BannerData from "sections/Banner/BannerData";

function TestimonialsSectionsSample() {
    return (
        <div className="body_wrapper">
            <AppTestimonial/>
            <ErpTestimonial/>
            <MarketingTestimonial BannerData={BannerData}/>
            <PaymentTestimonial/>
            <SecurityTestimonial/>
            <StartupTestimonial FooterData={FooterData}/>
        </div>
    )
}

export default TestimonialsSectionsSample;
