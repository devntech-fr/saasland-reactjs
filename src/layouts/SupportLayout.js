import React from "react";
import CustomNavbar from "components/Navbar/CustomNavbar";
import FooterData from "sections/Footer/FooterData";
import FooterSecurity from "sections/Footer/FooterSecurity";

function SupportLayout({ children }) {
    return (
        <div className="body_wrapper">
            <CustomNavbar mClass="menu_four" btnClass="d-none"/>
            {children}
            <FooterSecurity FooterData={FooterData}/>
        </div>
    )
}

export default SupportLayout;
