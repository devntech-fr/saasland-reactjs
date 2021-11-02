import React from "react";
import CustomNavbar from "components/Navbar/CustomNavbar";
import FooterData from "sections/Footer/FooterData";
import FooterTwo from "sections/Footer/FooterTwo";

function MarketingLayout({ children }) {
    return (
        <div className="body_wrapper">
            <CustomNavbar sticky navbarClass="menu_four" containerClass="custom_container p0" navListClass="pl_120 mr-auto ml-auto" btnClass="menu_cus" variant={`marketing`}/>
            {children}
            <FooterTwo FooterData={FooterData}/>
        </div>
    )
}

export default MarketingLayout;
