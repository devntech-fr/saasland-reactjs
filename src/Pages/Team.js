import React from 'react';
import CustomNavbar from '../sections/CustomNavbar';
import Breadcrumb from '../sections/Breadcrumb';
import Teams from '../sections/Team/Team';
import FooterTwo from '../sections/Footer/FooterTwo';
import FooterData from '../sections/Footer/FooterData';
const Team =()=>{
    return(
        <div className="body_wrapper">
            <CustomNavbar slogo="sticky_logo" mClass="menu_four" nClass="w_menu ml-auto mr-auto"/>
            <Breadcrumb breadcrumbClass="breadcrumb_area breadcrumb_area_three" imgName="Img-05.jpg" Ptitle="Our Team" Pdescription="Why I say old chap that is spiffing off his nut arse pear shaped plastered Jeffrey bodge barney some dodgy.!!"/>
            <Teams/>
            <FooterTwo FooterData={FooterData}/>
        </div>
    )
}
export default Team;
