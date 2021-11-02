import React from "react";
import CustomNavbar from "components/Navbar/CustomNavbar";
import FooterData from "sections/Footer/FooterData";
import FooterSecurity from "sections/Footer/FooterSecurity";

function SecurityLayout({ children }) {
    return (
        <div className="body_wrapper">
            <CustomNavbar mClass="menu_eight" nClass="w_menu" slogo="sticky_logo" hbtnClass="security_btn"/>
            {children}
            <FooterSecurity FooterData={FooterData}/>
        </div>
    )
}

export default SecurityLayout;
