import React from "react";
import PropTypes from "prop-types";
import Image from 'types/Image';

function BannerImage({ image }) {
    return (
        <img className="prototype_img wow fadeInRight" data-wow-delay="0.3s" src={image.src} alt={image.alt} />
    )
}

export default BannerImage;

BannerImage.propTypes = {
    image: PropTypes.shape(Image),
}
