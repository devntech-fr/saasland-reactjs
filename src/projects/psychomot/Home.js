import React from "react";
import Layout from "projects/psychomot/Layout";
import AppFeaturesTwo from "sections/Features/AppFeaturesTwo";
import CloudServices from "sections/Service/CloudServices";
import StartupService from "sections/Service/Sservice/StartupService";
import ErpFeatures from "sections/Features/ErpFeatures";
import SupportBanner from "sections/Banner/SupportBanner";
import CloudServiceItem from "sections/Service/CloudServiceItem";
import StartupServiceItem from "sections/Service/Sservice/StartupServiceItem";
import AppFeaturedItem from "components/Feature/AppFeaturedItem";
import ErpFeatureItem from "sections/Features/ErpFeatureItem";
import ParallaxData from "components/Parallax/ParallaxData";
import DesignTab from "sections/Features/DesignTab";
import {Col} from "react-bootstrap";
import SupportTabNav from "components/Support/SupportTabNav";
import SupportNavItem from "components/Support/SupportNavItem";
import SupportTabContent from "components/Support/SupportTabContent";

function Home() {

    return (
        <Layout variant={'support'} preloader={true}>
            <SupportBanner
                title={`Bienvenue au cabinet de <br/><span class="f_700">psychomotricité</span> de Salomé THOMAS`}
                p={``}
                image={{
                    src: `/img/new-home/banner.png`,
                    alt: "Cloud banner"
                }}
            />
            <CloudServices title={`Un centre pluridisciplinaire au service des patients et de leurs familles`}>
                <CloudServiceItem icon="icon1.png" sTitle="Build better apps faster" Sp="Crikey blow off chap knackered gosh bobby geeza gormless well, Charles cheeky bugger I cor blimey guvnor hanky panky jolly good."
                                  sbtn="Learn More"/>
                <CloudServiceItem icon="icon2.png" sTitle="Predictable pricing" Sp="Crikey blow off chap knackered gosh bobby geeza gormless well, Charles cheeky bugger I cor blimey guvnor hanky panky jolly good."
                                  sbtn="Learn More"/>
                <CloudServiceItem icon="icon3.png" sTitle="Secure and reliable" Sp="Crikey blow off chap knackered gosh bobby geeza gormless well, Charles cheeky bugger I cor blimey guvnor hanky panky jolly good."
                                  sbtn="Learn More"/>
            </CloudServices>
            <DesignTab
                title={`Découvrez l'univers du centre paramédical`}
                p={`Show off show off pick your nose and blow off Elizabeth grub haggle dropped a clanger cracking.!`}
            >
                <Col lg={4} className={`d-flex align-items-center`}>
                    <SupportTabNav>
                        <SupportNavItem
                            item={{
                                title: 'Collaboration',
                                p: `Design to development,<br/> automated`,
                                identifier: 'one',
                                isActive: true,
                                isSelected: true
                            }}
                        />
                        <SupportNavItem
                            item={{
                                title: 'UI/UX design',
                                p: `Design to development,<br/> automated`,
                                identifier: 'two',
                            }}
                        />
                        <SupportNavItem
                            item={{
                                title: 'Easy to maintain',
                                p: `Design to development,<br/> automated`,
                                identifier: 'three',
                            }}
                        />
                    </SupportTabNav>
                </Col>
                <Col lg={8}>
                    <SupportTabContent>
                        <div className="tab-pane fade show active" id="one" role="tabpanel" aria-labelledby="one-tab">
                            <div className="tab_img">
                                <img src={"/img/image_test.png"} alt=""/>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="two" role="tabpanel" aria-labelledby="two-tab">
                            <div className="tab_img">
                                <img src={"/img/new-home/tab.png"} alt=""/>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="three" role="tabpanel" aria-labelledby="three-tab">
                            <div className="tab_img">
                                <img src={"/img/new-home/tab_3.png"} alt=""/>
                            </div>
                        </div>
                    </SupportTabContent>
                </Col>
            </DesignTab>
            <AppFeaturesTwo
                title={`Un travail d’équipe au bénéfice du patient`}
                p={`Le centre est un lieu convivial qui réunit dans un même lieu, des professionnels aux spécialités complémentaires pour que chacun puisse y trouver des solutions aux problématiques qu’il rencontre.
<br/>
Nous pouvons ainsi répondre à la multiplicité des prises en charges auxquelles peuvent être confrontées les familles.`}
                buttonLink={{
                    href: '/#',
                    label: 'Découvrir le centre',
                    target: '_self'
                }}
            >
                <div className="app_featured_item">
                    <AppFeaturedItem
                        plxClass={"app_item item_one"}
                        plxData={ParallaxData.exampleParallaxData}
                        iconClass={"ti-face-smile"}
                        label={"Community"}
                    />
                    <AppFeaturedItem
                        plxClass={"app_item item_two"}
                        plxData={ParallaxData.exampleParallaxDatas}
                        iconClass={"ti-receipt"}
                        label={"Honest pricing"}
                    />
                    <AppFeaturedItem
                        plxClass={"app_item item_three"}
                        plxData={{"x": 50, "y": 10}}
                        iconClass={"ti-face-smile"}
                        label={"Management"}
                    />
                    <AppFeaturedItem
                        plxClass={"app_item item_four"}
                        plxData={{"x": -20, "y": 50}}
                        iconClass={"ti-tablet"}
                        label={"Mobile Design"}
                    />
                </div>
            </AppFeaturesTwo>
            <StartupService title={`User - friendly experience for <br/> your attendies`}>
                <StartupServiceItem icon="icon-badge" text="You events" description="Every event at your fingertip"/>
                <StartupServiceItem iconClass="icon_two" icon="icon-bell" text="Notifications" description="Every event at your fingertip"/>
                <StartupServiceItem iconClass="icon_three" icon="icon-layers" text="Sessions" description="Every event at your fingertip"/>
                <StartupServiceItem iconClass="icon_four" icon="icon-screen-tablet" text="Interactions" description="Every event at your fingertip"/>
            </StartupService>
            <ErpFeatures>
                <ErpFeatureItem
                    image={{ src: "/img/erp-home/crm_img2.jpg", alt: 'Feature' }}
                    title={`Des suivis adaptés aux besoins.`}
                    p={`Afin de répondre aux difficultés et attentes de chacun, le cabinet paramédical dispose d’une salle de groupe en complément des salles individuelles. Cet espace nous permet d’accueillir des patients ayant des difficultés liées aux situations de groupe (concentration, habiletés sociales, déglutition par exemple).`}
                />
            </ErpFeatures>
        </Layout>
    )
}

export default Home;
