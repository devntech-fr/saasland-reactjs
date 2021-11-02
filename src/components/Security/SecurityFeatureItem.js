import React, {Component} from 'react';

class SecurityFeatureItem extends Component{
    render(){
        let{itemClass, image, title, p} = this.props;
        return(
            <div className="col-lg-6">
                <div className={`media h_security_item ${itemClass}`}>
                    <img src={image} alt=""/>
                    <div className="media-body">
                        <h4>{title}</h4>
                        <p>{p}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default SecurityFeatureItem;

SecurityFeatureItem.defaultProps = {
    itemClass:"pl_70",
    image:"/img/home-security/security_2.png",
    title:"Advanced mining Traffic",
    p:"My good sir car boot super old owt to do with me say no biggie cheeky bugger",
}
