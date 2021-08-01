import React from 'react';
import CustomNavbar from '../sections/CustomNavbar';
import DesignBanner from '../sections/Banner/DesignBanner';
import Service from '../sections/Service/Service';
import Subscribe from '../sections/Subscribe';
import Footer from '../sections/Footer/Footer';
import FooterData from '../sections/Footer/FooterData';

export const Home = () => (
    <div className="body_wrapper">
        <CustomNavbar cClass="custom_container p0" hbtnClass="new_btn"/>
        <DesignBanner/>
        <Service/>
        <Subscribe FooterData={FooterData}/>
        <Footer FooterData={FooterData}/>
    </div>
)
