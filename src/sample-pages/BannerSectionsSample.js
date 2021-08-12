import React, { useEffect } from "react";
import CustomNavbar from "../sections/CustomNavbar";
import FooterData from "../sections/Footer/FooterData";
import Footer from "../sections/Footer/Footer";
import AgencyAbout from "../sections/About/AgencyAbout";
import EventAbout from "../sections/About/EventAbout";
import AgencyBanner from "../sections/Banner/AgencyBanner";
import AppBanner from "../sections/Banner/AppBanner";
import ChatBanner from "../sections/Banner/ChatBanner";
import CloudBanner from "../sections/Banner/CloudBanner";
import CrmBanner from "../sections/Banner/CrmBanner";
import DesignBanner from "../sections/Banner/DesignBanner";
import ErpBanner from "../sections/Banner/ErpBanner";
import EventBanner from "../sections/Banner/EventBanner";
import HostingBanner from "../sections/Banner/HostingBanner";
import HRBanner from "../sections/Banner/HRBanner";
import PaymentBanner from "../sections/Banner/PaymentBanner";
import SecurityBanner from "../sections/Banner/SecurityBanner";
import SoftwareDarkBanner from "../sections/Banner/SoftwareDarkBanner";
import StartupBanner from "../sections/Banner/StartupBanner";
import SupportBanner from "../sections/Banner/SupportBanner";
import TrackingBanner from "../sections/Banner/TrackingBanner";

function BannerSectionsSample() {
    useEffect(() => {
    }, []);
    return (
        <div className="body_wrapper">
            <CustomNavbar cClass="custom_container p0" hbtnClass="new_btn"/>
            <AgencyBanner/>
            <AppBanner/>
            <ChatBanner/>
            <CloudBanner/>
            <CrmBanner/>
            <DesignBanner/>
            <ErpBanner/>
            <EventBanner/>
            <HostingBanner/>
            <HRBanner/>
            <PaymentBanner/>
            <SecurityBanner/>
            <SoftwareDarkBanner/>
            <StartupBanner/>
            <SupportBanner/>
            <TrackingBanner/>
            <Footer FooterData={FooterData}/>
        </div>
    )
}

export default BannerSectionsSample;
