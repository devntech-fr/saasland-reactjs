import React from "react";
import Breadcrumb from "sections/Breadcrumb/Breadcrumb";
import Layout from "projects/devntech/Layout";

function EstimatePage() {
    return (
        <Layout>
            <Breadcrumb breadcrumbClass="breadcrumb_area" imgName="breadcrumb/banner_bg.png" title="Demande de devis" description="Afin d'estimer votre projet au plus juste, nous avons besoins de quelques informations."/>
        </Layout>
    )
}

export default EstimatePage;
