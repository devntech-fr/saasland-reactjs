import React from "react";

function NavbarMenu({ navListClass, children }) {
    return (
        <ul className={`navbar-nav menu ml-auto${navListClass}`}>
            {children}
        </ul>
    )
}

export default NavbarMenu;

NavbarMenu.defaultProps = {
    navListClass: ' w_menu'
}
