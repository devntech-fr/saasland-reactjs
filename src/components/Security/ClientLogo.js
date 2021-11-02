import React from "react";
import Reveal from "react-reveal/Reveal";

function ClientLogo({ href, image }) {
    return (
            <div className="logo_item">
                <a href={href} target={`_blank`}><img src={"/img/home6/" + image} alt={"client logo"} /></a>
            </div>
    )
}

export default ClientLogo;
