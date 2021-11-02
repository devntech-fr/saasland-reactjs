import React from "react";
import CustomNavbar from "components/Navbar/CustomNavbar";
import FooterData from "sections/Footer/FooterData";
import PrototypeFooter from "sections/Footer/PrototypeFooter";

function SoftwareLayout({ children }) {
    return (
        <div className="body_wrapper">
            <CustomNavbar mClass="menu_six" hbtnClass="cus_dark" cClass="custom_container p0" slogo="sticky_logo"/>
            {children}
            <PrototypeFooter rclass={'footer_area_six'} FooterData={FooterData}/>
        </div>
    )
}

export default SoftwareLayout;
