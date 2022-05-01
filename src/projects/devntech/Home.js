import React from 'react';
import Header from 'components/Header/Header';
import DesignBanner from 'sections/Banner/DesignBanner';
import Services from 'sections/Service/Services';
import ServiceData from "sections/Service/ServiceData";
import Testimonial from 'sections/Testimonial/Testimonials';
import SeoFact from "sections/Fact/SeoFact";
import SeoPartnerLogo from "sections/PartnerLogo/SeoPartnerLogo";
import SeoAction from "sections/CallToAction/SeoAction";
import CaseStudies from "sections/CaseStudy/CaseStudies";
import Footer from 'sections/Footer/Footer';
import ErpServiceItem from 'sections/Service/ErpServiceItem';

function DevntechHome() {
    const ServiceSection = Services.erp;
    return (
        <div className="body_wrapper">
            <Header 
                sticky={true} 
                variant={'primary'}
                navigationLinks={[
                    {
                        label: 'Accueil',
                        href: '/devntech',
                        isActive: false
                    },
                    {
                        label: 'Services',
                        href: '/devntech/#work',
                        isActive: false
                    },
                    {
                        label: `Réalisations`,
                        href: '/devntech/#portfolio',
                        isActive: false
                    },
                    {
                        label: `Contact`,
                        href: '/devntech/contact',
                        isActive: false
                    },
                ]}
            />
            <DesignBanner
                title={`Développement d'applications web et mobile sur mesure`}
                p={`pour les PME, les commerces de proximité, les artisans et les professions libérales.`}
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
            <ServiceSection 
                title={`Services sur mesure`}
                p={`Chaque projet client est unique, c'est pourquoi nous accordons une grande importance à notre premier échange pour adapter nos services à vos besoins.`}
                services={ServiceData.work}
            >
                {ServiceData.work.map((service, key) => <ErpServiceItem service={service} key={key} />)}
            </ServiceSection>
            <CaseStudies
                title={`Réalisations sur mesure`}
                p={`Chaque projet a été réalisé intégralement avec des outils open-source respectueux des données.`}
                case_collection={[
                    {
                        id: 1,
                        image: '../img/seo/studies_img_one.jpg',
                        title: 'PWA Guide Audio',
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
                ]}
            />
            <SeoFact
                facts={[
                    {
                        label: 'années d\'expérience',
                        counter: 7
                    },
                    {
                        label: 'clients satisfaits',
                        counter: 100
                    },
                    {
                        label: 'Projects',
                        counter: 120
                    },
                    {
                        label: 'tasses de café',
                        counter: 555
                    },
                ]}
            />
            <SeoPartnerLogo
                title={`Technologies utilisées pour les projets.`}
                logo_collection={[
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
            <SeoAction
                title={`Besoin d'une estimation pour votre projet ?<br/> C'est simple et rapide !`}
                button={{
                    href: '/#',
                    label: 'Demander un devis gratuit',
                    classNames: 'about_btn'
                }}
            />
            <Footer
                copywrite={`© Dev'nTech SASU 2021 All rights reserved.`}
            />
        </div>
    )
}

export default DevntechHome;
