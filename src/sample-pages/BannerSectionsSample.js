import React from "react";
import AgencyBanner from "sections/Banner/AgencyBanner";
import AppBanner from "sections/Banner/AppBanner";
import ChatBanner from "sections/Banner/ChatBanner";
import CloudBanner from "sections/Banner/CloudBanner";
import CrmBanner from "sections/Banner/CrmBanner";
import DesignBanner from "sections/Banner/DesignBanner";
import ErpBanner from "sections/Banner/ErpBanner";
import EventBanner from "sections/Banner/EventBanner";
import HostingBanner from "sections/Banner/HostingBanner";
import HRBanner from "sections/Banner/HRBanner";
import PaymentBanner from "sections/Banner/PaymentBanner";
import SecurityBanner from "sections/Banner/SecurityBanner";
import SoftwareDarkBanner from "sections/Banner/SoftwareDarkBanner";
import StartupBanner from "sections/Banner/StartupBanner";
import SupportBanner from "sections/Banner/SupportBanner";
import TrackingBanner from "sections/Banner/TrackingBanner";
import BannerData from "sections/Banner/BannerData";
import Layout from "layouts/Layout";

function BannerSectionsSample() {
    return (
        <Layout>
            <AgencyBanner
                title={BannerData.AgencyText.title}
                p={BannerData.AgencyText.description}
                image={BannerData.AgencyImage}
                BannerData={BannerData}
            />
            <AppBanner
                title={"Une application qui accompagne votre activité professionnelle"}
            />
            <ChatBanner
                title={`Engage your website visitors using <strong>Live Chat</strong>`}
            />
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
            <CrmBanner
                BannerData={BannerData}
                title={`Ready to see <br/><span>SaasLand</span> in Action?`}
                p={`Cup of tea my lady a blinding shot lost the plot spend a penny, only a quid bog-standard in my flat, morish chinwag sloshed. Cheeky chap old charles dropped a clanger.`}
                image={{
                    src: '/img/new/startup_banner_img.png',
                    alt: 'Crm Banner'
                }}
                buttonLink={{
                    href: '/#',
                    target: '_self',
                    label: 'Sign Up',
                    iconClass: 'ti-arrow-right'
                }}
            />
            <DesignBanner/>
            <ErpBanner
                title={`Cloud ERP Software for Small and medium business`}
                p={`A simple and powerful erp software for Manufacturing, Distribution and Services.`}
                buttonLink={{
                    href: '/#',
                    label: 'Try for free',
                    target: '_self'
                }}
                image={{
                    src: "/img/erp-home/erp_dashboard.jpg",
                    alt: "Erp dashboard"
                }}
                clouds={5}
            />
            <EventBanner
                event={{
                    date: `January 24, 2020`,
                    title: `<span>Digital </span>Marketing<br/> Conference <span>2019</span>`
                }}
                buttonLink={{
                    href: '/#',
                    target: '_self',
                    label: 'Register Now'
                }}
                iconButtonLink={{
                    href: '/#',
                    target: '_self',
                    label: 'How we Work',
                    iconClass: 'arrow_triangle-right_alt2'
                }}
                backgroundImage={`/img/home-event/banner_bg.jpg`}
            />
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
            <HRBanner
                title={`<span>Build powerful apps</span> using the fastest API for messaging`}
                p={`Walking on water and developing software from a specification are easy.`}
            />
            <PaymentBanner/>
            <SecurityBanner
                title={`Your Unified Solution For PC Security and Performance`}
                p={`Download Free Antivirus and System Optimization Utility`}
                imageShape={{
                    src: "/img/home-security/shap.png",
                    alt: "Security banner",
                    title: "Security banner"
                }}
                image={{
                    src: "/img/home-security/banner.png",
                    alt: "Security banner",
                    title: "Security banner"
                }}
                buttons={[
                    {
                        href: "/#",
                        classNames: "btn_hover app_btn",
                        label: "Free download",
                    },
                    {
                        href: "/#",
                        classNames: "w_btn",
                        label: "Windows 10",
                        imageSrc: "/img/home-security/windows_icon.png"
                    },
                    {
                        href: "/#",
                        classNames: "w_btn",
                        label: "Apple MacOS",
                        imageSrc: "/img/home-security/apple_icon.png"
                    },
                ]}
                shapes={true}
            />
            <SoftwareDarkBanner
                title={`We are building software to Help`}
                p={`Why I say old chap that is spiffing off his nut arse pear shaped plastered Jeffrey bodge<br/> barney some dodgy.`}
                buttonLink={{
                    href: '/#',
                    target: '_self',
                    label: 'Get Started'
                }}
                image={{
                    src: "/img/home6/dashboard.jpg",
                    alt: "Dashboard"
                }}
            />
            <StartupBanner/>
            <SupportBanner
                title={`Un support de haute qualité`}
                p={`lorem`}
                image={{
                    src: '/img/home3/prototype_banner_img.png',
                    alt: 'Support'
                }}
                form
            />
            <TrackingBanner
                title={`Spend less <strong>time tracking</strong>`}
                p={`Track your time and watch your productivity soar!`}
                image={{
                    src: "/img/home-tracking/tracking_banner_img.png",
                    alt: "Tracking banner"
                }}
            />
        </Layout>
    )
}

export default BannerSectionsSample;
