import React from 'react';
import PaymentBanner from 'sections/Banner/PaymentBanner';
import PaymentFeatures from 'sections/Features/PaymentFeatures';
import PaymentService from 'sections/Service/PaymentService';
import ServiceData from 'sections/Service/ServiceData';
import PaymentProcess from 'sections/Integrations/PaymentProcess';
import PaymentTestimonial from 'sections/Testimonial/PaymentTestimonial';
import Layout from "layouts/Layout";

const PaymentProcessing = () => {
    return(
        <Layout variant={'payment'}>
            <PaymentBanner/>
            <PaymentFeatures/>
            <PaymentService
                reverse
                services={ServiceData.PaymentService}
            />
            <PaymentProcess/>
            <PaymentTestimonial/>
        </Layout>
    )
}

const keywords = ['payment','processing','home'];

export default PaymentProcessing;
