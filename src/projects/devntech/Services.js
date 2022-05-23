import React from "react";
import Layout from "projects/devntech/Layout";
import Breadcrumb from "sections/Breadcrumb/Breadcrumb";
import {SeoFeatures, SeoFeaturesReverse} from "sections/Features/SeoFeatures";
import CloudServices from "sections/Service/CloudServices";
import CloudServiceItem from "sections/Service/CloudServiceItem";

function ServicesPage() {
    return (
        <Layout>
            <Breadcrumb
                title="Tous nos services"
                description="Notre objectif est de rendre votre solution autonome et toujours prête à évoluer."
            />
            <CloudServices title={`Une approche <br/>centrée sur l'open-source`}>
                <CloudServiceItem
                    title={`Développement back-end`}
                    buttonLink={{
                        label: "Découvrir",
                        href: '/developpement-backend'
                    }}
                />
                <CloudServiceItem
                    image={{
                        src: '/img/home5/icon2.png'
                    }}
                    shape
                    title="Développement front-end"
                    p="Crikey blow off chap knackered gosh bobby geeza gormless well, Charles cheeky bugger I cor blimey guvnor hanky panky jolly good."
                    buttonLink={{
                        label: "Découvrir",
                        href: "/#"
                    }}
                />
                <CloudServiceItem
                    image={{
                        src: '/img/home5/icon3.png'
                    }}
                    shape
                    title="Intégration API tierce"
                    p="Crikey blow off chap knackered gosh bobby geeza gormless well, Charles cheeky bugger I cor blimey guvnor hanky panky jolly good."
                    buttonLink={{
                        label: "Learn More",
                        href: "/#"
                    }}
                />
                <CloudServiceItem
                    image={{
                        src: '/img/home5/icon3.png'
                    }}
                    shape
                    title="Refonte technique"
                    p="Crikey blow off chap knackered gosh bobby geeza gormless well, Charles cheeky bugger I cor blimey guvnor hanky panky jolly good."
                    buttonLink={{
                        label: "Learn More",
                        href: "/#"
                    }}
                />
                <CloudServiceItem
                    image={{
                        src: '/img/home5/icon3.png'
                    }}
                    shape
                    title="Migration technique"
                    p="Crikey blow off chap knackered gosh bobby geeza gormless well, Charles cheeky bugger I cor blimey guvnor hanky panky jolly good."
                    buttonLink={{
                        label: "Learn More",
                        href: "/#"
                    }}
                />
                <CloudServiceItem
                    image={{
                        src: '/img/home5/icon3.png'
                    }}
                    shape
                    title="Suivi technique"
                    p="Crikey blow off chap knackered gosh bobby geeza gormless well, Charles cheeky bugger I cor blimey guvnor hanky panky jolly good."
                    buttonLink={{
                        label: "Learn More",
                        href: "/#"
                    }}
                />
            </CloudServices>
            <SeoFeatures
                title={`Développement d'API REST`}
                p={`En plus de vous servir de back-end pour administrer vos données, l'API vous permet de rendre vos services accessibles depuis tout ordinateur, smartphone ou objet connecté et de décupler le potentiel de votre business.`}
                features={[
                    {
                        title: 'Scalable',
                        image: '/img/seo/icon4.png',
                        description: `Notre hébergement s'adapte à vos utilisateurs finaux.`
                    },
                    {
                        title: 'Sécurisé',
                        image: '/img/seo/icon3.png',
                        description: `Notre hébergement s'adapte à vos utilisateurs finaux.`
                    },
                    {
                        title: 'Performant',
                        image: '/img/seo/icon4.png',
                        description: `Notre hébergement s'adapte à vos utilisateurs finaux.`
                    },
                ]}
                image={'/img/services/swagger_api_doc.png'}
            />
            <SeoFeaturesReverse
                title={`Commandez votre API dès maintenant.`}
                p={`En tant qu'association vous bénéficiez d'une réduction automatique de 20%.`}
                button={{
                    href: '/commande/api',
                    label: 'Commander mon API'
                }}
                features={[
                    {
                        title: 'Scalable',
                        image: '/img/seo/icon4.png',
                        description: `Notre hébergement s'adapte à vos utilisateurs finaux.`
                    },
                    {
                        title: 'Sécurisé',
                        image: '/img/seo/icon3.png',
                        description: `Notre hébergement s'adapte à vos utilisateurs finaux.`
                    },
                    {
                        title: 'Performant',
                        image: '/img/seo/icon4.png',
                        description: `Notre hébergement s'adapte à vos utilisateurs finaux.`
                    },
                ]}
                image={'/img/services/webapp.webp'}
            />
        </Layout>
    )
}

export default ServicesPage;
