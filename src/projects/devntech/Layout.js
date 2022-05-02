import React from "react";
import Header from "components/Header/Header";
import Footer from "sections/Footer/Footer";

function Layout({ children }) {
    return (
        <div className="body_wrapper">
            <Header
                sticky={true}
                variant={'primary'}
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
            <Footer
                copywrite={`© Dev'nTech SASU 2021 All rights reserved.`}
            />
        </div>
    )
}

export default Layout;
