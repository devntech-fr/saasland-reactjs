import React from "react";

function BannerButtons({ children }) {
    return (
        <div className="action_btn d-flex align-items-center mt_60">
            {children}
        </div>
    )
}

export default BannerButtons;
