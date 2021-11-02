import React from "react";
import "admin/css/simplebar.css";
import "admin/css/feather.css";
import "admin/css/daterangepicker.css";
import "admin/css/app-dark.css";

function AuthLayout({ children }) {
    return (
        <div className="wrapper vh-100">
            <div className="row align-items-center h-100">
                {children}
            </div>
        </div>
    )
}

export default AuthLayout;
