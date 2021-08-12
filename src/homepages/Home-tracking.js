import React from 'react';
import CustomNavbar from '../sections/CustomNavbar';
import TrackingBanner from '../sections/Banner/TrackingBanner';
import TrackingActivity from '../sections/TrackingActivity';
import TrackingProduct from '../sections/Features/TrackingProduct';
import TrackingPrice from '../sections/TrackingPrice';
import TrackingGetstarted from '../sections/TrackingGetstarted';
import FooterSecurity from "../sections/Footer/FooterSecurity";
import FooterData from '../sections/Footer/FooterData';

const HomeTracking = () => {
    return(
        <div className="body_wrapper">
            <CustomNavbar mClass="menu_tracking" nClass="mr-auto" hbtnClass="tracking_btn"/>
            <TrackingBanner/>
            <TrackingActivity/>
            <TrackingProduct/>
            <TrackingPrice/>
            <TrackingGetstarted/>
            <FooterSecurity FooterData={FooterData}/>
        </div>
    )
}
export default HomeTracking;
