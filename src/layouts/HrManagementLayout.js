import React from "react";
import CustomNavbar from "components/Navbar/CustomNavbar";
import FooterData from "sections/Footer/FooterData";
import PrototypeFooter from "sections/Footer/PrototypeFooter";

function HrManagementLayout({ children }) {
    return (
        <div className="body_wrapper">
            <CustomNavbar mClass="menu_four" nClass="w_menu"/>
            {children}
            <PrototypeFooter rclass={'payment_footer_area_two'} FooterData={FooterData}/>
        </div>
    )
}

export default HrManagementLayout;
