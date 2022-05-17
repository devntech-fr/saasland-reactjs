import React, { useContext } from "react";
import CustomNavbar from "components/Navbar/CustomNavbar";
import FooterTwo from "sections/Footer/FooterTwo";
import FooterData from "sections/Footer/FooterData";
import { ThemeContext } from "themes/ThemeContext";
import Menu from "components/Header/Menu";
import Header from "components/Header/Header";
import 'assets/main.css';
import 'assets/responsive.css';

function Layout({ variant, children }) {
    const theme = useContext(ThemeContext)[variant];
    console.log('theme:',theme);
    return (
        <div className="body_wrapper">
            <Header sticky>
                <Menu />
            </Header>
            <CustomNavbar sticky>
                <Menu />
            </CustomNavbar>
            {children}
            <FooterTwo FooterData={FooterData}/>
        </div>
    )
}

export default Layout;
