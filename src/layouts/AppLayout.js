import React from "react";
import CustomNavbar from "components/Navbar/CustomNavbar";
import FooterData from "sections/Footer/FooterData";
import PrototypeFooter from "sections/Footer/PrototypeFooter";
import PropTypes from "prop-types";
import FooterTwo from "sections/Footer/FooterTwo";

function AppLayout({ children }) {
    return (
        <div className="body_wrapper">
            <CustomNavbar
                sticky
                navbarClass="menu_four"
                navListClass="w_menu"
                btnClass="er_btn"
            />
            {children}
            <FooterTwo FooterData={FooterData}/>
        </div>
    )
}

AppLayout.propTypes = {
    navbarClass: PropTypes.string,
    sticky: PropTypes.bool,
    navListClass: PropTypes.string,
    btnClass: PropTypes.string,
    footerClass: PropTypes.string
}

AppLayout.defaultProps = {
    navbarClass: 'menu_four',
    sticky: true,
    navListClass: 'w_menu',
    btnClass: 'er_btn',
    footerClass: 'payment_footer_area_two'
}

export default AppLayout;
