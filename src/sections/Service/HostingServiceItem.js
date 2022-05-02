import React from 'react';

function HostingServiceItem({title, description, icon}) {
    const showIcon = () => {
        if (icon.match(/\.jp(e)g|png$/)) {
            return (
                <img src={"/img/hosting/" + icon} alt={title} title={title}/>
            )
        }
        if (icon.match(/^fa\-|ti\-/)) {
            return (
                <i className={icon}></i>
            )
        }
    }
    return(
        <div className="hosting_service_item">
            <div className="icon">
                {showIcon()}
            </div>
            <a href="/#"><h4 className="h_head">{title}</h4></a>
            <p>{description}</p>
        </div>
    )
}
export default HostingServiceItem;
