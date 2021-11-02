import React from "react";
import CustomNavbar from 'components/Navbar/CustomNavbar';
import FooterData from "sections/Footer/FooterData";
import FooterTwo from "sections/Footer/FooterTwo";

function CloudLayout({ children }) {
    return (
        <div className="body_wrapper">
            <CustomNavbar
                logoClass="sticky_logo"
                navbarClass="menu_four"
                navListClass="w_menu"
                btnClass="btn_get_radious menu_custfive"
                sticky
            />
            {children}
            <FooterTwo fClass="pt_150" FooterData={FooterData}/>
        </div>
    )
}

export default CloudLayout;
