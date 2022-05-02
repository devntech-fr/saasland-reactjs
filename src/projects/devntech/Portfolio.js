import React from "react";
import Breadcrumb from "sections/Breadcrumb/Breadcrumb";
import Layout from "projects/devntech/Layout";
import Portfolio2Grid from "sections/Portfolio/Portfolio2Grid";
import ChatGetStarted from "sections/CallToAction/ChatGetStarted";

function PortfolioPage() {
    return (
        <Layout>
            <Breadcrumb breadcrumbClass="breadcrumb_area" imgName="breadcrumb/banner_bg.png" title="Nos réalisations" description="Why I say old chap that is spiffing off his nut arse pear shaped plastered Jeffrey bodge barney some dodgy.!!"/>
            <Portfolio2Grid
                filters={[
                    {
                        name: 'api',
                        label: 'API'
                    },
                    {
                        name: 'webapp',
                        label: 'WebApp'
                    },
                    {
                        name: 'pwa',
                        label: 'PWA'
                    },
                    {
                        name: 'vitrine',
                        label: 'Vitrine'
                    }
                ]}
                posts={[
                    {
                        colClass: "col-lg-6 vitrine",
                        image: "/2-columns/grid1.jpg",
                        title: "Souffle Vital",
                        tags: [
                            "Vitrine",
                            "Massothérapie"
                        ]
                    },
                    {
                        colClass: "col-lg-6 webapp",
                        image: "/2-columns/grid2.jpg",
                        title: "Carte Grise Eirl",
                        tags: [
                            "WebApp",
                            "Symfony"
                        ]
                    },
                    {
                        colClass: "col-lg-6 pwa",
                        image: "/2-columns/grid2.jpg",
                        title: "Guide Audio Grottes du Cerdon",
                        tags: [
                            "PWA",
                            "React.JS"
                        ]
                    },
                ]}
            />
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

export default PortfolioPage;
