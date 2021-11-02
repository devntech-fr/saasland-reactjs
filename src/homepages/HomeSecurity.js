import React from 'react';
import SecurityBanner from "sections/Banner/SecurityBanner";
import SecurityFeatures from "sections/Features/SecurityFeatures";
import SecurityPowerFeatures from "sections/Features/SecurityPowerFeatures";
import SecurityService from "sections/Service/SecurityService";
import SecurityPrice from "sections/Features/SecurityPrice";
import AnalyticsList from "sections/FeaturesList/AnalyticsList";
import SecurityCustomerLogo from "sections/Security/SecurityCustomersLogo";
import SecurityIntegration from "sections/Security/SecurityIntegration";
import SecurityAction from "sections/CallToAction/SecurityAction";
import Layout from "layouts/Layout";
import SecurityFeatureItem from "components/Security/SecurityFeatureItem";
import SecurityPowerFeatureItem from "components/Security/SecurityPowerFeatureItem";
import SecurityServiceItem from "sections/Service/SecurityServiceItem";
import PricingTable from "components/Security/PricingTable";

const HomeSecurity =()=> {
    return(
        <Layout variant={'security'}>
            <SecurityBanner
            />
            <SecurityFeatures title={`<span>Security</span> Total digital protection`}>
                <SecurityFeatureItem
                    itemClass="pr_70"
                    image="/img/home-security/security_1.png"
                    title="Share research with the whole team" p="My good sir car boot super old owt to do with me say no biggie cheeky bugger"
                />
                <SecurityFeatureItem
                    itemClass="pl_70"
                    image="/img/home-security/security_2.png"
                    title="Advanced mining Traffic"
                    p="My good sir car boot super old owt to do with me say no biggie cheeky bugger"
                />
                <SecurityFeatureItem
                    itemClass="pr_70"
                    image="/img/home-security/security_3.png"
                    title="Track changes in feedback over time"
                    p="My good sir car boot super old owt to do with me say no biggie cheeky bugger"
                />
                <SecurityFeatureItem
                    itemClass="pl_70"
                    image="/img/home-security/security_4.png"
                    title="SaasLand Document Protector"
                    p="My good sir car boot super old owt to do with me say no biggie cheeky bugger"
                />
            </SecurityFeatures>
            <SecurityPowerFeatures title={`<span>Popular</span> Simple yet Powerful`}>
                <SecurityPowerFeatureItem
                    image="/img/home-security/shield.png"
                    title="Speedup"
                />
                <SecurityPowerFeatureItem
                    image="/img/home-security/rocket.png"
                    title="Protection"
                />
                <SecurityPowerFeatureItem
                    image="/img/home-security/real-estate.png"
                    title="Cleanup"
                />
            </SecurityPowerFeatures>
            <SecurityService>
                <SecurityServiceItem
                    image="/img/home-security/about_img_1.jpg"
                    title="Explore user behavior on an individual level of detail"
                    p="Why I say old chap that is spiffing cobblers it's your round, haggle bits and bobs golly gosh up the duff mush well car boot bevvy."
                    listCollection={[
                        {
                            span: "Flexible, fast reporting:",
                            p: "On your bike mate cobblers I don't want no agro bleeding crikey."
                        },
                        {
                            span: "Access our data anywhere:",
                            p: "James Bond Queen's English mufty it's all gone to pot bobby elizabeth."
                        },
                        {
                            span: "Invite your entire team:",
                            p: "So I said in my flat Elizabeth no biggie me old mucker smashing starkers spiffing wind up, cobblers chip shop."
                        },
                    ]}
                />
                <SecurityServiceItem
                    image="/img/home-security/about_img_2.jpg"
                    reverse
                    title="Measure product usage and custom KPIs for every customer"
                    p="Why I say old chap that is spiffing cobblers it's your round, haggle bits and bobs golly gosh up the duff mush well car boot bevvy."
                    listCollection={[
                        {
                            span: "Flexible, fast reporting:",
                            p: "On your bike mate cobblers I don't want no agro bleeding crikey."
                        },
                        {
                            span: "Access our data anywhere:",
                            p: "James Bond Queen's English mufty it's all gone to pot bobby elizabeth."
                        },
                        {
                            span: "Invite your entire team:",
                            p: "So I said in my flat Elizabeth no biggie me old mucker smashing starkers spiffing wind up, cobblers chip shop."
                        },
                    ]}
                />
            </SecurityService>
            <SecurityPrice>
                <PricingTable/>
            </SecurityPrice>
            <AnalyticsList
                title={`<span>Protect what’s</span>yours with Internet Security`}
                p={`Nancy boy brown bread get stuffed mate a matie boy I grub cheeky horse play bobby argy-bargy loo, fantastic cockup pukka William bum bag the little rotter arse over tit cuppa.!`}
                list={['Client accounts', 'Visitor & Keyword-level tracking', 'Unlimited user accounts', 'Email summaries']}
            />
            <SecurityCustomerLogo
                title={`<span>Our Clients. </span>World-class protection`}
                p={`Naff pukka zonked squiffy quaint knees up cup of tea Oxford the BBC bloke ummm I'm telling, argy-bargy show off show off pick your nose and blow off hanky.!`}
                logoCollection={[
                    {
                        href: '/#',
                        image: {
                            src: '/img/home-software/logo_01.png',
                            alt: 'client name',
                        },
                    },
                    {
                        href: '/#',
                        image: {
                            src: '/img/home-software/logo_02.png',
                            alt: 'client name',
                        },
                    },
                    {
                        href: '/#',
                        image: {
                            src: '/img/home-software/logo_03.png',
                            alt: 'client name',
                        },
                    },
                    {
                        href: '/#',
                        image: {
                            src: '/img/home-software/logo_04.png',
                            alt: 'client name',
                        },
                    },
                    {
                        href: '/#',
                        image: {
                            src: '/img/home-software/logo_05.png',
                            alt: 'client name',
                        },
                    },
                    {
                        href: '/#',
                        image: {
                            src: '/img/home-software/logo_06.png',
                            alt: 'client name',
                        },
                    },
                    {
                        href: '/#',
                        image: {
                            src: '/img/home-software/logo_07.png',
                            alt: 'client name',
                        },
                    },
                    {
                        href: '/#',
                        image: {
                            src: '/img/home-software/logo_08.png',
                            alt: 'client name',
                        },
                    },
                ]}
                imagesDecoration={true}
                buttons={[
                    {
                        href: "/#",
                        classNames: "security_app_btn",
                        label: `Compatible with <span>Windows 10, 8, 7</span>`,
                        iconClass: 'fab fa-windows'
                    },
                    {
                        href: "/#",
                        classNames: "security_app_btn",
                        label: `Compatible with <span>Mac OS</span>`,
                        iconClass: 'fab fa-apple'
                    },
                ]}
            />
            <SecurityIntegration
                title={`<span>Discover just how </span>Awesome access control can be.`}
                integrations={[
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
                ]}
            />
            <SecurityAction
                title={`<span>Want to see Sequr in action?</span>Hop on our daily webinar at 3:30 PM EST`}
                image={{
                    src: `/img/home-security/shield.png`,
                    alt: 'shield'
                }}
                backgroundImage={`/img/home-security/sheld_bg.png`}
                buttonLink={{
                    href: "/#",
                    label: `Free quote`,
                }}
            />
        </Layout>
    )
}

const keywords = ['security','home'];

export default HomeSecurity;
