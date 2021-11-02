import React from 'react';
import TrackingBanner from 'sections/Banner/TrackingBanner';
import TrackingActivity from 'sections/Tracking/TrackingActivity';
import TrackingProduct from 'sections/Features/TrackingProduct';
import TrackingPricing from 'sections/Tracking/TrackingPricing';
import TrackingGetStarted from 'sections/Tracking/TrackingGetStarted';
import Layout from "layouts/Layout";
import TrackingProductItem from "components/Tracking/TrackingProductItem";

const HomeTracking = () => {
    return(
        <Layout variant={'tracking'}>
            <TrackingBanner
                title={`Spend less <strong>time tracking</strong>`}
                p={`Track your time and watch your productivity soar!`}
                image={{
                    src: "/img/home-tracking/tracking_banner_img.png",
                    alt: "Tracking banner"
                }}
            />
            <TrackingActivity
                activities={[
                    {
                        image:{
                            src: "/img/home-tracking/activity_icon.png",
                            alt: ""
                        },
                        title:`Track Activity Live`,
                        p:`Twit cras excuse my French matie boy grub it’s all gone to`,
                    },
                ]}
            />
            <TrackingProduct>
                <TrackingProductItem
                    image="watch_1.png"
                    title="Tracking and productivity reporting"
                    p="Real-time tools and rich insights mean our support solution amplifies your team for an unbeatable experience."
                    buttonLink="Learn more"
                />
                <TrackingProductItem
                    itemClass="tracking_pr_two"
                    rowclass="flex-row-reverse"
                    image="crismas.png"
                    title="Organize your scattered projects"
                    p="Real-time tools and rich insights mean our support solution amplifies your team for an unbeatable experience."
                    buttonLink="Learn more"
                />
                <TrackingProductItem
                    itemClass="tracking_pr_three"
                    image="month.png"
                    title="3 Month free trial for freelancer"
                    p="Real-time tools and rich insights mean our support solution amplifies your team for an unbeatable experience."
                    buttonLink="Learn more"
                />
            </TrackingProduct>
            <TrackingPricing
                title={'Pricing'}
                pricing={{
                    currency: '€',
                    amount: 50,
                    period: 'per user/month',
                    label: 'Free for 3 months',
                    features: [
                        {
                            id: 1,
                            label: 'Cancel anytime',
                            included: true,
                        },
                        {
                            id: 2,
                            label: 'No contracts',
                            included: true
                        }
                    ]
                }}
                buttonLink={{
                    href: '/#',
                    label: 'Live chat for free'
                }}
                message={'(No credit card required)'}
            />
            <TrackingGetStarted
                image={{
                    src: "/img/home-tracking/cta.png",
                    alt: 'tracking cta'
                }}
                title={'Try for free now'}
                buttonLink={{
                    label: 'Get Started'
                }}
            />
        </Layout>
    )
}

const keywords = ['tracking','home'];

export default HomeTracking;
