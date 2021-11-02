import React from "react";
import Layout from "projects/psychomot/Layout";
import HRServices from "sections/Service/HRServices";
import SecurityService from "sections/Service/SecurityService";
import AppFeatures from "sections/Features/AppFeatures";
import AgencyFeatures from "sections/Features/AgencyFeatures";
import SecurityServiceItem from "sections/Service/SecurityServiceItem";
import HRServiceItem from "components/Service/HRServiceItem";
import ServiceListItem from "components/Security/ServiceListItem";
import ServiceData from "sections/Service/ServiceData";
import ErpAnalytics from "sections/Erp/ErpAnalytics";
import ErpAnalyticsItem from "sections/Erp/ErpAnalyticsItem";
import CloudServices from "sections/Service/CloudServices";
import CloudServiceItem from "sections/Service/CloudServiceItem";
import SupportIntegration from "sections/Support/SupportIntegration";
import IntegrationItem from "components/Support/IntegrationItem";

function About({ match }) {
    const listCollection= [
        {
            span: "problématiques liées aux apprentissages",
            p: "(graphisme/écriture, concentration, motricité générale, organisation, repérage spatio-temporels…)"
        },
        {
            span: "Troubles moteurs",
            p: ""
        },
        {
            span: "Troubles anxieux, nerveux et d'addiction",
            p: ""
        },
        {
            span: "suspicions de diagnostics ou de diagnostics déjà posés",
            p: "TDA/H, haut potentiel, dyspraxie, dysgraphie, TDC/TAC, trouble de l’opposition et/ou du comportement, autisme, trisomie, X fragile, Turner, épilepsie, pathologies génétiques"
        },
    ];
    const services = ServiceData.HRService;
    const integrations = [
        {
            id: 100,
            image: "/img/erp-home/baby.png",
            text: "Le nouveau né"
        },
        {
            id: 101,
            image: "/img/erp-home/enfants.png",
            text: "Les enfants"
        },
        {
            id: 102,
            image: "/img/erp-home/teenage.png",
            text: "L'adolescent"
        },
        {
            id: 103,
            image: "/img/erp-home/adult.png",
            text: "L'adulte"
        },
        {
            id: 104,
            image: "/img/erp-home/old.png",
            text: "Les personnes âgées",
        },
    ];
    return (
        <Layout
            match={match}
        >
            <SecurityService>
                <SecurityServiceItem
                    image="/img/home-security/about_img_1.jpg"
                    title="Une approche globale de la personne"
                    p={`La prise en charge en psychomotricité tient compte du projet thérapeutique élaboré à l’issu d’un bilan mais aussi des difficultés rencontrées par la personne au quotidien (école, travail, collectivité, vie familiale). Le psychomotricien passe par une médiation pour remédier à la difficulté ou au trouble. Il agit sur le corps pour harmoniser les fonctions motrices, intellectuelles et affectives. Il contribue au développement, au retour ou au maintien des capacités psychomotrices.`}

                >
                    <ul className="list-unstyled">
                        {
                            listCollection.map((listItem, key) => (
                                <li className="wow fadeInUp" data-wow-delay="0.5s" key={key}>
                                    <ServiceListItem span={listItem.span} p={listItem.p}/>
                                </li>
                            ))
                        }
                    </ul>
                </SecurityServiceItem>
            </SecurityService>
            <SupportIntegration
                title={`Pour qui ?`}
                p={`Why I say old chap that is spiffing lavatory chip shop gosh off his nut, smashing boot are you taking the piss posh loo brilliant matie boy.!`}
                image={{
                    src: `/img/new-home/tree.png`,
                    alt: 'Intégrations',
                }}
            >
                {integrations.map((integration, key) =>(
                    <div className="col-lg-4 col-md-4 col-sm-6" key={key}>
                        <IntegrationItem integration={integration}/>
                    </div>
                ))}
            </SupportIntegration>
            <CloudServices title={`Le bilan en 4 étapes`}>
                <CloudServiceItem
                    title={'Entretien'}
                    p={`Entretien visant à mieux se connaître et à étayer la demande initiale du bilan.`}
                    cols={3}
                    noButton
                />
                <CloudServiceItem
                    image={{
                        src: '/img/home5/icon2.png'
                    }}
                    shape
                    title="Tests et observations"
                    p="Réalisation du bilan à l’aide de tests standardisés et d’observations cliniques afin d’objectiver les potentialités psychomotrices."
                    cols={3}
                    noButton
                />
                <CloudServiceItem
                    image={{
                        src: '/img/home5/icon3.png'
                    }}
                    shape
                    title="Analyse"
                    p="Analyse des résultats et rédaction du bilan. Mise en relation avec d’autres intervenant."
                    cols={3}
                    noButton
                />
                <CloudServiceItem
                    image={{
                        src: '/img/home5/icon3.png'
                    }}
                    shape
                    title="Restitution"
                    p="Restitution du bilan en entretien. Propositions et discussion autour d’un projet thérapeutique. Orientation vers des examens complémentaires ci-nécessaire."
                    cols={3}
                    noButton
                />
            </CloudServices>
        </Layout>
    )
}

export default About;
