import React from "react";

function NavbarDropdown(props) {
    return (
        <ul role="menu" className="dropdown-menu">
            {props.children}
        </ul>
    )
}

export default NavbarDropdown;
