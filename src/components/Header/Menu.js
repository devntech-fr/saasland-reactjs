import React from "react";
import MenuLink from "components/Header/MenuLink";
import MegaMenu from "components/Header/MegaMenu";
import NavbarDropdown from "components/Header/NavbarDropdown";

function Menu() {
    return (
        <React.Fragment>
            <MenuLink submenu megaMenu href={'/#'} label={"Home"}>
                <MegaMenu/>
            </MenuLink>
            <MenuLink submenu href={'/#'} label={"Services"}>
                <NavbarDropdown>
                    <MenuLink href={'/Services'} label={'Services'}/>
                    <MenuLink href={'/ServicesDetails'} label={'Services Details'}/>
                </NavbarDropdown>
            </MenuLink>
            {/*<MenuLink submenu>*/}
            {/*    <Link to="/#" title="Pages" className="dropdown-toggle nav-link" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Pages</Link>*/}
            {/*    <NavbarDropdown>*/}
            {/*        <MenuLink><NavLink exact title="About" className="nav-link" to='/About'>About</NavLink></MenuLink>*/}
            {/*        <MenuLink><NavLink exact title="Process" className="nav-link" to='/Process'>Process</NavLink></MenuLink>*/}
            {/*        <MenuLink><NavLink exact title="Team" className="nav-link" to='/Team'>Team</NavLink></MenuLink>*/}
            {/*        <MenuLink><NavLink exact title="SupportPrice" className="nav-link" to='/SupportPrice'>SupportPrice</NavLink></MenuLink>*/}
            {/*        <MenuLink><NavLink exact title="Faq" className="nav-link" to='/Faq'>Faq</NavLink></MenuLink>*/}
            {/*        <MenuLink><NavLink exact title="SignIn" className="nav-link" to='/SignIn'>Sign In</NavLink></MenuLink>*/}
            {/*        <MenuLink><NavLink exact title="SignUp" className="nav-link" to='/SignUp'>Sign Up</NavLink></MenuLink>*/}
            {/*    </NavbarDropdown>*/}
            {/*</MenuLink>*/}
            {/*<MenuLink submenu>*/}
            {/*    <Link title="Pages" className="dropdown-toggle nav-link" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false" to="#">Portfolio</Link>*/}
            {/*    <NavbarDropdown>*/}
            {/*        <MenuLink><NavLink title="Portfolio 2" className="nav-link" to='/Portfolio-2col'>Portfolio 2col</NavLink></MenuLink>*/}
            {/*        <MenuLink><NavLink title="Portfolio 3" className="nav-link" to='/Portfolio-3col'>Portfolio 3col</NavLink></MenuLink>*/}
            {/*        <MenuLink><NavLink title="Portfolio Fullwidth" className="nav-link" to='/Portfolio-fullwidth-4col'>Portfolio fullwidth</NavLink></MenuLink>*/}
            {/*        <MenuLink><NavLink title="PortfolioSingle" className="nav-link" to='/PortfolioSingle'>Portfolio Single</NavLink></MenuLink>*/}
            {/*    </NavbarDropdown>*/}
            {/*</MenuLink>*/}
            {/*<MenuLink submenu>*/}
            {/*    <a className="nav-link dropdown-toggle" href=".#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">*/}
            {/*        Blog*/}
            {/*    </a>*/}
            {/*    <NavbarDropdown>*/}
            {/*        <MenuLink><NavLink to="/BlogListPage" className="nav-link">Blog List</NavLink></MenuLink>*/}
            {/*        <MenuLink><NavLink to="/BlogGridPage" className="nav-link">Blog Grid</NavLink></MenuLink>*/}
            {/*        <MenuLink><NavLink to="/BlogSinglePage" className="nav-link">Blog Single</NavLink></MenuLink>*/}
            {/*    </NavbarDropdown>*/}
            {/*</MenuLink>*/}
            <MenuLink href={'/Contact'} label={'Contact'}/>
        </React.Fragment>
    )
}

export default Menu;
