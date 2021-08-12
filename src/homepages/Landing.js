import React from 'react';
import OnepageMenu from '../sections/OnepageMenu';
import AppBanner from '../sections/Banner/AppBanner';
import AppFeaturesTwo from '../sections/Features/AppFeaturesTwo';
import AppFeatures from '../sections/Features/AppFeatures';
import AppTestimonial from '../sections/Testimonial/AppTestimonial';
import AppWork from '../sections/Service/AppWork';
import ScreenshowCase from '../sections/ScreenshowCase';
import AppGetstarted from '../sections/AppGetstarted';
import AppTeam from '../sections/Team/AppTeam';
import FooterTwo from '../sections/Footer/FooterTwo';
import ServiceData from '../sections/Service/ServiceData';
import FooterData from '../sections/Footer/FooterData';

const Landing = () => {
    return(
        <div className="body_wrapper">
            <OnepageMenu slogo="sticky_logo" mClass="menu_four" nClass="w_menu" hbtnClass="btn_get_radious menu_custfive"/>
            <AppBanner/>
            <AppFeaturesTwo/>
            <AppFeatures/>
            <AppWork ServiceData={ServiceData}/>
            <AppTestimonial/>
            <ScreenshowCase/>
            <AppGetstarted/>
            <AppTeam/>
            <FooterTwo FooterData={FooterData}/>
        </div>
    )
}
export default Landing;
