import React from "react";
import NavbarLink from "components/Header/NavbarLink";
import MegaMenu from "components/Header/MegaMenu";
import NavbarDropdown from "components/Header/NavbarDropdown";

function Menu() {
    return (
        <React.Fragment>
            <NavbarLink submenu megaMenu href={'/#'} label={"Home"}>
                <MegaMenu/>
            </NavbarLink>
            <NavbarLink submenu href={'/#'} label={"Services"}>
                <NavbarDropdown>
                    <NavbarLink href={'/Services'} label={'Services'}/>
                    <NavbarLink href={'/ServicesDetails'} label={'Services Details'}/>
                </NavbarDropdown>
            </NavbarLink>
            {/*<NavbarLink submenu>*/}
            {/*    <Link to="/#" title="Pages" className="dropdown-toggle nav-link" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Pages</Link>*/}
            {/*    <NavbarDropdown>*/}
            {/*        <NavbarLink><NavLink exact title="About" className="nav-link" to='/About'>About</NavLink></NavbarLink>*/}
            {/*        <NavbarLink><NavLink exact title="Process" className="nav-link" to='/Process'>Process</NavLink></NavbarLink>*/}
            {/*        <NavbarLink><NavLink exact title="Team" className="nav-link" to='/Team'>Team</NavLink></NavbarLink>*/}
            {/*        <NavbarLink><NavLink exact title="SupportPrice" className="nav-link" to='/SupportPrice'>SupportPrice</NavLink></NavbarLink>*/}
            {/*        <NavbarLink><NavLink exact title="Faq" className="nav-link" to='/Faq'>Faq</NavLink></NavbarLink>*/}
            {/*        <NavbarLink><NavLink exact title="SignIn" className="nav-link" to='/SignIn'>Sign In</NavLink></NavbarLink>*/}
            {/*        <NavbarLink><NavLink exact title="SignUp" className="nav-link" to='/SignUp'>Sign Up</NavLink></NavbarLink>*/}
            {/*    </NavbarDropdown>*/}
            {/*</NavbarLink>*/}
            {/*<NavbarLink submenu>*/}
            {/*    <Link title="Pages" className="dropdown-toggle nav-link" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false" to="#">Portfolio</Link>*/}
            {/*    <NavbarDropdown>*/}
            {/*        <NavbarLink><NavLink title="Portfolio 2" className="nav-link" to='/Portfolio-2col'>Portfolio 2col</NavLink></NavbarLink>*/}
            {/*        <NavbarLink><NavLink title="Portfolio 3" className="nav-link" to='/Portfolio-3col'>Portfolio 3col</NavLink></NavbarLink>*/}
            {/*        <NavbarLink><NavLink title="Portfolio Fullwidth" className="nav-link" to='/Portfolio-fullwidth-4col'>Portfolio fullwidth</NavLink></NavbarLink>*/}
            {/*        <NavbarLink><NavLink title="PortfolioSingle" className="nav-link" to='/PortfolioSingle'>Portfolio Single</NavLink></NavbarLink>*/}
            {/*    </NavbarDropdown>*/}
            {/*</NavbarLink>*/}
            {/*<NavbarLink submenu>*/}
            {/*    <a className="nav-link dropdown-toggle" href=".#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">*/}
            {/*        Blog*/}
            {/*    </a>*/}
            {/*    <NavbarDropdown>*/}
            {/*        <NavbarLink><NavLink to="/BlogListPage" className="nav-link">Blog List</NavLink></NavbarLink>*/}
            {/*        <NavbarLink><NavLink to="/BlogGridPage" className="nav-link">Blog Grid</NavLink></NavbarLink>*/}
            {/*        <NavbarLink><NavLink to="/BlogSinglePage" className="nav-link">Blog Single</NavLink></NavbarLink>*/}
            {/*    </NavbarDropdown>*/}
            {/*</NavbarLink>*/}
            <NavbarLink href={'/Contact'} label={'Contact'}/>
        </React.Fragment>
    )
}

export default Menu;
