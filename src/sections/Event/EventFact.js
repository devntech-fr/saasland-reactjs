import React from "react";
import { displayTitle } from "components/Content/RichContent";

const EventFact = ({ title, children }) => {
  return (
    <section className="event_fact_area sec_pad">
      <div className="container">
        <div className="hosting_title security_title text-center">
          <h2 dangerouslySetInnerHTML={displayTitle(title)}></h2>
        </div>
        <div className="seo_fact_info">
          {children}
        </div>
      </div>
    </section>
  );
};
export default EventFact;
