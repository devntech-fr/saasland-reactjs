import React from "react";

function getComponentClassByThemeVariant(component, variant) {

}

function ServiceTabNav({ identifier, children }) {
    return (
        <ul className="nav nav-tabs software_service_tab" id={identifier} role="tablist">
            {children}
        </ul>
    )
}

export default ServiceTabNav;

ServiceTabNav.defaultProps = {
    identifier: 'myTab'
}
