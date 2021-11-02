import React from "react";
import CustomNavbar from "components/Navbar/CustomNavbar";
import FooterData from "sections/Footer/FooterData";
import FooterSecurity from "sections/Footer/FooterSecurity";

function TrackingLayout({ children }) {
    return (
        <div className="body_wrapper">
            <CustomNavbar mClass="menu_tracking" nClass="mr-auto" hbtnClass="tracking_btn"/>
            {children}
            <FooterSecurity FooterData={FooterData}/>
        </div>
    )
}

export default TrackingLayout;
