import React from 'react';
import SupportBanner from 'sections/Banner/SupportBanner';
import BannerData from 'sections/Banner/BannerData';
import SupportPartnerLogo from 'sections/Support/SupportPartnerLogo';
import HelpSupport from 'sections/Service/HelpSupport';
import DesignTab from 'sections/Features/DesignTab';
import SupportIntegration from 'sections/Support/SupportIntegration';
import SupportPrice from 'sections/Support/SupportPrice';
import MarketingTestimonial from 'sections/Testimonial/MarketingTestimonial';
import SupportSubscribe from 'sections/Support/SupportSubscribe';
import Layout from "layouts/Layout";
import SupportItem from "components/Support/SupportItem";
import PriceItem from "components/Support/PriceItem";
import SupportTabNav from "components/Support/SupportTabNav";
import SupportNavItem from "components/Support/SupportNavItem";
import SupportTabContent from "components/Support/SupportTabContent";
import {Col} from "react-bootstrap";
import IntegrationItem from "components/Support/IntegrationItem";

const HomeSupport = () => {
    const integrations = [
        {
            id: 100,
            image: "/img/new-home/kissmetrics.png",
            text: "KISSmetrics"
        },
        {
            id: 101,
            image: "/img/new-home/metorik.png",
            text: "Metorik"
        },
        {
            id: 102,
            image: "/img/new-home/nicereply-1.png",
            text: "Nicereply"
        },
        {
            id: 103,
            image: "/img/new-home/campfire.png",
            text: "Campfire"
        },
        {
            id: 104,
            image: "/img/new-home/webhooks.png",
            text: "Webhooks"
        },
        {
            id: 105,
            image: "/img/new-home/briteverify.png",
            text: "BriteVerify"
        }
    ];

    return(
        <Layout variant={'support'}>
            <SupportBanner
                title={`Un support de haute qualité`}
                p={`lorem`}
                image={{
                    src: '/img/new-home/banner.png',
                    alt: 'Support'
                }}
                form
            />
            <SupportPartnerLogo title={`Market leaders use app to nrich their brand &amp; business.`} logoCollection={BannerData.ClientsLogo}/>
            <HelpSupport title={`What kind of help do you need today?`}>
                <SupportItem
                    image={{
                        src: '/img/new-home/ticket-support.png',
                        alt: 'Ticketing'
                    }}
                    title={`Need Help support`}
                    buttonLink={{
                        href: '/#',
                        target: '_self',
                        label: 'Start ticketing'
                    }}
                />
                <SupportItem
                    image={{
                        src: '/img/new-home/email.png',
                        alt: 'Need Email support'
                    }}
                    title={`Need Email support`}
                    buttonLink={{
                        href: '/#',
                        target: '_self',
                        label: 'Give me a mail'
                    }}
                />
            </HelpSupport>
            <DesignTab
                title={`Support in your door step`}
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
                                <img src={"/img/new-home/tab_2.png"} alt=""/>
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
            <SupportIntegration
                title={`Software Integrations`}
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
            <SupportPrice
                title='Simple Pricing'
                p='Why I say old chap that is spiffing lavatory chip shop gosh off his nut, smashing boot are you taking the piss posh loo brilliant matie boy.!'
            >
                <Col lg={4} sm={6}>
                    <PriceItem
                        image={{
                            src: '/img/new-home/p-1.png',
                            alt: 'Education'
                        }}
                        title={`Education`}
                        p={`Create your first online course`}
                        amount={25}
                        currency={`€`}
                        period={`month`}
                        features={[
                            {
                                id: 1,
                                label: 'Only 2 operators',
                                included: true
                            },
                            {
                                id: 2,
                                label: 'Abandoned Cart',
                                included: true
                            },
                            {
                                id: 3,
                                label: 'Facebook & Instagram Ads',
                                included: false
                            },
                        ]}
                        buttonLink={{
                            href: '/#',
                            label: 'Start today !'
                        }}
                    />
                </Col>
                <Col lg={4} sm={6}>
                    <PriceItem
                        image={{
                            src: '/img/new-home/p-2.png',
                            alt: 'Professional'
                        }}
                        popular
                        title={`Professional`}
                        p={`Our most popular plan`}
                        amount={50}
                        currency={`€`}
                        period={`month`}
                        features={[
                            {
                                id: 1,
                                label: 'Only 2 operators',
                                included: true
                            },
                            {
                                id: 2,
                                label: 'Abandoned Cart',
                                included: true
                            },
                            {
                                id: 3,
                                label: 'Facebook & Instagram Ads',
                                included: false
                            },
                        ]}
                        buttonLink={{
                            href: '/#',
                            label: 'Start today !'
                        }}
                    />
                </Col>
                <Col lg={4} sm={6}>
                    <PriceItem
                        image={{
                            src: '/img/new-home/p-3.png',
                            alt: 'Business'
                        }}
                        title={`Business`}
                        p={`Experience thebest of lorem`}
                        amount={500}
                        currency={`€`}
                        period={`month`}
                        features={[
                            {
                                id: 1,
                                label: 'Only 2 operators',
                                included: true
                            },
                            {
                                id: 2,
                                label: 'Abandoned Cart',
                                included: true
                            },
                            {
                                id: 3,
                                label: 'Facebook & Instagram Ads',
                                included: false
                            },
                        ]}
                        buttonLink={{
                            href: '/#',
                            label: 'Start today !'
                        }}
                    />
                </Col>
            </SupportPrice>
            <MarketingTestimonial title={`We've heard things like`} testimonialCollection={BannerData.AgencyTestimonial}/>
            <SupportSubscribe
                title={`Newsletter Personalized for You`}
                p={`Instant Sign Up. Cancel Anytime. No Credit Card Required.`}
                formAction={`/#`}
            />
        </Layout>
    )
}

const keywords = ['support','home'];

export default HomeSupport;
