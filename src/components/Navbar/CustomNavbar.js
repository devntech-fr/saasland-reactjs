import React from 'react';
import Sticky from 'react-stickynode';
import Header from "components/Header/Header";

function CustomNavbar(props) {
    var { sticky, navbarClass, navListClass, containerClass, btnClass, variant, navigationLinks } = props;
    const navbarClassname = navbarClass !== undefined ? ` ${navbarClass}` : '';
    const containerClassname = containerClass !== undefined ? ` ${containerClass}` : '';
    const navListClassname = navListClass !== undefined ? ` ${navListClass}` : '';
    const btnClassname = btnClass !== undefined ? ` ${btnClass}` : '';
    return (
        <Header
            navbarClassname={navbarClassname}
            containerClassname={containerClassname}
            navListClassname={navListClassname}
            btnClassname={btnClassname}
            sticky={sticky}
            navigationLinks={navigationLinks}
        />
    );
}

export default CustomNavbar;

CustomNavbar.defaultProps = {
    sticky: false,
    // mClass
    navbarClass: 'menu_four',
    // nClass
    navListClass: 'pl_120 mr-auto ml-auto',
    // cClass
    containerClass: 'custom_container p0',
    // hbtnClass
    btnClass: 'menu_cus'
}
