import React from "react";
import CustomNavbar from "components/Navbar/CustomNavbar";
import FooterData from "sections/Footer/FooterData";
import Footer from "sections/Footer/Footer";
import AgencyAbout from "sections/About/AgencyAbout";
import EventAbout from "sections/About/EventAbout";

function AboutSectionsSample() {
    return (
        <div className="body_wrapper">
            {/*<CustomNavbar cClass="custom_container p0" hbtnClass="new_btn"/>*/}
            <AgencyAbout/>
            <EventAbout
                title={`Web Design Conference 2019`}
                p={`So I said knees up Jeffrey grub me old mucker Oxford spend a penny, pukka codswallop fantastic lost the plot Queen's English. Daft he legged it mufty chancer porkies burke blatant pardon me lavatory.`}
                image={{
                    src: '/img/home-event/about.jpg',
                    alt: 'about event'
                }}
            />
            <Footer FooterData={FooterData}/>
        </div>
    )
}

export default AboutSectionsSample;
