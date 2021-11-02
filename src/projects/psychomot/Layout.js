import React from "react";
import {Link, useRouteMatch} from "react-router-dom";
import CustomNavbar from "components/Navbar/CustomNavbar";
import FooterData from "sections/Footer/FooterData";
import Footer from "sections/Footer/Footer";
import MainMenu from "projects/psychomot/MainMenu";
import Reveal from "react-reveal/Reveal";
import AboutWidget from "components/Footer/AboutWidget";
import Header from "components/Header/Header";

function Layout({ variant, children }) {
    const routeMatch = useRouteMatch();
    console.log('routeMatch',routeMatch);
    return (
        <div className="body_wrapper">
            <CustomNavbar sticky variant={variant}>
                <MainMenu />
            </CustomNavbar>
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
                                        <form action="#" className="f_subscribe_two mailchimp" method="post">
                                            <input type="text" name="EMAIL" className="form-control memail" placeholder="Email"/>
                                            <button className="btn btn_get btn_get_two" type="submit">Subscribe</button>
                                            <p className="mchimp-errmessage" style={{display: "none"}}></p>
                                            <p className="mchimp-sucmessage" style={{display: "none"}}></p>
                                        </form>
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
    )
}

export default Layout;
