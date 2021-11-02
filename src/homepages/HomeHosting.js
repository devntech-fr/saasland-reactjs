import React from 'react';
import HostingBanner from 'sections/Banner/HostingBanner';
import DomainSearch from 'sections/Search/DomainSearch';
import HostingService from 'sections/Service/HostingService';
import HostingFeatures from 'sections/Service/HostingFeatures';
import HostingAction from 'sections/CallToAction/HostingAction';
import HostingPlan from 'sections/Features/HostingPlan';
import HostingMap from 'sections/Map/HostingMap';
import HostingBlog from 'sections/Blog/HostingBlog';
import HostingActionTwo from 'sections/CallToAction/HostingActionTwo';
import Layout from "layouts/Layout";
import HostingFeatureItem from "sections/Service/HostingFeatureItem";
import HostingBlogItems from "sections/Blog/HostingBlogItems";

const HomeHosting =()=> {
    return(
        <Layout variant={'hosting'}>
            <HostingBanner
                title={`Web Hosting / VPN Digital Technology Modern Solution !`}
                p={`Get stuffed mate cheeky bugger lurgy loo plastered ruddy bubble and squeak bevvy skive off quaint wellies.`}
                buttonLink={{
                    href: "/#",
                    target: "_self",
                    label: "Get Started"
                }}
                image={{
                    src: "/img/hosting/hosting-image.png",
                    alt: "Hosting image"
                }}
                lines={8}
            />
            <DomainSearch
                title={`Looking for domain name?`}
                prices={[
                    {
                        id: 1,
                        label: ".com",
                        currency: "€",
                        amount: 6.50
                    },
                    {
                        id: 2,
                        label: ".fr",
                        currency: "€",
                        amount: 9.90
                    },
                    {
                        id: 3,
                        label: ".net",
                        currency: "€",
                        amount: 19.90
                    },
                    {
                        id: 4,
                        label: ".io",
                        currency: "€",
                        amount: 29.90
                    },
                ]}
            />
            <HostingService
                title={`Designed for developers. Built for business.`}
                p={`The full monty burke posh excuse my French Richard cheeky bobby spiffing crikey Why gormless, pear shaped.`}
                services={[
                    {
                        id: 1,
                        title: 'Shared Hosting',
                        description: 'Hunky dory barney fanny around up the duff no biggie loo cup of tea jolly good ruddy say arse.',
                        icon: 'icon1.png'
                    },
                    {
                        id: 2,
                        title: 'Domain Sale',
                        description: 'Hunky dory barney fanny around up the duff no biggie loo cup of tea jolly good ruddy say arse.',
                        icon: 'icon2.png'
                    },
                    {
                        id: 3,
                        title: 'Reduce complexity',
                        description: 'Hunky dory barney fanny around up the duff no biggie loo cup of tea jolly good ruddy say arse.',
                        icon: 'icon3.png'
                    },
                    {
                        id: 4,
                        title: 'Access globally',
                        description: 'Hunky dory barney fanny around up the duff no biggie loo cup of tea jolly good ruddy say arse.',
                        icon: 'icon4.png'
                    },
                    {
                        id: 5,
                        title: 'Move faster',
                        description: 'Hunky dory barney fanny around up the duff no biggie loo cup of tea jolly good ruddy say arse.',
                        icon: 'icon5.png'
                    },
                    {
                        id: 6,
                        title: 'Easily integrate',
                        description: 'Hunky dory barney fanny around up the duff no biggie loo cup of tea jolly good ruddy say arse.',
                        icon: 'icon6.png'
                    },
                ]}
            />
            <HostingFeatures
                rowClass="flex-row-reverse"
                image="business2.png"
                title="Solutions for Your small business"
                paragraph="Don't get shirty with me owt to do with me arse down the pub have it car boot happy days no biggie bevvy only a quid I, in my flat the little rotter cheeky.!"
            >
                <HostingFeatureItem
                    icon="icon9.png"
                    text="Reseller Hosting"
                    description="Hunky dory barney fanny around up the duff no biggie."
                />
                <HostingFeatureItem
                    icon="icon10.png"
                    text="Wordpress Hosting"
                    description="Hunky dory barney fanny around up the duff no biggie."
                />
            </HostingFeatures>
            <HostingAction
                image="action_img.png"
                title="Managed wordpress Hosting on all plans"
                text="Spiffing pukka show off show off pick your nose and blow off easy peasy buggered hotpot Harry, pardon me blatant.!"
            />
            <HostingPlan/>
            <HostingMap
                title={`Services your customers around the world from 15 regions.`}
                p={`The full monty burke posh excuse my French Richard cheeky bobby spiffing crikey Why gormless, pear shaped.`}
            />
            <HostingBlog
                title={`Our Latest News`}
                p={`The full monty burke posh excuse my French Richard cheeky bobby spiffing crikey Why gormless, pear shaped.`}
            >
                <HostingBlogItems blogImage="h_blog1.jpg" blogTitle="How To Deploy a PHP Application with Kubernetes on Ubuntu" pDate="March 20, 2019" comments="3 Comments"/>
                <HostingBlogItems blogImage="h_blog2.jpg" blogTitle="How To Build a Node.js Application with Docker" pDate="June 20, 2019" comments="2 Comments"/>
            </HostingBlog>
            <HostingActionTwo
                title={`Start growing with SaasLand today!`}
                p={`30-day moneyback guarantee. No questions asked.`}
                buttonLink={{
                    href: "/#",
                    target: '_self',
                    label: "Get a free Estimate"
                }}
            />
        </Layout>
    )
}

const keywords = ['hosting','home'];

export default HomeHosting;
