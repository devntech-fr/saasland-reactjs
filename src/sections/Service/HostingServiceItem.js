import React from 'react';

function HostingServiceItem({title, description, icon}) {
    return(
        <div className="hosting_service_item">
            <div className="icon">
                <img src={"/img/hosting/" + icon} alt=""/>
            </div>
            <a href="/#"><h4 className="h_head">{title}</h4></a>
            <p>{description}</p>
        </div>
    )
}
export default HostingServiceItem;
