import React from 'react';
import Layout from "layouts/Layout";
import CrmBanner from 'sections/Banner/CrmBanner';
import BannerData from "sections/Banner/BannerData";
import StartupFeatures from 'sections/Features/StartupFeatures';
import StartupService from 'sections/Service/Sservice/StartupService';
import StartupTestimonial from 'sections/Testimonial/StartupTestimonial';
import CircularCounterProgressbar from 'sections/Counter/CircularCounterProgressbar';
import FooterData from 'sections/Footer/FooterData';
import StartupServiceItem from "sections/Service/Sservice/StartupServiceItem";

const HomeCRM = () => {
    return(
        <Layout variant={'crm'}>
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
            <StartupFeatures/>
            <StartupService title={`User - friendly experience for <br/> your attendies`}>
                <StartupServiceItem icon="icon-badge" text="You events" description="Every event at your fingertip"/>
                <StartupServiceItem iconClass="icon_two" icon="icon-bell" text="Notifications" description="Every event at your fingertip"/>
                <StartupServiceItem iconClass="icon_three" icon="icon-layers" text="Sessions" description="Every event at your fingertip"/>
                <StartupServiceItem iconClass="icon_four" icon="icon-screen-tablet" text="Interactions" description="Every event at your fingertip"/>
            </StartupService>
            <CircularCounterProgressbar title={`Measure and increase <br/> your reach`}/>
            <StartupTestimonial
                tClass="testimonial_area_four sec_pad"
                FooterData={FooterData}
                title={`Check testimonials for<br/> our satisfied clients`}
                p={`That ummm I'm telling Why say bleeder smashing lemon squeezy tosser, cheesed off dropped.`}
            />
        </Layout>
    )
}

const keywords = ['crm', 'home'];

export default HomeCRM;
