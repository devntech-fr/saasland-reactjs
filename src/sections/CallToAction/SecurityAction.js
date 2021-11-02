import React from 'react';
import { displayTitle } from "components/Content/RichContent";

const SecurityAction =({ title, image, backgroundImage, buttonLink })=>{
    return(
        <section className="security_action_area">
            <img className="p_absolute img_bg" src={backgroundImage} alt=""/>
            <div className="container">
                <div className="security_action_inner">
                    <div className="media">
                        <img src={image.src} alt={image.alt} />
                        <div className="media-body">
                            <h3 dangerouslySetInnerHTML={displayTitle(title)}></h3>
                        </div>
                    </div>
                    <a href={buttonLink.href} target={`_self`} className={`er_btn er_btn_two`}>{buttonLink.label}</a>
                </div>
            </div>
        </section>
    )
}
export default SecurityAction;

SecurityAction.defaultProps = {
    title: `<span>Want to see Sequr in action?</span>Hop on our daily webinar at 3:30 PM EST`,
    image: {
        src: `/img/home-security/shield.png`,
        alt: 'shield'
    },
    backgroundImage: `/img/home-security/sheld_bg.png`,
    buttonLink: {
        href: "/#",
        label: `Free quote`,
    }
}
