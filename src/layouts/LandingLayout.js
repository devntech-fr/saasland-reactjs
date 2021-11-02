import React from "react";
import FooterData from "sections/Footer/FooterData";
import FooterTwo from "sections/Footer/FooterTwo";
import OnePageMenu from "components/Navbar/OnePageMenu";

function LandingLayout({ children }) {
    return (
        <div className="body_wrapper">
            <OnePageMenu
                slogo=""
                mClass="menu_four"
                nClass=""
                hbtnClass=" menu_custfive"
            />
            {children}
            <FooterTwo FooterData={FooterData}/>
        </div>
    )
}

export default LandingLayout;
