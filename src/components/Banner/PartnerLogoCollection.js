import React from "react";
import Reveal from "react-reveal/Reveal";

function PartnerLogoCollection({ clientsLogo }) {

    const showCustomersLogo = () => {
        return clientsLogo.length > 0
            ? clientsLogo.map(item => {
                return (
                    <Reveal key={item.id} effect="fadeInLeft" duration={1500}>
                        <div className="p_logo_item">
                            <a href="/#"><img src={"/img/home3/"+item.image} alt=""/></a>
                        </div>
                    </Reveal>
                )
            }) : (
                <div className="p_logo_item">
                    <a href="/#"><img src={"/img/home3/logo_01.png"} alt=""/></a>
                </div>
            );
    }

    return (
        <div className="partner_logo">
            {showCustomersLogo()}
        </div>
    )
}

export default PartnerLogoCollection;
