import React from 'react';
import CustomNavbar from 'components/Navbar/CustomNavbar';
import Breadcrumb from 'sections/Breadcrumb/Breadcrumb';
import SignInForm from 'sections/Form/SignInForm';
import FooterTwo from 'sections/Footer/FooterTwo';
import FooterData from 'sections/Footer/FooterData';

const SignIn = () => {
    return(
        <div className="body_wrapper">
            <CustomNavbar slogo="sticky_logo" mClass="menu_four" nClass="w_menu ml-auto mr-auto"/>
            <Breadcrumb breadcrumbClass="breadcrumb_area" imgName="breadcrumb/banner_bg.png" Ptitle="Sign In" Pdescription="Why I say old chap that is spiffing off his nut arse pear shaped plastered Jeffrey bodge barney some dodgy.!!"/>
            <SignInForm/>
            <FooterTwo FooterData={FooterData}/>
        </div>
    )
}
export default SignIn;
