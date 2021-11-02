import React, {Component} from 'react';
import Reveal from 'react-reveal'
import PropTypes from "prop-types";
class HRServiceItem extends Component{
    render(){
        const { rclass, iclass, title, description, image, icon } = this.props.service;
        return(
            <Reveal bottom cascade>
                <div className={`p_service_item ${rclass}`}>
                    <div className={`icon ${iclass}`}>
                        {
                            image !== undefined
                                ? <img src={image.src} alt="" height={50}/>
                                : <i className={`ti-${icon}`}></i>
                        }
                    </div>
                    <h5 className="f_600 f_p t_color3">{title.toUpperCase()}</h5>
                    {/*<p className="f_400">{description}</p>*/}
                </div>
            </Reveal>
        )
    }
}
export default HRServiceItem;

HRServiceItem.defaultProps = {
    service: PropTypes.shape({
        rclass: 'pl_50 pr_20',
        iclass: 'icon_two',
        icon: 'layout-grid2',
        title: 'Grid and Guides',
        description: 'Bog cheeky bugger blow off only a quid grub he legged it porkies tosser young delinquent argy-bargy.'
    }),
}
