import React from "react";
import "admin/css/simplebar.css";
import "admin/css/feather.css";
import "admin/css/daterangepicker.css";
import "admin/css/app-dark.css";

function MainLayout({ children }) {
    return (
        <div className="wrapper">
            <main role="main" className="main-content">
                <div className="container-fluid">{children}</div>
            </main>
        </div>
    )
}

export default MainLayout;
