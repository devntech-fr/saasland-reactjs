import React, {Component} from 'react';

class SecurityPowerFeatureItem extends Component{
    render(){
        const { image, title } = this.props;
        return(
            <div className="s_features_item wow fadeInUp">
                <div className="item">
                    <img src={image} alt={title}/>
                    <h6>{title}</h6>
                </div>
            </div>
        )
    }
}

export default SecurityPowerFeatureItem;

SecurityPowerFeatureItem.defaultProps = {
    image:"/img/home-security/shield.png",
    title:"Speedup"
}
