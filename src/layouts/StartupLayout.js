import React from "react";
import CustomNavbar from "components/Navbar/CustomNavbar";
import FooterData from "sections/Footer/FooterData";
import FooterTwo from "sections/Footer/FooterTwo";

function PaymentLayout({ children }) {
    return (
        <div className="body_wrapper">
            <CustomNavbar slogo="sticky_logo" mClass="menu_four" nClass="w_menu"/>
            {children}
            <FooterTwo FooterData={FooterData}/>
        </div>
    )
}

export default PaymentLayout;
