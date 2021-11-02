import React from 'react';
import CustomNavbar from 'components/Navbar/CustomNavbar';
import DesignBanner from 'sections/Banner/DesignBanner';
import Services from 'sections/Service/Services';
import ServiceData from "sections/Service/ServiceData";
import Subscribe from 'sections/Form/Subscribe';
import Footer from 'sections/Footer/Footer';
import FooterData from 'sections/Footer/FooterData';

function Home() {
    const ServiceSection = Services.app;
    return (
        <div className="body_wrapper">
            <CustomNavbar containerClass="custom_container p0" btnClass="new_btn"/>
            <DesignBanner/>
            <ServiceSection ServiceData={ServiceData}/>
            <Subscribe FooterData={FooterData}/>
            <Footer FooterData={FooterData}/>
        </div>
    )
}

export default Home;
