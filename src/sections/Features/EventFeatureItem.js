import React, { Component } from "react";

class EventFeatureItem extends Component {
    render(){
        const { image, title, p, iconButtonLink } = this.props;
        return(
            <div className="col-lg-4 col-sm-6">
                <div className="event_features_item text-center wow fadeInUp">
                    {
                        image && <img src={"/img/home-event/" + image.src} alt={image.alt} />
                    }
                    <a href="/#"><h5>{title}</h5></a>
                    <p>{p}</p>
                    {
                        iconButtonLink && <a href={iconButtonLink.href} className="e_features_btn">{iconButtonLink.label} <i className={iconButtonLink.iconClass}></i></a>
                    }
                </div>
            </div>
        )
    }
}

export default EventFeatureItem;
