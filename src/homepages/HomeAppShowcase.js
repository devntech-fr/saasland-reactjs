import React, { useContext } from 'react';
import ScreenShowCase from 'sections/Product/ScreenShowCase';
import AppGetStarted from 'sections/CallToAction/AppGetStarted';
import AppTeam from 'sections/Team/AppTeam';
import Layout from "layouts/Layout";
import { ThemeContext, themes } from "themes/ThemeContext";

function HomeAppShowcase() {
    const theme = useContext(ThemeContext);

    console.log('home app theme:',theme);
    return(
        <ThemeContext.Provider value={theme.current = `application`}>
            <Layout variant={'application'}>
                {/*<AppBanner*/}
                {/*    title={`Spend time<br/> with loved ones`}*/}
                {/*    p={`Why I say old chap that is spiffing off his nut arse pear shaped plastered Jeffrey bodge barney some dodgy.`}*/}
                {/*    buttonLink={{*/}
                {/*        href: '/#',*/}
                {/*        label: 'Démarrer',*/}
                {/*        target: '_self'*/}
                {/*    }}*/}
                {/*/>*/}
                {/*<AppFeaturesTwo*/}
                {/*    title={`Un centre d'activités au service des patients et de leurs familles`}*/}
                {/*    p={`Bienvenue dans le cabinet paramédical de Jules Julien aux portes de Toulouse. Ce lieu a été conçu afin d’y réaliser les examens liés à la prise en charge des pathologies psychomotrices, orthophoniques et psychologiques du nourrisson à la personne âgée. Le centre est ouvert du Lundi au Samedi uniquement sur rendez-vous. Des places de parking gratuites sont disponibles aux environs immédiats.`}*/}
                {/*    buttonLink={{*/}
                {/*        href: '/#',*/}
                {/*        label: 'Découvrir le centre',*/}
                {/*        target: '_self'*/}
                {/*    }}*/}
                {/*>*/}
                {/*    <div className="app_featured_item">*/}
                {/*        <AppFeaturedItem*/}
                {/*            plxClass={"app_item item_one"}*/}
                {/*            plxData={ParallaxData.exampleParallaxData}*/}
                {/*            iconClass={"ti-face-smile"}*/}
                {/*            label={"Community"}*/}
                {/*        />*/}
                {/*        <AppFeaturedItem*/}
                {/*            plxClass={"app_item item_two"}*/}
                {/*            plxData={ParallaxData.exampleParallaxDatas}*/}
                {/*            iconClass={"ti-receipt"}*/}
                {/*            label={"Honest pricing"}*/}
                {/*        />*/}
                {/*        <AppFeaturedItem*/}
                {/*            plxClass={"app_item item_three"}*/}
                {/*            plxData={{"x": 50, "y": 10}}*/}
                {/*            iconClass={"ti-face-smile"}*/}
                {/*            label={"Management"}*/}
                {/*        />*/}
                {/*        <AppFeaturedItem*/}
                {/*            plxClass={"app_item item_four"}*/}
                {/*            plxData={{"x": -20, "y": 50}}*/}
                {/*            iconClass={"ti-tablet"}*/}
                {/*            label={"Mobile Design"}*/}
                {/*        />*/}
                {/*    </div>*/}
                {/*</AppFeaturesTwo>*/}
                {/*<AppFeatures/>*/}
                {/*<AppWork ServiceData={ServiceData}/>*/}
                {/*<AppTestimonial/>*/}
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
                        {
                            href: '/img/home7/screenshot4.png',
                            image: '/img/home7/screenshot4.png'
                        },
                        {
                            href: '/img/home7/screenshot5.png',
                            image: '/img/home7/screenshot5.png'
                        },
                    ]}
                />
                <AppGetStarted/>
                <AppTeam
                    title={`The Experts Team`}
                    p={`Why I say old chap that is spiffing barney, nancy boy bleeder chimney pot richard cheers the little rotter.!`}
                />
            </Layout>
        </ThemeContext.Provider>
    )
}

const keywords = ['app','home'];

export default HomeAppShowcase;
