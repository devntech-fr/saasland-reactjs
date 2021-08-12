import React from "react";
import CustomNavbar from "../sections/CustomNavbar";
import FooterData from "../sections/Footer/FooterData";
import Footer from "../sections/Footer/Footer";
import AgencyAbout from "../sections/About/AgencyAbout";
import EventAbout from "../sections/About/EventAbout";

function AboutSectionsSample() {
    return (
        <div className="body_wrapper">
            <CustomNavbar cClass="custom_container p0" hbtnClass="new_btn"/>
            <AgencyAbout/>
            <EventAbout/>
            <Footer FooterData={FooterData}/>
        </div>
    )
}

export default AboutSectionsSample;
