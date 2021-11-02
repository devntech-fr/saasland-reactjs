import React from "react";
import Layout from "projects/psychomot/Layout";
import ErpAnalytics from "sections/Erp/ErpAnalytics";
import ErpAnalyticsItem from "sections/Erp/ErpAnalyticsItem";
import AppFeatures from "sections/Features/AppFeatures";
import SecurityAbout from "sections/About/SecurityAbout";

function WorkOffice(props) {
    return (
        <Layout
            variant={'application'}
        >
            <AppFeatures
                title={`Votre centre paramédical aux portes de Beaumont`}
                p={`La prise en charge en psychomotricité tient compte du projet thérapeutique élaboré à l’issu d’un bilan mais aussi des difficultés rencontrées par la personne au quotidien (école, travail, collectivité, vie familiale). Le psychomotricien passe par une médiation pour remédier à la difficulté ou au trouble. Il agit sur le corps pour harmoniser les fonctions motrices, intellectuelles et affectives. Il contribue au développement, au retour ou au maintien des capacités psychomotrices. `}
            />
            <ErpAnalytics
                title={`Mes axes d'interventions`}
                p={``}
            >
                <ErpAnalyticsItem
                    image={{ src: "/img/work-office/therapie.png", alt: 'Feature' }}
                    text="Bilan complet"
                    cols={4}
                />
                <ErpAnalyticsItem
                    image={{ src: "/img/work-office/reeducation.png", alt: 'Feature' }}
                    text="Rééducation"
                    cols={4}
                />
                <ErpAnalyticsItem
                    image={{ src: "/img/work-office/prevention.png", alt: 'Feature' }}
                    text="Prévention"
                    cols={4}
                />
            </ErpAnalytics>
            <SecurityAbout
                title={`Salomé THOMAS, Psychomotricienne D.E`}
                p={``}
                image={{
                    src: '/img/salome.png',
                    alt: 'Salomé THOMAS'
                }}
            />
        </Layout>
    )
}

export default WorkOffice;
