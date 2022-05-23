import React from 'react';
import AppBanner from 'sections/Banner/AppBanner';
import AppFeaturesTwo from 'sections/Features/AppFeaturesTwo';
import AppFeatures from 'sections/Features/AppFeatures';
import AppTestimonial from 'sections/Testimonial/AppTestimonial';
import AppWork from 'sections/Service/AppWork';
import ScreenShowCase from 'sections/Product/ScreenShowCase';
import AppGetStarted from 'sections/CallToAction/AppGetStarted';
import AppTeam from 'sections/Team/AppTeam';
import ServiceData from 'sections/Service/ServiceData';
import Layout from "layouts/LandingLayout";
import AppFeaturedItem from "components/Feature/AppFeaturedItem";

function Landing() {
    const exampleParallaxData = [
        {
            start: 700,
            duration: 100,
            properties: [
                {
                    startValue: -100,
                    endValue: -20,
                    property: "translateY"
                },
                {
                    startValue: 1,
                    endValue: 20,
                    property: "translateX"
                },
                {
                    startValue: 0,
                    endValue: 20,
                    property: "translate"
                },
                {
                    startValue: 0,
                    endValue: 2,
                    property: "translateY"
                }
            ]
        }
    ];
    const exampleParallaxDatas = [
        {
            start: 700,
            duration: 100,
            properties: [
                {
                    startValue: 100,
                    endValue: 30,
                    property: "translateY"
                },
                {
                    startValue: 1.5,
                    endValue: -20,
                    property: "translateX"
                },
                {
                    startValue: 0,
                    endValue: 20,
                    property: "translate"
                },
                {
                    startValue: 0,
                    endValue: 5,
                    property: "translateY"
                }
            ]
        }
    ];
    return (
        <Layout variant={'landing'}>
            <AppBanner
                title={`Développeur fullstack <br/>PHP Symfony 6 & React.JS`}
                p={`Développement, automatisation et maintenance d'API REST et de solutions headless open-source pour TPE, PME, artisans, professions libérales et commerces de proximité.`}
            />
            <AppFeaturesTwo
                title={`Solutions évolutives, scalables et sécurisées.`}
                p={`Economisez sur les coûts de votre hébergement, la scalabilité est automatique, les mises à jour également. <br/>Consommez votre API depuis n'importe quel appareil autorisé connecté à internet.`}
                buttonLink={{
                    label: 'See All Features',
                    href: '/all-features',
                    target: '_self'
                }}
            >
                <AppFeaturedItem
                    plxClass={'item_four'}
                    plxData={`{"x": -20, "y": 50}`}
                    iconClass={'ti-receipt'}
                    label={'Open-source'}
                />
                <AppFeaturedItem
                    plxClass={'item_two'}
                    plxData={exampleParallaxDatas}
                    iconClass={'ti-tablet'}
                    label={'API ou CMS headless'}
                />
                <AppFeaturedItem
                    plxClass={'item_three'}
                    plxData={exampleParallaxDatas}
                    iconClass={'ti-tablet'}
                    label={'WebApp'}
                />
                <AppFeaturedItem
                    plxClass={'item_one'}
                    plxData={exampleParallaxDatas}
                    iconClass={'ti-face-smile'}
                    label={'PWA'}
                />
            </AppFeaturesTwo>
            <AppFeatures
                title={`Une interface d'administration <br/>unique pour vous.`}
                p={`Une application mobile pour gérer tout votre contenu et recevoir les notifications du serveur lors des mises à jour ou des restaurations de site.`}
                image={{
                    src: '/img/home7/iPhonex.png',
                    alt: 'iPhone X',
                }}
                buttonLink={{
                    href: '/#',
                    label: 'Learn More'
                }}
                dots={false}
            />
            <AppWork
                title={`Développements sur base existante`}
                p={``}
                services={ServiceData.work}
            />
            <ScreenShowCase
                screens={[
                    {
                        href: '/img/home7/screenshot1.png',
                        image: '/img/home7/screenshot1.png'
                    },
                    {
                        href: '/img/home7/screenshot2.png',
                        image: '/img/home7/screenshot2.png'
                    },
                    {
                        href: '/img/home7/screenshot3.png',
                        image: '/img/home7/screenshot3.png'
                    },
                ]}
            />
            <AppGetStarted
                subtitle={'Vous avez un projet ?'}
                title={'Demandez votre devis'}
                buttons={[
                    {
                        href: '/download-google-play',
                        label: 'Google Play (Android)',
                        image: {
                            src: '/img/home7/google_icon.png',
                            title: 'google play download'
                        }
                    },
                    {
                        href: '/download-play-store',
                        label: 'Play Store',
                        image: {
                            src: '/img/home7/apple_icon.png',
                            title: 'play store download'
                        }
                    },
                ]}
                image={{
                    src: `/img/home7/iPhoneX2.png`,
                    alt: 'iPhone'
                }}
            />
        </Layout>
    )
}

export default Landing;
