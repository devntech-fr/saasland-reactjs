import React from "react";
import Breadcrumb from "sections/Breadcrumb/Breadcrumb";
import Layout from "projects/devntech/Layout";
import Contact from "sections/Contact/Contact";

function ContactPage() {
    return (
        <Layout>
            <Breadcrumb
                breadcrumbClass="breadcrumb_area"
                imgName="breadcrumb/banner_bg.png"
                title="Nous contacter"
                description="Why I say old chap that is spiffing off his nut arse pear shaped plastered Jeffrey bodge barney some dodgy.!!"
            />
            <Contact/>
        </Layout>
    )
}

export default ContactPage;
