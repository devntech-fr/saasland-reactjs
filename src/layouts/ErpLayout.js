import React from "react";
import CustomNavbar from "components/Navbar/CustomNavbar";
import FooterData from "sections/Footer/FooterData";
import FooterErp from "sections/Footer/FooterErp";

function ErpLayout({ children }) {
    return (
        <div className="body_wrapper">
            <CustomNavbar navbarClass="m-auto" btnClass="new_btn" />
            {children}
            <FooterErp fClass="h_footer_dark_two" FooterData={FooterData}/>
        </div>
    )
}

export default ErpLayout;
