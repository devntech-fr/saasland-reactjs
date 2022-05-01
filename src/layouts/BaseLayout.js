import React from "react";
import PropTypes from "prop-types";
import CustomNavbar from "components/Navbar/CustomNavbar";
import FooterTwo from "sections/Footer/FooterTwo";
import FooterData from "sections/Footer/FooterData";
import Preloader from "components/Preloader";

function BaseLayout({ children, sticky, navbarClass, navListClass, btnClass, fClass }) {

    return (
        <div className="body_wrapper">
            <Preloader/>
            <CustomNavbar sticky={sticky} navbarClass={navbarClass} navListClass={navListClass}  btnClass={btnClass} />
            {children}
            <FooterTwo fClass={fClass} FooterData={FooterData}/>
        </div>
    )
}

export default BaseLayout;

BaseLayout.propTypes = {
    sticky: PropTypes.bool,
    navbarClass: PropTypes.string,
    navListClass: PropTypes.string,
    btnClass: PropTypes.string,
    fClass: PropTypes.string
}
