import React from "react";
import CustomNavbar from 'components/Navbar/CustomNavbar';
import FooterData from "sections/Footer/FooterData";
import PropTypes from "prop-types";
import FooterErp from "sections/Footer/FooterErp";
import Menu from "components/Header/Menu";

function ChatLayout({ children }) {
    return (
        <div className="body_wrapper">
            <CustomNavbar navbarClass="m-auto" btnClass="new_btn">
                <Menu/>
            </CustomNavbar>
            {children}
            <FooterErp fclass={'event_footer_area'} FooterData={FooterData}/>
        </div>
    )
}

ChatLayout.propTypes = {
    navbarClass: PropTypes.string,
    sticky: PropTypes.bool,
    navListClass: PropTypes.string,
    btnClass: PropTypes.string,
    fClass: PropTypes.string
}

ChatLayout.defaultProps = {
    navbarClass: 'm-auto',
    sticky: true,
    btnClass: 'new_btn',
    fClass: 'event_footer_area'
}

export default ChatLayout;
