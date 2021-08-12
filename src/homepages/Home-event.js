import React from "react";
import CustomNavbar from "../sections/CustomNavbar";
import EventBanner from "../sections/Banner/EventBanner";
import EventCount from "../sections/Service/Sservice/EventCount";
import EventAbout from "../sections/About/EventAbout";
import EventTeam from "../sections/Team/EventTeam";
import EventFeatures from "../sections/Features/EventFeatures";
import EventDetails from "../sections/Features/EventDetails";
import ScheduleTab from "../sections/ScheduleTab";
import EventPrice from "../sections/EventPrice";
import EventFact from "../sections/EventFact";
import EventGallery from "../sections/Portfolios/EventGallery";
import EventSponsor from "../sections/EventSponsor";
import EventLocation from "../sections/EventLocation";
import FooterErp from "../sections/Footer/FooterErp";
import FooterData from "../sections/Footer/FooterData";

const HomeEvent = () => {
  return (
    <div className="body_wrapper">
      <CustomNavbar
        mClass="menu_four hosting_menu"
        nClass="w_menu m-auto"
        slogo="sticky_logo"
        hbtnClass="event_btn"
      />
      <EventBanner />
      <EventCount />
      <EventAbout />
      <EventTeam />
      <EventFeatures />
      <EventDetails />
      <ScheduleTab />
      <EventPrice />
      <EventFact />
      <EventGallery />
      <EventSponsor />
      <EventLocation />
      <FooterErp fClass="event_footer_area" FooterData={FooterData} />
    </div>
  );
};
export default HomeEvent;
