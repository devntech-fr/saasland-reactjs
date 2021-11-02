import React, {Component} from 'react';

class HostingFeatureItem extends Component {
    render(){
        let { icon, text, description }= this.props;
        return(
            <div className="media h_features_item">
                <img src={"/img/hosting/" + icon} alt=""/>
                <div className="media-body">
                    <h4 className="h_head">{text}</h4>
                    <p>{description}</p>
                </div>
            </div>
        )
    }
}

export default HostingFeatureItem;
