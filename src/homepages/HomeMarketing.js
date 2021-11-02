import React from 'react';
import AgencyBanner from 'sections/Banner/AgencyBanner';
import BannerData from 'sections/Banner/BannerData';
import MarketingService from 'sections/Service/MarketingService';
import ServiceData from 'sections/Service/ServiceData';
import AgencyAbout from 'sections/About/AgencyAbout';
import AgencyFeatures from 'sections/Features/AgencyFeatures';
import MarketingTestimonial from 'sections/Testimonial/MarketingTestimonial';
import AgencyAction from 'sections/CallToAction/AgencyAction';
import Layout from "layouts/Layout";

function HomeMarketing() {
    return(
        <Layout variant={'marketing'}>
            <AgencyBanner
                title={BannerData.AgencyText.title}
                p={BannerData.AgencyText.description}
                image={BannerData.AgencyImage}
                BannerData={BannerData}
            />
            <MarketingService ServiceData={ServiceData}/>
            <AgencyAbout ServiceData={ServiceData}/>
            <AgencyFeatures/>
            <MarketingTestimonial BannerData={BannerData}/>
            <AgencyAction/>
        </Layout>
    )
}

const keywords = ['marketing','agency','home'];

export default HomeMarketing;
