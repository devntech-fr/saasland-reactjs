import React from "react";
import CustomNavbar from "components/Navbar/CustomNavbar";
import FooterData from "sections/Footer/FooterData";
import PrototypeFooter from "sections/Footer/PrototypeFooter";

function CrmLayout({ children }) {
    return (
        <div className="body_wrapper">
            <CustomNavbar sticky mClass="menu_four" nClass="w_menu" hbtnClass="btn_get_radious menu_custfive"/>
            {children}
            <PrototypeFooter rclass={'payment_footer_area_two'} FooterData={FooterData}/>
        </div>
    )
}

export default CrmLayout;
