import React from "react";
import Breadcrumb from "sections/Breadcrumb/Breadcrumb";
import Layout from "projects/devntech/Layout";
import ChatGetStarted from "sections/CallToAction/ChatGetStarted";

function PortfolioSingle() {
    return (
        <Layout>
            <Breadcrumb breadcrumbClass="breadcrumb_area" imgName="breadcrumb/banner_bg.png" Ptitle="Portfolio Details" Pdescription="Why I say old chap that is spiffing off his nut arse pear shaped plastered Jeffrey bodge barney some dodgy.!!"/>
            <PortfolioSingle/>
            <ChatGetStarted
                title={"Envie de démarrer votre projet avec nous ?"}
                p={"Contactez-nous via le formulaire de contact, nous nous ferons un plaisir de répondre à vos questions."}
                button={{
                    href: '/#',
                    label: "Nous contacter"
                }}
            />
        </Layout>
    )
}

export default PortfolioSingle;
