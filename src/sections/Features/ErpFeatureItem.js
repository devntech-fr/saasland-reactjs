import React, {Component} from 'react';
import ErpIconItem from './ErpIconitem';
import ErpButton from "components/Buttons/ErpButton";
import PropTypes from "prop-types";
import Image from "types/Image";
import CallToActionButton from "types/CallToActionButton";

class ErpFeatureItem extends Component {
    render(){
        let {reverse, roundColor, image, title, p, buttonLink } = this.props;
        const rowClass = reverse ? ` flex-row-reverse` : '';
        return(
            <div className={`row erp_item_features align-items-center${rowClass}`}>
                <div className="col-lg-6">
                    <div className="erp_features_img_two">
                        {roundColor && <div className={`img_icon ${roundColor}`}><span className="pluse_1"></span><span
                            className="pluse_2"></span><i className="icon_lightbulb_alt"></i></div>}
                        {
                            image
                            ? <img src={image.src} alt={image.alt} />
                                : <React.Fragment></React.Fragment>
                        }
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="erp_content_two">
                        <div className="hosting_title erp_title">
                            <h2>{title}</h2>
                            <p>{p}</p>
                        </div>
                        <ErpIconItem iconName="icon_menu-square_alt2" erpText="Everybody Gets a Dashboard"/>
                        <ErpIconItem iconColor="green" iconName="icon_ribbon_alt" erpText="Everybody Gets a Dashboard"/>
                        {
                            buttonLink
                                ? <ErpButton
                                    href={`/#`}
                                    target={`_self`}
                                    label={`Learn more`}
                                    iconClass={`arrow_right`}
                                />
                                : <React.Fragment></React.Fragment>
                        }
                    </div>
                </div>
            </div>
        )
    }
}
export default ErpFeatureItem;

ErpFeatureItem.propTypes = {
    title: PropTypes.string.isRequired,
    p: PropTypes.string.isRequired,
    reverse: PropTypes.bool,
    roundColor: PropTypes.string,
    image: PropTypes.shape(Image),
    buttonLink: PropTypes.shape(CallToActionButton)
}
