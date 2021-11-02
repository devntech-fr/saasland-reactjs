import React from 'react';
import StartupBanner from 'sections/Banner/StartupBanner';
import AgencyService from 'sections/Service/Sservice/AgencyService';
import AgencyAbout from 'sections/About/AgencyAbout';
import AgencyFeatures from 'sections/Features/AgencyFeatures';
import FunFact from "sections/Fact/FunFact";
import PartnerLogo from 'sections/PartnerLogo/PartnerLogo';
import MarketingTestimonial from 'sections/Testimonial/MarketingTestimonial';
import ServiceData from 'sections/Service/ServiceData';
import BannerData from 'sections/Banner/BannerData';
import Layout from "layouts/Layout";

const Startup = () => (
    <Layout variant={'startup'}>
        <StartupBanner/>
        <AgencyService/>
        <AgencyAbout ServiceData={ServiceData}/>
        <AgencyFeatures aClass="agency_featured_area_two"/>
        <FunFact fclass="fun_fact_area_two" manImg="home8/fact.png" tClass="t_color3" ftitle="Trusted" fdescription="Why I say old chap that is spiffing barney, nancy boy bleeder chimney pot Richard cheers the little rotter so I said, easy peasy buggered blower bevvy A bit of how's your father he nicked it arse over tit."
                 CnumberOne="7" CnumberTwo="100"/>
        <MarketingTestimonial BannerData={BannerData}/>
        <PartnerLogo pClass="partner_logo_area bg_color"/>
    </Layout>
)

const keywords = ['startup','home'];

export default Startup;
