import React from 'react';
import AppBanner from 'sections/Banner/AppBanner';
import AppFeaturesTwo from 'sections/Features/AppFeaturesTwo';
import AppFeatures from 'sections/Features/AppFeatures';
import AppTestimonial from 'sections/Testimonial/AppTestimonial';
import AppWork from 'sections/Service/AppWork';
import ScreenShowCase from 'sections/Product/ScreenShowCase';
import AppGetStarted from 'sections/CallToAction/AppGetStarted';
import AppTeam from 'sections/Team/AppTeam';
import ServiceData from 'sections/Service/ServiceData';
import Layout from "layouts/Layout";

const Landing = () => {
    return(
        <Layout variant={'landing'}>
            <AppBanner
                title={`Spend time <br/>with loved ones`}
                p={`Why I say old chap that is spiffing off his nut arse pear shaped<br/> plastered Jeffrey bodge barney some dodgy.!!`}
            />
            <AppFeaturesTwo
                title={`Inspired design for the digital app landing`}
                p={`lorem`}
            />
            <AppFeatures/>
            <AppWork ServiceData={ServiceData}/>
            <AppTestimonial/>
            <ScreenShowCase/>
            <AppGetStarted/>
            <AppTeam/>
        </Layout>
    )
}

const keywords = ['landing','home'];

export default Landing;
