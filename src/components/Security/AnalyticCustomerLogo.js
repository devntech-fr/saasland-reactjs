import React from "react";

function AnalyticCustomerLogo({ href, image }) {
    return (
        <a href={href} className="analytices_logo wow fadeInUp"><img src={image.src} alt={image.alt}/></a>
    )
}

export default AnalyticCustomerLogo;

AnalyticCustomerLogo.defaultProps = {
    href: "/#",
    image: {
        src: '/img/home-software/logo_01.png',
        alt: 'FoxHub'
    }
}
