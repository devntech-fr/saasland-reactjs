import React from "react";

function ErpButton({ href, target, label, iconClass }) {
    return (
        <a href={href} target={target} className="erp_btn_learn">{label}<i className={iconClass}></i></a>
    )
}

export default ErpButton;
