import React from "react";
import Plx from "react-plx";

function AppFeaturedItem({ plxClass, plxData, iconClass, label}) {
    return (
        <Plx className={plxClass} parallax={plxData}>
            <i className={`${iconClass} f_size_40 w_color`}></i>
            <h6 className="f_p f_400 f_size_16 w_color l_height45">{label}</h6>
        </Plx>
    )
}

export default AppFeaturedItem
