import React from "react";
import PropTypes from "prop-types";
import AboutButton from "./AboutButton";

function AboutContent({ title, p, buttonLink}) {
    return (
        <div className="about_content mb_30">
            <h2 className="f_size_30 f_700 l_height45 mb_20">We craft marketing & digital products that grow businesses.</h2>
            <p className="f_size_15 f_400 mb_40">Why I say old chap that is spiffing bodge, blag pardon me buggered mufty Oxford butty bubble and squeak wind up, brown bread the full monty bloke ruddy cras tickety-boo squiffy.!</p>
            <a href=".#" className="about_btn">Meet Your Team</a>
        </div>
    )
}

AboutContent.propTypes = {
    title: PropTypes.string,
    p: PropTypes.string,
    buttonLink: PropTypes.instanceOf(AboutButton)
}

export default AboutContent;
