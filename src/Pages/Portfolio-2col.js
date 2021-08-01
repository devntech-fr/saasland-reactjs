import React from 'react';
import CustomNavbar from '../sections/CustomNavbar';
import Breadcrumb from '../sections/Breadcrumb';
import Portfolios from '../sections/Portfolios/Portfolio2grid';
import FooterTwo from '../sections/Footer/FooterTwo';
import FooterData from '../sections/Footer/FooterData';

const Portfolio2col = () => {
    return(
        <div className="body_wrapper">
            <CustomNavbar slogo="sticky_logo" mClass="menu_four" nClass="w_menu ml-auto mr-auto"/>
            <Breadcrumb breadcrumbClass="breadcrumb_area" imgName="breadcrumb/banner_bg.png" Ptitle="Portfolio grid 2 column" Pdescription="Why I say old chap that is spiffing off his nut arse pear shaped plastered Jeffrey bodge barney some dodgy.!!"/>
            <Portfolios/>
            <FooterTwo FooterData={FooterData}/>
        </div>
    )
}
export default Portfolio2col;
