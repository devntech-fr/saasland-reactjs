import React, {Component} from 'react';
import PropTypes from "prop-types";

class ErpIconItem extends Component {
    render(){
        let {iconColor, iconName, erpText} = this.props;
        return(
            <div className="media erp_item">
                <div className={`icon ${iconColor}`}>
                    <i className={`${iconName}`}></i>
                </div>
                <div className="media-body">
                    <h5>{erpText}</h5>
                </div>
            </div>
        )
    }
}
export default ErpIconItem;

ErpIconItem.propTypes = {
    iconName: PropTypes.string.isRequired,
    erpText: PropTypes.string.isRequired,
    iconColor: PropTypes.string,
}
