import React from "react";
import PropTypes from "prop-types";
import Sticky from 'react-stickynode';
import { Link } from "react-router-dom";
import NavbarBrand from "components/Header/NavbarBrand";
import NavbarToggleButton from "components/Header/NavbarToggleButton";
import NavbarCollapse from "components/Header/NavbarCollapse";
import NavbarButton from "components/Header/NavbarButton";
import NavbarMenu from "components/Header/NavbarMenu";
import NavbarLink from "./NavbarLink";
import CallToActionButton from "types/CallToActionButton";
import NavbarContainer from "components/Header/NavbarContainer";
import NavigationWrapper from "components/Header/NavigationWrapper";

function Header({ sticky, navbarClass, navListClass, containerClass, btnClass, variant, navigationLinks }) {
    //var { sticky, navbarClass, navListClass, containerClass, btnClass, variant, children } = props;
    const navbarClassname = navbarClass !== undefined ? ` ${navbarClass}` : 'menu_four';
    const containerClassname = containerClass !== undefined ? ` ${containerClass}` : 'custom_container p0';
    const navListClassname = navListClass !== undefined ? ` ${navListClass}` : 'pl_120 mr-auto ml-auto';
    const navbarButton = {
        href: '/demander-un-devis',
        label: 'Demander un devis'
    }

    if (sticky) {
        return (
            <Sticky top={0} innerZ={9999} activeClass="navbar_fixed">
                <HeaderArea
                    sticky={sticky}
                    navListClassname={navListClassname}
                    navbarButton={navbarButton}
                    containerClassname={containerClassname}
                    navbarClassname={navbarClassname}
                    navigationLinks={navigationLinks}
                />
            </Sticky>
        )
    }

    return (
        <HeaderArea
            sticky={sticky}
            navListClassname={navListClassname}
            navbarButton={navbarButton}
            containerClassname={containerClassname}
            navigationLinks={navigationLinks}
        />
    )
}

function HeaderArea({ sticky, navListClassname, navbarButton, containerClassname, navigationLinks }) {

    const showLinks = () => {
        return navigationLinks?.map((link, key) => {
            console.log('link',link);
            const { submenu, megaMenu, isActive, label, href } = link;
            return (
                <NavbarLink
                    href={href}
                    label={label}
                    submenu={submenu}
                    megaMenu={megaMenu}
                    isActive={isActive}
                    key={key}
                />

            )
        })
    }
    return (
        <header className="header_area">
            <NavigationWrapper>
                <NavbarContainer className={containerClassname}>
                    <NavbarBrand
                        logoClass={sticky ? 'sticky_logo' : ''}
                    />
                    <NavbarToggleButton />

                    <NavbarCollapse>
                        <NavbarMenu navListClass={navListClassname}>
                            {showLinks()}
                        </NavbarMenu>
                        {
                            navbarButton && <NavbarButton className={navbarButton.classNames ?? 'menu_cus'} href={navbarButton.href} label={navbarButton.label} target={'_self'}/>
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
    containerClass: 'custom_container p0',
    sticky: true
}
