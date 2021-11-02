import React from "react";
import Footer from "sections/Footer/Footer";
import FooterData from "sections/Footer/FooterData";
import FooterErp from "sections/Footer/FooterErp";
import FooterSecurity from "sections/Footer/FooterSecurity";
import FooterThree from "sections/Footer/FooterThree";
import FooterTwo from "sections/Footer/FooterTwo";
import PrototypeFooter from "sections/Footer/PrototypeFooter";

function FooterSample() {
    return (
        <div className="body_wrapper">
            <Footer FooterData={FooterData}/>
            <FooterErp FooterData={FooterData}/>
            <FooterSecurity FooterData={FooterData}/>
            <FooterThree FooterData={FooterData}/>
            <FooterTwo FooterData={FooterData}/>
            <PrototypeFooter FooterData={FooterData}/>
        </div>
    )
}

export default FooterSample;
