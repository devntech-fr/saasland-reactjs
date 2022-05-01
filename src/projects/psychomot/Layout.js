import React, { useEffect } from "react";
import {Link, useRouteMatch} from "react-router-dom";
import CustomNavbar from "components/Navbar/CustomNavbar";
import FooterData from "sections/Footer/FooterData";
import Footer from "sections/Footer/Footer";
import MainMenu from "projects/psychomot/MainMenu";
import Reveal from "react-reveal/Reveal";
import AboutWidget from "components/Footer/AboutWidget";
import Preloader from "components/Preloader";

import "bootstrap/dist/css/bootstrap.min.css";
import "assets/themify-icon/themify-icons.css";
import "assets/simple-line-icon/simple-line-icons.css";
import "assets/font-awesome/css/all.css";
import "assets/elagent/style.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "assets/animate.css";
import "assets/main.css";
import "assets/responsive.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "popper.js";
import Header from "components/Header/Header";

function Layout({ variant, preloader, children }) {
    const routeMatch = useRouteMatch();
    console.log('routeMatch',routeMatch);
    return (
        <>
            {/*<Preloader/>*/}
            <div className="body_wrapper">
                <Header 
                    sticky 
                    variant={variant}
                    navigationLinks={[
                        {
                            id: 1,
                            label: "Accueil",
                            href: '/',
                        },
                        {
                            id: 2,
                            label: "La psychomotricité",
                            href: '/la-psychomotricite',
                        },
                        {
                            id: 3,
                            label: "Le cabinet",
                            href: '/le-cabinet',
                        },
                        {
                            id: 4,
                            label: "Me contacter",
                            href: '/contact',
                        },
                    ]}
                />
                {children}
                <Footer FooterData={FooterData}>
                    {
                        FooterData.CompanyWidget.map(widget=>{
                            return(
                                <Reveal effect="fadeInLeft" duration={500} key={1}>
                                    <div className="col-lg-3 col-md-6" >
                                        <div className="f_widget company_widget wow fadeInLeft" data-wow-delay="0.2s">
                                            <h3 className="f-title f_600 t_color f_size_18">{widget.title}</h3>
                                            <p>{widget.description}</p>
                                        </div>
                                    </div>
                                </Reveal>
                            )
                        })
                    }
                    {
                        FooterData.AboutWidget.map(widget=>{
                            return(
                                <Reveal effect="fadeInLeft" duration={500} key={widget.id}>
                                    <div className="col-lg-3 col-md-6">
                                        <AboutWidget
                                            title={widget.title}
                                            links={widget.menuItems}
                                        />
                                    </div>
                                </Reveal>
                            )
                        })
                    }
                    {
                        FooterData.SocialLinks.map(widget=>{
                            return(
                                <Reveal effect="fadeInLeft" duration={500} key={widget.id}>
                                    <div className="col-lg-3 col-md-6">
                                        <div className="f_widget social-widget pl_70 wow fadeInLeft" data-wow-delay="0.4s">
                                            <h3 className="f-title f_600 t_color f_size_18">{widget.title}</h3>
                                            <div className="f_social_icon">
                                                {
                                                    widget.menuItems.map(item =>{
                                                        return(
                                                            <Link to="/" key={item.id}><i className={item.icon}></i></Link>
                                                        )
                                                    })
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </Reveal>
                            )
                        })
                    }
                </Footer>
            </div>
        </>
    )
}

export default Layout;
