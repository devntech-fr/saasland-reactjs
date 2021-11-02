import React from "react";
import PropTypes from "prop-types";
import NavbarBrand from "components/Header/NavbarBrand";
import NavbarToggleButton from "components/Header/NavbarToggleButton";
import NavbarCollapse from "components/Header/NavbarCollapse";
import NavbarButton from "components/Header/NavbarButton";
import NavbarMenu from "components/Header/NavbarMenu";
import CallToActionButton from "types/CallToActionButton";
import NavbarContainer from "components/Header/NavbarContainer";
import NavigationWrapper from "components/Header/NavigationWrapper";

function Header({ navbarClass, containerClass, navListClass, sticky, navbarButton, children }) {
    const navbarClassname = navbarClass !== undefined ? ` ${navbarClass}` : '';
    const containerClassname = containerClass !== undefined ? ` ${containerClass}` : '';
    const navListClassname = navListClass !== undefined ? ` ${navListClass}` : '';
    return (
        <header className="header_area">
            <NavigationWrapper>
                <NavbarContainer>
                    <NavbarBrand
                        logoClass={sticky ? 'sticky_logo' : ''}
                    />
                    <NavbarToggleButton />

                    <NavbarCollapse>
                        <NavbarMenu navListClass={navListClassname}>
                            {children}
                        </NavbarMenu>
                        {
                            navbarButton && <NavbarButton href={'/#'} label={'Get started !'} target={'_self'}/>
                        }
                    </NavbarCollapse>
                </NavbarContainer>
            </NavigationWrapper>
        </header>
    )
}

export default Header;

Header.propTypes = {
    navbarClass: PropTypes.string.isRequired,
    containerClass: PropTypes.string.isRequired,
    navListClass: PropTypes.string,
    sticky: PropTypes.bool,
    navbarButton: PropTypes.shape(CallToActionButton),
}

Header.defaultProps = {
    navbarClass: 'menu_four',
    containerClass: 'custom_container p0'
}
