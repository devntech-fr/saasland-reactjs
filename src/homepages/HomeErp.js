import React from 'react';
import ErpBanner from 'sections/Banner/ErpBanner';
import ErpService from 'sections/Service/ErpService';
import ErpAction from 'sections/CallToAction/ErpAction';
import ErpFeatures from 'sections/Features/ErpFeatures';
import ErpAnalytics from 'sections/Erp/ErpAnalytics';
import ErpCustomerLogo from 'sections/Erp/ErpCustomerLogo';
import ErpActionTwo from 'sections/CallToAction/ErpActionTwo';
import ErpTestimonial from 'sections/Testimonial/ErpTestimonial';
import Layout from "layouts/Layout";
import ErpFeatureItem from "sections/Features/ErpFeatureItem";
import ErpAnalyticsItem from "sections/Erp/ErpAnalyticsItem";
import ErpServiceItem from "sections/Service/ErpServiceItem";

const HomeErp = () => {
    return(
        <Layout variant={'erp'}>
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
            <ErpService>
                <ErpServiceItem itemClass="pr_70" sTitle="Secured Cloud" pText="Bloke fantastic bubble and squeak do one what a plonker nancy boy burke fanny around." icon="erp_icon1.png"/>
                <ErpServiceItem itemClass="pr_70 pl_10" sTitle="Single Platform" pText="Bloke fantastic bubble and squeak do one what a plonker nancy boy burke fanny around." icon="erp_icon2.png"/>
                <ErpServiceItem itemClass="pl_70" sTitle="Implement Yourself" pText="Bloke fantastic bubble and squeak do one what a plonker nancy boy burke fanny around." icon="erp_icon3.png"/>
                <ErpServiceItem itemClass="pr_70" sTitle="Multi Regional" pText="Bloke fantastic bubble and squeak do one what a plonker nancy boy burke fanny around." icon="erp_icon4.png"/>
                <ErpServiceItem itemClass="pl_10" sTitle="Quick Navigations" pText="Bloke fantastic bubble and squeak do one what a plonker nancy boy burke fanny around." icon="erp_icon5.png"/>
                <ErpServiceItem itemClass="pl_70" sTitle="Works in Web" pText="Bloke fantastic bubble and squeak do one what a plonker nancy boy burke fanny around." icon="erp_icon6.png"/>
            </ErpService>
            <ErpAction
                title={`Trusted by <strong>10,030+ Businesses</strong> over 160 Countries and 24+ Languages`}
                image={{
                    src: "/img/erp-home/action_img.png",
                    alt: "Erp Action"
                }}
            />
            <ErpFeatures>
                <ErpFeatureItem
                    reverse
                    roundClass="blue"
                    image={{ src: "/img/erp-home/crm_img1.jpg", alt: '' }}
                    title={`Nurture Your Customers Using Advanced CRM`}
                    p={`Cack brolly butty grub chancer smashing brilliant vagabond, chimney pot blower such a fibber ummm I'm telling chinwag he lost his bottle.!`}
                />
                <ErpFeatureItem
                    roundClass="blue"
                    image={{ src: "/img/erp-home/crm_img1.jpg", alt: '' }}
                    title={`Nurture Your Customers Using Advanced CRM`}
                    p={`Cack brolly butty grub chancer smashing brilliant vagabond, chimney pot blower such a fibber ummm I'm telling chinwag he lost his bottle.!`}
                />
            </ErpFeatures>
            <ErpAnalytics
                title={`Analytics`}
                p={`The full monty burke posh excuse my French Richard cheeky bobby spiffing crikey Why gormless, pear shaped.`}
            >
                <ErpAnalyticsItem
                    image={{ src: "/img/erp-home/settings1.png", alt: "Paramétrer" }}
                    text="Quick setup in five simple steps."
                    cols={4}
                />
                <ErpAnalyticsItem
                    image={{ src: "/img/erp-home/cloud-computing.png", alt: "Calculer" }}
                    text="Complete purchase history"
                    cols={4}
                />
                <ErpAnalyticsItem
                    image={{ src: "/img/erp-home/growth.png", alt: "Grandir" }}
                    text="Signup, No credit  card details required."
                    cols={4}
                />
            </ErpAnalytics>
            <ErpCustomerLogo
                title={`Great companies that <span className="icon_heart"></span> SaasLand ERP`}
                p={`Cack brolly butty grub chancer smashing brilliant vagabond, chimney pot blower such a fibber ummm I'm telling chinwag he lost his bottle nancy boy.`}
                buttonLink={{
                    href: '/#',
                    label: 'More Customers',
                    target: '_self'
                }}
            />
            <ErpTestimonial/>
            <ErpActionTwo
                title={`Experience a smarter way to close deals`}
                p={`With All-in-one<span>Business</span>Manager`}
                image={{
                    src: "/img/erp-home/rocket.png",
                    alt: "Rocket"
                }}
                buttonLink={{
                    href: '/#',
                    label: 'Get Started Free',
                    target: '_self'
                }}
            />
        </Layout>
    )
}

const keywords = ['erp', 'home'];

export default HomeErp;
