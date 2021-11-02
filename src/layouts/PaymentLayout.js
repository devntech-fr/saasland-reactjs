import React from "react";
import CustomNavbar from "components/Navbar/CustomNavbar";
import FooterData from "sections/Footer/FooterData";
import FooterThree from "sections/Footer/FooterThree";

function PaymentLayout({ children }) {
    return (
        <div className="body_wrapper">
            <CustomNavbar sticky mClass="menu_four" nClass="w_menu"/>
            {children}
            <FooterThree FooterData={FooterData}/>
        </div>
    )
}

export default PaymentLayout;
