import React from "react";
import Layout from "projects/devntech/Layout";
import Breadcrumb from "sections/Breadcrumb/Breadcrumb";
import ChatFeatures from "sections/Features/ChatFeatures";

function ServicesPage() {
    return (
        <Layout>
            <Breadcrumb breadcrumbClass="breadcrumb_area" imgName="breadcrumb/banner_bg.png" title="Tous nos services" description="Why I say old chap that is spiffing off his nut arse pear shaped plastered Jeffrey bodge barney some dodgy.!!"/>
            <ChatFeatures
                reverse={true}
                pClass="pr_70"
                col1="col-lg-6 offset-lg-1"
                col2="col-lg-5"
                icon="chat_icon.png"
                img1="dot.png"
                img2="chat_02.png"
                img3="chat_01.png"
                boldtitle="API & backend"
                title="développement – fast"
                p="Décuplez votre potentiel d'intéraction avec les API REST synchrones ou asynchrones."
                url="#"
            />
            <ChatFeatures
                pClass="pr_70"
                col1="col-lg-6 offset-lg-1"
                col2="col-lg-5"
                icon="chat_icon.png"
                img1="dot.png"
                img2="chat_02.png"
                img3="chat_01.png"
                boldtitle="WebApp & PWA"
                title="développement – fast"
                p="Single Page Application ou application multiplateforme."
                url="#"
            />
            <ChatFeatures
                reverse={true}
                pClass="pr_70"
                col1="col-lg-6 offset-lg-1"
                col2="col-lg-5"
                icon="chat_icon.png"
                img1="dot.png"
                img2="chat_02.png"
                img3="chat_01.png"
                boldtitle="Maintenance et suivi"
                title="de vos API et applications"
                p="Suivi santé, mises à jour de sécurité et des dépendances, backups réguliers."
                url="#"
            />
            <ChatFeatures
                pClass="pr_70"
                col1="col-lg-6 offset-lg-1"
                col2="col-lg-5"
                icon="chat_icon.png"
                img1="dot.png"
                img2="chat_02.png"
                img3="chat_01.png"
                boldtitle="Site vitrine WordPress"
                title="avec Elementor"
                p="Création de votre site, intégration de votre contenu, déploiement sur serveur et optimisation du site pour le référencement."
                url="#"
            />
        </Layout>
    )
}

export default ServicesPage;
