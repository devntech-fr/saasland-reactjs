import React from 'react';
import SoftwareDarkBanner from 'sections/Banner/SoftwareDarkBanner';
import BannerData from 'sections/Banner/BannerData';
import DarkSoftwareService from 'sections/Service/DarkSoftwareService';
import SoftwareDarkAction from 'sections/CallToAction/SoftwareDarkAction';
import SoftwareFeatures from 'sections/Features/SoftwareFeatures';
import SecurityFact from 'sections/Security/SecurityFact';
import SecurityTestimonial from 'sections/Testimonial/SecurityTestimonial';
import SecurityPartnerLogo from 'sections/Security/SecurityPartnerLogo';
import Layout from "layouts/Layout";
import DarkSoftwareServiceItem from "sections/Service/DarkSoftwareServiceItem";

const HomeSoftwareDark = () => {
    return(
        <Layout variant={'software'}>
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
            <DarkSoftwareService
                title={`The featurers of the best ever Saas`}
                p={`Why I say old chap that is spiffing barney, nancy boy bleeder chimney pot Richard cheers the little rotter so I said, easy peasy buggered blower bevvy A bit of how's your father he nicked it arse over tit.`}
                buttonLink={{
                    href: "/#",
                    target: '_self',
                    label: 'View All Features'
                }}
            >
                <DarkSoftwareServiceItem fClass="s_featured_one" icon="ti-package" thead="Full of Features" text="Crikey blow off chap knackered gosh bobby geeza gormless well, Charles cheeky bugger I cor blimey guvnor hanky panky jolly good."/>
                <DarkSoftwareServiceItem fClass="s_featured_two" icon="ti-cloud-down" thead="Cloud Services" text="Crikey blow off chap knackered gosh bobby geeza gormless well, Charles cheeky bugger I cor blimey guvnor hanky panky jolly good."/>
                <DarkSoftwareServiceItem fClass="s_featured_three" icon="ti-files" thead="Well Ducumented" text="Crikey blow off chap knackered gosh bobby geeza gormless well, Charles cheeky bugger I cor blimey guvnor hanky panky jolly good."/>
                <DarkSoftwareServiceItem fClass="s_featured_four" icon="ti-server" thead="Unlimited Store" text="Crikey blow off chap knackered gosh bobby geeza gormless well, Charles cheeky bugger I cor blimey guvnor hanky panky jolly good."/>
            </DarkSoftwareService>
            <SoftwareDarkAction
                title={`Trusted by 800+ worldwide companies`}
                p={`The BBC naff what a plonker lurgy on your bike mate bubble and squeak David, boot only a quid Richard arse happy days barmy.`}
                form
            />
            <SoftwareFeatures
                title={`Build your brand<br/> Automate your marketing`}
                p={`Why I say old chap that is spiffing barney, nancy boy bleeder chimney pot Richard cheers the little rotter so I said, easy peasy buggered blower bevvy A bit of how's your father he nicked it arse over tit.`}
                image={{
                    src: '/img/home6/featured_img_one.jpg',
                    alt: 'Automate your marketing'
                }}
                buttonLink={{
                    href: '/#',
                    target: '_self',
                    label: 'Browse Free Demo'
                }}
            />
            <SoftwareFeatures
                title={`Build your brand<br/> Automate your marketing`}
                p={`Why I say old chap that is spiffing barney, nancy boy bleeder chimney pot Richard cheers the little rotter so I said, easy peasy buggered blower bevvy A bit of how's your father he nicked it arse over tit.`}
                image={{
                    src: '/img/home6/featured_img_two.jpg',
                    alt: 'Automate your marketing'
                }}
                buttonLink={{
                    href: '/#',
                    target: '_self',
                    label: 'Browse Free Demo'
                }}
                reverse
            />
            <SecurityFact
                title={`Trusted`}
                p={`Why I say old chap that is spiffing barney, nancy boy bleeder chimney pot Richard cheers the little rotter so I said, easy peasy buggered blower bevvy A bit of how's your father he nicked it arse over tit.`}
                image={{
                    src: '/img/home6/trust_img2.png',
                    alt: 'Trusted'
                }}
            />
            <SecurityTestimonial
                title={`Don't just take our word for it`}
                p={`The BBC naff what a plonker lurgy on your bike mate bubble and squeak David, boot only a quid Richard arse happy.`}
            />
            <SecurityPartnerLogo sClass="partner_logo_area_three dk_bg_two" BannerData={BannerData}/>
        </Layout>
    )
}

const keywords = ['software','home'];

export default HomeSoftwareDark;
