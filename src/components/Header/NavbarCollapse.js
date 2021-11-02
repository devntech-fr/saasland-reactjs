import React from "react";

function NavbarCollapse({children}) {
    return (
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            {children}
        </div>
    )
}

export default NavbarCollapse;
