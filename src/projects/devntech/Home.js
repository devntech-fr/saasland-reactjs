import React from 'react';
import Layout from "projects/devntech/Layout";
import DesignBanner from 'sections/Banner/DesignBanner';
import SeoFact from "sections/Fact/SeoFact";
import SeoAction from "sections/CallToAction/SeoAction";
import CaseStudies from "sections/CaseStudy/CaseStudies";
import SeoService from "sections/Service/SeoService";
import ChatIntegration from "sections/Integrations/ChatIntegration";

function DevntechHome() {
    return (
        <Layout>
            <DesignBanner
                title={`Chef de projet multimédia, je cherche des technologies open-source et j'aide les entrepreneurs, les professions libérales et les startup crypto à optimiser leur solution technique pour l'évolution de leur business.`}
                p={`Développement d'applications web et mobile sur mesure pour les PME, les commerces de proximité, les artisans et les professions libérales.`}
                buttons={[
                    {
                        href: "/#services",
                        classNames: "seo_btn seo_btn_one btn_hover wow fadeInLeft",
                        label: "Services"
                    },
                    {
                        href: "/#me-contacter",
                        classNames: "seo_btn seo_btn_two btn_hover wow fadeInRight",
                        label: "Me contacter"
                    },
                ]}
                image={{
                    src: '/img/seo/image.png',
                    alt: 'SEO hero image',
                    title: 'Seo hero image'
                }}
                bubbles={false}
            />
            <SeoService
                title={`Services populaires`}
                p={`Chaque projet client est unique, c'est pourquoi nous accordons une grande importance à notre premier échange pour adapter nos services à vos besoins.`}
                services={[
                    {
                        id: 1,
                        title: 'Site vitrine WordPress',
                        slug: 'site-vitrine-wordpress',
                        description: 'Mesurez et optimisez votre présence sur le web à chaque instant, restez connecté à votre communauté, publiez régulièrement.',
                        icon: '/img/seo/icon1.png'
                    },
                    {
                        id: 2,
                        title: 'Site e-commerce Sylius',
                        slug: 'site-e-commerce-sylius',
                        description: 'Nous développons pour vous une application multiplateforme avec les dernières technologies du marché.',
                        icon: '/img/seo/icon2.png'
                    },
                    {
                        id: 3,
                        title: 'Référencement SEO',
                        slug: 'referencement-naturel-seo',
                        description: 'Hunky dory barney fanny around up the duff no biggie loo cup of tea jolly good ruddy say arse.',
                        icon: '/img/seo/icon2.png'
                    },
                    {
                        id: 4,
                        title: 'Refonte projet',
                        slug: 'refonte-projet',
                        description: 'Hunky dory barney fanny around up the duff no biggie loo cup of tea jolly good ruddy say arse.',
                        icon: '/img/seo/icon2.png'
                    },
                ]}
                button={{
                    href: '/services',
                    label: 'Voir tous nos services',
                    target: '_self'
                }}
            />
            <SeoService
                title={`Services spécifiques`}
                p={`Chaque projet client est unique, c'est pourquoi nous accordons une grande importance à notre premier échange pour adapter nos services à vos besoins.`}
                services={[
                    {
                        id: 1,
                        title: 'API REST',
                        slug: 'api-rest',
                        description: 'Nous développons pour vous une interface de programmation consommable depuis n\'importe quel client.',
                        icon: '/img/seo/icon1.png'
                    },
                    {
                        id: 2,
                        title: 'WebApp',
                        slug: 'webapp',
                        description: 'Nous développons pour vous une application multiplateforme avec les dernières technologies du marché.',
                        icon: '/img/seo/icon2.png'
                    },
                    {
                        id: 3,
                        title: 'Site headless (JAMstack)',
                        slug: 'site-generation-headless',
                        description: 'Nous développons pour vous une application multiplateforme avec les dernières technologies du marché.',
                        icon: '/img/seo/icon2.png'
                    },
                    {
                        id: 3,
                        title: 'Progressive Web Application',
                        slug: 'progressive-web-app',
                        description: 'Hunky dory barney fanny around up the duff no biggie loo cup of tea jolly good ruddy say arse.',
                        icon: '/img/seo/icon2.png'
                    },
                ]}
                button={{
                    href: '/services',
                    label: 'Voir tous nos services',
                    target: '_self'
                }}
            />
            <SeoService
                title={`Services spécifiques`}
                p={`Chaque projet client est unique, c'est pourquoi nous accordons une grande importance à notre premier échange pour adapter nos services à vos besoins.`}
                services={[
                    {
                        id: 1,
                        title: 'Développement back-end',
                        slug: 'api-et-webapp',
                        description: 'Nous développons pour vous une interface de programmation consommable depuis n\'importe quel client.',
                        icon: '/img/seo/icon1.png'
                    },
                    {
                        id: 2,
                        title: 'Développement front-end',
                        slug: 'site-generation-headless',
                        description: 'Nous développons pour vous une application multiplateforme avec les dernières technologies du marché.',
                        icon: '/img/seo/icon2.png'
                    },
                    {
                        id: 3,
                        title: 'Intégration API tierce',
                        slug: 'progressive-web-app',
                        description: 'Hunky dory barney fanny around up the duff no biggie loo cup of tea jolly good ruddy say arse.',
                        icon: '/img/seo/icon2.png'
                    },
                    {
                        id: 4,
                        title: 'Refonte technique',
                        slug: 'progressive-web-app',
                        description: 'Hunky dory barney fanny around up the duff no biggie loo cup of tea jolly good ruddy say arse.',
                        icon: '/img/seo/icon2.png'
                    },
                    {
                        id: 5,
                        title: 'Migration de technologie',
                        slug: 'progressive-web-app',
                        description: 'Hunky dory barney fanny around up the duff no biggie loo cup of tea jolly good ruddy say arse.',
                        icon: '/img/seo/icon2.png'
                    },
                    {
                        id: 6,
                        title: 'Suivi technique',
                        slug: 'progressive-web-app',
                        description: 'Hunky dory barney fanny around up the duff no biggie loo cup of tea jolly good ruddy say arse.',
                        icon: '/img/seo/icon2.png'
                    },
                ]}
                button={{
                    href: '/services',
                    label: 'Voir tous nos services',
                    target: '_self'
                }}
            />
            <CaseStudies
                title={`Réalisations sur mesure`}
                p={`Chaque projet a été réalisé intégralement avec des outils open-source respectueux des données.`}
                case_collection={[
                    {
                        id: 1,
                        image: '../img/seo/studies_img_one.jpg',
                        title: 'Guide Audio - Grottes du Cerdon',
                        slug: 'guide-audio-grottes-du-cerdon',
                        tags: [
                            {
                                href: '/#',
                                name: 'javascript'
                            },
                            {
                                href: '/#',
                                name: 'react.js'
                            },
                        ],
                    },
                    {
                        id: 2,
                        image: '../img/seo/studies_img_two.jpg',
                        title: 'Carte Grise EIRL',
                        slug: 'carte-grise-eirl',
                        tags: [
                            {
                                href: '/#',
                                name: 'php'
                            },
                            {
                                href: '/#',
                                name: 'symfony'
                            },
                        ],
                    },
                    {
                        id: 3,
                        image: '../img/seo/studies_img_three.jpg',
                        title: 'Souffle Vital',
                        slug: 'souffle-vital',
                        tags: [
                            {
                                href: '/#',
                                name: 'wordpress'
                            },
                        ],
                    },
                    {
                        id: 4,
                        image: '../img/seo/studies_img_two.jpg',
                        title: 'En lien avec vous',
                        slug: 'en-lien-avec-vous',
                        tags: [
                            {
                                href: '/#',
                                name: 'php'
                            },
                            {
                                href: '/#',
                                name: 'symfony'
                            },
                            {
                                href: '/#',
                                name: 'react.js'
                            },
                        ],
                    },
                    {
                        id: 4,
                        image: '../img/seo/studies_img_two.jpg',
                        title: 'Seren\'Vet',
                        slug: 'serenvet',
                        tags: [
                            {
                                href: '/#',
                                name: 'wordpress'
                            },
                            {
                                href: '/#',
                                name: 'php'
                            },
                        ],
                    },
                ]}
            />
            <ChatIntegration
                title={`Technologies open-source utilisées pour les projets.`}
                p={`Explore 50+ integrations that make your day-to-day workflow more efficient and familiar. Our extensive developer tools might also strike your fancy.`}
                integrations={[
                    {
                        href: '/#',
                        image: '/img/technology/php.jpg',
                    },
                    {
                        href: '/#',
                        image: '/img/technology/symfony-5.webp',
                    },
                    {
                        href: '/#',
                        image: '/img/technology/mariadb.png',
                    },
                    {
                        href: '/#',
                        image: '/img/technology/apache2.jpg',
                    },
                    {
                        href: '/#',
                        image: '/img/technology/javascript.webp',
                    },
                    {
                        href: '/#',
                        image: '/img/technology/reactjs.png',
                    },
                ]}
            />
            <SeoFact
                title={`Over 1200+ completed work & Still counting.`}
                facts={[
                    {
                        label: 'Happy Clients',
                        counter: 100,
                    },
                    {
                        label: 'Projets',
                        counter: 250,
                    },
                    {
                        label: 'Experience',
                        counter: 8
                    }
                ]}
            />
            <SeoAction
                title={`Besoin d'une estimation pour votre projet ?<br/> C'est simple, rapide et gratuit !`}
                button={{
                    href: '/demander-un-devis',
                    label: 'Demander un devis maintenant',
                    classNames: 'about_btn'
                }}
            />
        </Layout>
    )
}

export default DevntechHome;
