import React from "react";
import CustomNavbar from "components/Navbar/CustomNavbar";
import FooterData from "sections/Footer/FooterData";
import FooterErp from "sections/Footer/FooterErp";

function EventLayout({ children }) {
    return (
        <div className="body_wrapper">
            <CustomNavbar
                mClass="menu_four hosting_menu"
                nClass="w_menu m-auto"
                slogo="sticky_logo"
                hbtnClass="event_btn"
            />
            {children}
            <FooterErp fClass="event_footer_area" FooterData={FooterData}/>
        </div>
    )
}

export default EventLayout;
