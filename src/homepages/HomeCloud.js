import React from 'react';
import CloudBanner from 'sections/Banner/CloudBanner';
import CloudServices from 'sections/Service/CloudServices';
import CloudServiceTab from 'sections/Service/Sservice/CloudServiceTab';
import CloudFeatures from 'sections/Features/CloudFeatures';
import CloudFeaturesTwo from 'sections/Features/CloudFeaturesTwo';
import DeveloperTab from 'sections/Product/DeveloperTab';
import PartnerLogo from 'sections/PartnerLogo/PartnerLogo';
import ServiceSubscribe from 'sections/CallToAction/ServiceSubscribe';
import Layout from "layouts/Layout";
import CloudServiceItem from "sections/Service/CloudServiceItem";
import CloudServiceTabItem from "sections/Service/Sservice/CloudServiceTabItem";
import ServiceTabNav from "components/Software/ServiceTabNav";
import CloudServiceNavItem from "components/Service/CloudServiceNavItem";
import ServiceTabContentWrapper from "components/Software/ServiceTabContentWrapper";
import TabPanel from "components/Service/TabPanel";

const HomeCloud = () => {
    return(
        <Layout variant={'cloud'}>
            <CloudBanner
                title={`We deliver the <span className="f_700">Software</span> You need,<br/> no more no less`}
                p={`Why I say old chap that is spiffing off his nut arse pear shaped plastered Jeffrey bodge barney some dodgy.`}
                buttonLink={{
                    href: '/#',
                    label: 'Get started',
                    target: '_self'
                }}
                image={{
                    src: "/img/home5/banner_img.png",
                    alt: "Cloud banner image"
                }}
            />
            <CloudServices title={`Un travail de fond <br/>au service des patients et de leurs familles`}>
                <CloudServiceItem/>
                <CloudServiceItem
                    image={{
                        src: '/img/home5/icon2.png'
                    }}
                    shape
                    title="Predictable pricing"
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
                    title="Secure and reliable"
                    p="Crikey blow off chap knackered gosh bobby geeza gormless well, Charles cheeky bugger I cor blimey guvnor hanky panky jolly good."
                    buttonLink={{
                        label: "Learn More",
                        href: "/#"
                    }}
                />
            </CloudServices>
            <CloudFeatures
                title={`Your design process, in one place`}
                p={`Show off show off pick your nose and blow off Elizabeth grub haggle dropped a clanger cracking !`}
                titleClass={`sec_title text-center mb_70`}
                featureImages={[
                    {
                        src: `/img/home5/design1.png`,
                        alt: 'Design 1'
                    },
                    {
                        src: `/img/home5/design2.png`,
                        alt: `Design 2`
                    }
                ]}
                buttonLink={{
                    href: '/#',
                    label: 'API Documentation',
                    target: '_self'
                }}
            />
            <CloudServiceTab
                title={`Découvrez l'univers du centre`}
                p={`Tickety-boo cheers plastered twit chimney pot off his nut hotpot spend a penny have it, so I said squiffy A bit of how's your father.`}
            >
                <div className="col-lg-4 col-md-4">
                    <ServiceTabNav>
                        <CloudServiceNavItem
                            isActive isSelected
                        />
                        <CloudServiceNavItem
                            identifier={'saas'}
                            label={'SaasLand'}
                        />
                        <CloudServiceNavItem
                            identifier={'ma'}
                            label={'Manage'}
                        />
                        <CloudServiceNavItem
                            identifier={'secure'}
                            label={'Secure'}
                        />
                        <CloudServiceNavItem
                            identifier={'scale'}
                            label={'Scale'}
                        />
                        <CloudServiceNavItem
                            identifier={'monitor'}
                            label={'Monitor'}
                        />
                    </ServiceTabNav>
                </div>
                <div className="col-lg-8 col-md-8">
                    <ServiceTabContentWrapper>
                        <TabPanel identifier={'de'} isActive>
                            <img src={`/img/image_test.png`} alt={`logo`} height={600}/>
                        </TabPanel>
                        <TabPanel identifier={'saas'}>
                            <CloudServiceTabItem ticon="ti-face-smile" text="Cluster Deployments" description="Crikey blow off chap knackered gosh bobby geeza gormless well, Charles cheeky bugger I cor blimey guvnor hanky panky jolly good."/>
                            <CloudServiceTabItem colClass="offset-lg-2" ticon="ti-harddrives" text="Backups & Snapshots" description="Crikey blow off chap knackered gosh bobby geeza gormless well, Charles cheeky bugger I cor blimey guvnor hanky panky jolly good."/>
                            <CloudServiceTabItem ticon="ti-user" text="Team Management" description="Crikey blow off chap knackered gosh bobby geeza gormless well, Charles cheeky bugger I cor blimey guvnor hanky panky jolly good."/>
                            <CloudServiceTabItem colClass="offset-lg-2" ticon="ti-basketball" text="Global Availability" description="Crikey blow off chap knackered gosh bobby geeza gormless well, Charles cheeky bugger I cor blimey guvnor hanky panky jolly good."/>
                        </TabPanel>
                        <TabPanel identifier={'ma'}>
                            <CloudServiceTabItem ticon="ti-user" text="Team Management" description="Crikey blow off chap knackered gosh bobby geeza gormless well, Charles cheeky bugger I cor blimey guvnor hanky panky jolly good."/>
                            <CloudServiceTabItem colClass="offset-lg-2" ticon="ti-basketball" text="Global Availability" description="Crikey blow off chap knackered gosh bobby geeza gormless well, Charles cheeky bugger I cor blimey guvnor hanky panky jolly good."/>
                            <CloudServiceTabItem ticon="ti-face-smile" text="Cluster Deployments" description="Crikey blow off chap knackered gosh bobby geeza gormless well, Charles cheeky bugger I cor blimey guvnor hanky panky jolly good."/>
                            <CloudServiceTabItem colClass="offset-lg-2" ticon="ti-harddrives" text="Backups & Snapshots" description="Crikey blow off chap knackered gosh bobby geeza gormless well, Charles cheeky bugger I cor blimey guvnor hanky panky jolly good."/>
                        </TabPanel>
                        <TabPanel identifier={'secure'}>
                            <CloudServiceTabItem ticon="ti-user" text="Team Management" description="Crikey blow off chap knackered gosh bobby geeza gormless well, Charles cheeky bugger I cor blimey guvnor hanky panky jolly good."/>
                            <CloudServiceTabItem colClass="offset-lg-2" ticon="ti-basketball" text="Global Availability" description="Crikey blow off chap knackered gosh bobby geeza gormless well, Charles cheeky bugger I cor blimey guvnor hanky panky jolly good."/>
                            <CloudServiceTabItem ticon="ti-face-smile" text="Cluster Deployments" description="Crikey blow off chap knackered gosh bobby geeza gormless well, Charles cheeky bugger I cor blimey guvnor hanky panky jolly good."/>
                            <CloudServiceTabItem colClass="offset-lg-2" ticon="ti-harddrives" text="Backups & Snapshots" description="Crikey blow off chap knackered gosh bobby geeza gormless well, Charles cheeky bugger I cor blimey guvnor hanky panky jolly good."/>
                        </TabPanel>
                        <TabPanel identifier={'scale'}>
                            <CloudServiceTabItem ticon="ti-user" text="Team Management" description="Crikey blow off chap knackered gosh bobby geeza gormless well, Charles cheeky bugger I cor blimey guvnor hanky panky jolly good."/>
                            <CloudServiceTabItem colClass="offset-lg-2" ticon="ti-face-smile" text="Cluster Deployments" description="Crikey blow off chap knackered gosh bobby geeza gormless well, Charles cheeky bugger I cor blimey guvnor hanky panky jolly good."/>
                            <CloudServiceTabItem ticon="ti-harddrives" text="Backups & Snapshots" description="Crikey blow off chap knackered gosh bobby geeza gormless well, Charles cheeky bugger I cor blimey guvnor hanky panky jolly good."/>
                            <CloudServiceTabItem colClass="offset-lg-2" ticon="ti-basketball" text="Global Availability" description="Crikey blow off chap knackered gosh bobby geeza gormless well, Charles cheeky bugger I cor blimey guvnor hanky panky jolly good."/>
                        </TabPanel>
                        <TabPanel identifier={'monitor'}>
                            <CloudServiceTabItem ticon="ti-user" text="Team Management" description="Crikey blow off chap knackered gosh bobby geeza gormless well, Charles cheeky bugger I cor blimey guvnor hanky panky jolly good."/>
                            <CloudServiceTabItem colClass="offset-lg-2" ticon="ti-basketball" text="Global Availability" description="Crikey blow off chap knackered gosh bobby geeza gormless well, Charles cheeky bugger I cor blimey guvnor hanky panky jolly good."/>
                            <CloudServiceTabItem ticon="ti-face-smile" text="Cluster Deployments" description="Crikey blow off chap knackered gosh bobby geeza gormless well, Charles cheeky bugger I cor blimey guvnor hanky panky jolly good."/>
                            <CloudServiceTabItem colClass="offset-lg-2" ticon="ti-harddrives" text="Backups & Snapshots" description="Crikey blow off chap knackered gosh bobby geeza gormless well, Charles cheeky bugger I cor blimey guvnor hanky panky jolly good."/>
                        </TabPanel>
                    </ServiceTabContentWrapper>
                </div>
            </CloudServiceTab>
            <CloudFeaturesTwo
                title={`Un hébergement cloud pour tout le monde`}
                image={{
                    src: `/img/home5/featured_img1.png`,
                    alt: "Cloud banner"
                }}
                buttonLink={{
                    href: "/#",
                    target: '_self',
                    label: "Plus d'info"
                }}
            />
            <DeveloperTab
                title={"Developer first"}
            />
            <PartnerLogo pClass="partner_logo_area_two" pClasst="pt-0 mb-0"/>
            <ServiceSubscribe
                title={`Subscribe for ger exclusive news & offer`}
            />
        </Layout>
    )
}

const keywords = ['cloud','home'];

export default HomeCloud;
