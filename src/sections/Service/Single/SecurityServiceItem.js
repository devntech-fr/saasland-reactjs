import React, {Component} from 'react';
import ServiceListItem from "components/Security/ServiceListItem";

class SecurityServiceItem extends Component {
    render(){
        let{image, reverse, title, p, children}= this.props;
        return(
            <div className={`row h_analytices_features_item align-items-center ${reverse ? `flex-row-reverse` : ''}`}>
                <div className="col-lg-6">
                    <div className="h_security_img text-center">
                        <img className="wow fadeInUp" src={image} alt=""/>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="h_analytices_content">
                        <h2 className="wow fadeInUp" data-wow-delay="0.1s">{title}</h2>
                        <p className="wow fadeInUp" data-wow-delay="0.3s">{p}</p>
                        {children}
                    </div>
                </div>
            </div>
        )
    }
}

export default SecurityServiceItem;

SecurityServiceItem.defaultProps = {
    title:"Measure product usage and custom KPIs for every customer",
    image:"/img/home-security/about_img_2.jpg",
    reverse: false,
    p:"Why I say old chap that is spiffing cobblers it's your round, haggle bits and bobs golly gosh up the duff mush well car boot bevvy.",
}
