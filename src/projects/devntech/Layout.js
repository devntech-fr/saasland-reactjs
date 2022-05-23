import React from "react";
import Header from "components/Header/Header";
import Footer from "sections/Footer/Footer";
import "assets/themify-icon/themify-icons.css";
import "assets/simple-line-icon/simple-line-icons.css";
import "assets/font-awesome/css/all.css";
import "assets/elagent/style.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "assets/animate.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "assets/main.css";
import "assets/responsive.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "popper.js";

function Layout({ children }) {
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
                        isActive: false,
                        submenu: [
                            {
                                label: 'Développement API',
                                href: '/developpement-api',
                                isActive: false
                            },
                            {
                                label: 'Développement application web',
                                href: '/developpement-application-web',
                                isActive: false
                            },
                            {
                                label: 'Développement application mobile',
                                href: '/developpement-application-mobile',
                                isActive: false
                            },
                            {
                                label: 'Développement application web progressive',
                                href: '/developpement-application-web-progressive',
                                isActive: false
                            },
                            {
                                label: 'Intégration API tierce',
                                href: '/integration-api-tierce',
                                isActive: false
                            },
                        ]
                    },
                    {
                        label: 'Produits',
                        href: '/produits',
                        isActive: false,
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
                        label: 'Blog',
                        href: '/blog',
                        isActive: false,
                        submenu: [
                            {
                                label: 'Ce que vous devez savoir pour créer votre site vitrine',
                                href: '/conseils-pour-creer-son-site-vitrine',
                                isActive: false
                            },
                            {
                                label: 'Les avantages et inconvénients du headless',
                                href: '/avantages-et-inconvenients-headless',
                                isActive: false
                            },
                        ]
                    },
                    {
                        label: `Réalisations`,
                        href: '/realisations',
                        isActive: false
                    },
                ]}
                navbarButton={{
                    href: '/demander-un-devis',
                    label: 'Demander un devis'
                }}
            />
            {children}
            <Footer
                copywrite={`© Dev'nTech SASU 2021 All rights reserved.`}
            />
        </div>
    )
}

export default Layout;
