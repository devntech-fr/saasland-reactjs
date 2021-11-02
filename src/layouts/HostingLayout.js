import React from "react";
import CustomNavbar from "components/Navbar/CustomNavbar";
import FooterData from "sections/Footer/FooterData";
import FooterErp from "sections/Footer/FooterErp";

function HostingLayout({ children }) {
    return (
        <div className="body_wrapper">
            <CustomNavbar mClass="menu_four hosting_menu" nClass="w_menu" slogo="sticky_logo"/>
            {children}
            <FooterErp FooterData={FooterData}/>
        </div>
    )
}

export default HostingLayout;
