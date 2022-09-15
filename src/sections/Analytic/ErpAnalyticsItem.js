import React, {Component} from 'react';
import PropTypes from "prop-types";
import Image from "types/Image";

class ErpAnalyticsItem extends Component {
    render(){
        let {image, text, cols} = this.props;
        return(
            <div className={`col-md-${cols}`}>
                <div className="erp_analytics_item text-center">
                    <img src={image.src} alt={image.alt} />
                    <p>{text}</p>
                </div>
            </div>
        )
    }
}
export default ErpAnalyticsItem;

ErpAnalyticsItem.propTypes = {
    image: PropTypes.shape(Image).isRequired,
    text: PropTypes.string.isRequired
}

ErpAnalyticsItem.defaultProps = {
    image: {
        src: '/img/erp-home/settings1.png',
        alt: 'Erp Analytic'
    },
    text: 'Quick setup in five simple steps.'
}
