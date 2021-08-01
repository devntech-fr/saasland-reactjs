import React from 'react';
import CustomNavbar from '../sections/CustomNavbar';
import Breadcrumb from '../sections/Breadcrumb';
import Blogsingle from '../sections/Blog/Blogsingle'
import FooterTwo from '../sections/Footer/FooterTwo';
import FooterData from '../sections/Footer/FooterData';

const BlogSingle = () => {
    return(
        <div className="body_wrapper">
            <CustomNavbar slogo="sticky_logo" mClass="menu_four" nClass="w_menu ml-auto mr-auto"/>
            <Breadcrumb breadcrumbClass="breadcrumb_area" imgName="breadcrumb/banner_bg.png" Ptitle="Blog Single" Pdescription="Why I say old chap that is spiffing off his nut arse pear shaped plastered Jeffrey bodge barney some dodgy.!!"/>
            <Blogsingle/>
            <FooterTwo FooterData={FooterData}/>
        </div>
    )
}
export default BlogSingle;
