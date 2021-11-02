import React from 'react';
import Sticky from 'react-stickynode';
import Header from "components/Header/Header";

function CustomNavbar(props) {
    var { sticky, navbarClass, navListClass, containerClass, btnClass, variant, children } = props;
    const navbarClassname = navbarClass !== undefined ? ` ${navbarClass}` : '';
    const containerClassname = containerClass !== undefined ? ` ${containerClass}` : '';
    const navListClassname = navListClass !== undefined ? ` ${navListClass}` : '';
    const btnClassname = btnClass !== undefined ? ` ${btnClass}` : '';
    if (sticky) {
        return (
            <Sticky top={0} innerZ={9999} activeClass="navbar_fixed">
                <Header
                    navbarClass={navbarClassname}
                    containerClass={containerClassname}
                    navListClass={navListClassname}
                    btnClass={btnClassname}
                    sticky={sticky}
                >{children}</Header>
            </Sticky>
        );
    } else {
        return (
            <Header
                navbarClassname={navbarClassname}
                containerClassname={containerClassname}
                navListClassname={navListClassname}
                btnClassname={btnClassname}
            >{children}</Header>
        );
    }
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
