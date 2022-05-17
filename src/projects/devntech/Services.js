import React from "react";
import Layout from "projects/devntech/Layout";
import Breadcrumb from "sections/Breadcrumb/Breadcrumb";
import ChatFeatures from "sections/Features/ChatFeatures";

function ServicesPage() {
    return (
        <Layout>
            <Breadcrumb
                title="Tous nos services"
                description="Notre objectif est de rendre votre solution autonome et toujours prête à évoluer."
            />
            <ChatFeatures
                reverse={true}
                pClass="pr_70"
                col1="col-lg-6 offset-lg-1"
                col2="col-lg-5"
                icon="/img/services/rest_api.png"
                parallaxImages={[
                    {
                        src: '/img/home-chat/dot.png',
                        classNames: 'p_absolute dot_bg',
                        alt: 'dots',
                        parallax: {}
                    },
                    // {
                    //     src: '/img/home-chat/chat_02.png',
                    //     classNames: 'chat_one',
                    //     alt: 'api rest',
                    //     parallax: {
                    //         x: 0,
                    //         y: 80
                    //     }
                    // },
                    {
                        src: '/img/services/swagger_api_doc.png',
                        classNames: 'p_absolute chat_two',
                        alt: 'rest_api',
                        parallax: {
                            x: 0,
                            y: 80
                        }
                    },
                ]}
                boldtitle="API & backend"
                title="développement"
                p="Décuplez votre potentiel d'intéraction avec les API REST synchrones ou asynchrones."
                url="#"
            />
            <ChatFeatures
                pClass="pr_70"
                col1="col-lg-6 offset-lg-1"
                col2="col-lg-5"
                icon="/img/services/app_mobile.png"
                parallaxImages={[
                    {
                        src: '/img/services/webapp.webp',
                        classNames: 'p_absolute dot_bg',
                        alt: 'dots',
                        parallax: {}
                    },
                    // {
                    //     src: '/img/services/webapp.webp',
                    //     classNames: 'chat_one',
                    //     alt: 'api rest',
                    //     parallax: {
                    //         x: -50,
                    //         y: 0
                    //     }
                    // },
                    // {
                    //     src: '/img/home-chat/chat_01.png',
                    //     classNames: 'p_absolute chat_two',
                    //     alt: 'rest_api',
                    //     parallax: {
                    //         x: 0,
                    //         y: -80
                    //     }
                    // },
                ]}
                boldtitle="Applications web & mobile"
                title="développement"
                p="Single Page Application ou application multiplateforme."
                url="#"
            />
            <ChatFeatures
                reverse={true}
                pClass="pr_70"
                col1="col-lg-6 offset-lg-1"
                col2="col-lg-5"
                icon="/img/services/help.png"
                parallaxImages={[
                    {
                        src: '/img/home-chat/dot.png',
                        classNames: 'p_absolute dot_bg',
                        alt: 'dots',
                        parallax: {}
                    },
                    {
                        src: '/img/home-chat/chat_02.png',
                        classNames: 'chat_one',
                        alt: 'api rest',
                        parallax: {
                            x: 0,
                            y: 80
                        }
                    },
                    {
                        src: '/img/home-chat/chat_01.png',
                        classNames: 'p_absolute chat_two',
                        alt: 'rest_api',
                        parallax: {
                            x: 0,
                            y: -80
                        }
                    },
                ]}
                boldtitle="Maintenance et suivi"
                title="maintenance et suivi"
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
