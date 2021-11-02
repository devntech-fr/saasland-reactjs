import PropTypes from "prop-types";

var SliderSettings = {
    dots: true,
    infinite: true,
    speed: 1500,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
}
SliderSettings.propTypes = {
    dots: PropTypes.bool,
    infinite: PropTypes.bool,
    speed: PropTypes.number,
    arrows: PropTypes.bool,
    autoplay: PropTypes.bool,
    autoplaySpeed: PropTypes.number,
    slidesToShow: PropTypes.number,
    slidesToScroll: PropTypes.number,
}

export default SliderSettings;
