import React from 'react';
import CustomNavbar from '../sections/CustomNavbar';
import Breadcrumb from '../sections/Breadcrumb';
import BlogGrid from '../sections/Blog/BlogGrid';
import FooterTwo from '../sections/Footer/FooterTwo';
import FooterData from '../sections/Footer/FooterData';

const BlogGridPage = () => {
    return(
        <div className="body_wrapper">
            <CustomNavbar slogo="sticky_logo" mClass="menu_four" nClass="w_menu ml-auto mr-auto"/>
            <Breadcrumb breadcrumbClass="breadcrumb_area" imgName="breadcrumb/banner_bg.png" Ptitle="Blog Grid" Pdescription="Why I say old chap that is spiffing off his nut arse pear shaped plastered Jeffrey bodge barney some dodgy.!!"/>
            <BlogGrid/>
            <FooterTwo FooterData={FooterData}/>
        </div>
    )
}
export default BlogGridPage;
