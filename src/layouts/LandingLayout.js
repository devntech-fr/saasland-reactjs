import React from "react";
import FooterData from "sections/Footer/FooterData";
import FooterTwo from "sections/Footer/FooterTwo";
import OnePageMenu from "components/Navbar/OnePageMenu";

function LandingLayout({ children }) {
    return (
        <div className="body_wrapper">
            <OnePageMenu
                logoClass=""
                navbarClass="menu_four"
                navListClass=""
                ctaBtnClass="btn_get_radious menu_custfive"
            />
            {children}
            <FooterTwo FooterData={FooterData}/>
        </div>
    )
}

export default LandingLayout;
