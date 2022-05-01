import React from 'react';

function ErpServiceItem({ service, key }) {
    const {title, p, icon, itemClass} = service;
    return(
        <div className="col-lg-4 col-sm-6" key={key}>
            <div className={`erp_service_item ${itemClass}`}>
                <img src={"/img/erp-home/" + icon} alt=""/>
                <a href="/#"><h3 className="h_head">{title}</h3></a>
                <p>{p}</p>
            </div>
        </div>
    )
}

export default ErpServiceItem;
