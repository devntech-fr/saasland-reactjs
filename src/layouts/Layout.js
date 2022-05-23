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
            <Header
                sticky={true}
                navigationLinks={[
                    {
                        label: 'Accueil',
                        href: '/',
                        isActive: false
                    },
                    {
                        label: 'Services',
                        href: '/services',
                        isActive: false
                    },
                    {
                        label: 'Produits',
                        href: '/produits',
                        isActive: false,
                        hasSubmenu: true,
                        submenu: [
                            {
                                label: 'Applications',
                                href: '/applications',
                                isActive: false
                            },
                            {
                                label: 'Intégrations',
                                href: '/integrations',
                                isActive: false
                            },
                        ]
                    },
                    {
                        label: `Réalisations`,
                        href: '/realisations',
                        isActive: false
                    },
                    {
                        label: `Contact`,
                        href: '/contact',
                        isActive: false
                    },
                ]}
            />
            {children}
            <FooterTwo FooterData={FooterData}/>
        </div>
    )
}

export default Layout;
