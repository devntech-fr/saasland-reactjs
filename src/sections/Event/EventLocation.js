import React from "react";
import Map from "sections/Map";
import { displayTitle, displayParagraph } from "components/Content/RichContent";

const EventLocation = ({ title, p, coordinates, socialLinks }) => {
  return (
    <section className="event_location_area">
      <Map />
      <div className="container">
        <div className="event_location">
          <div className="contact_info_item">
            <h6 dangerouslySetInnerHTML={displayTitle(title)}></h6>
            <p dangerouslySetInnerHTML={displayParagraph(p)}></p>
          </div>
          <div className="contact_info_item">
            <h6>Informations de contact</h6>
            <p>
              <a href={`mailto:${coordinates.email}`}>{coordinates.email}</a>
            </p>
            <p>
              <a href={`tel:${coordinates.mobile}`}>{coordinates.mobile}</a>
            </p>
          </div>
          <div className="f_social_icon_two">
            {
              socialLinks.map(link => (
                  <a href={link.href} target={link.target} key={link.id}>
                    <i className={`ti-${link.icon}`}></i>
                  </a>
              ))
            }
          </div>
        </div>
      </div>
    </section>
  );
};
export default EventLocation;
