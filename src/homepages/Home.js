import React from 'react';
import Header from 'components/Header/Header';
import DesignBanner from 'sections/Banner/DesignBanner';
import Services from 'sections/Service/Services';
import ServiceData from "sections/Service/ServiceData";
import Testimonial from 'sections/Testimonial/Testimonials';
import SeoFact from "sections/Fact/SeoFact";
import SeoPartnerLogo from "sections/PartnerLogo/SeoPartnerLogo";
import SeoAction from "sections/CallToAction/SeoAction";
import CaseStudies from "sections/CaseStudy/CaseStudies";
import Footer from 'sections/Footer/Footer';
import FooterData from 'sections/Footer/FooterData';

function Home() {
    const AppWorkSection = Services.app;
    return (
        <div className="body_wrapper">
            <Header 
                sticky={true} 
                variant={'primary'}
                navigationLinks={[
                    {
                        label: 'Accueil',
                        href: '/',
                        isActive: false
                    },
                    {
                        label: 'Services',
                        href: '/services',
                        isActive: false
                    },
                    {
                        label: `L'entreprise`,
                        href: '/entreprise',
                        isActive: false
                    },
                    {
                        label: `Réalisations`,
                        href: '/realisations',
                        isActive: false
                    },
                    {
                        label: `Contact`,
                        href: '/contact',
                        isActive: false
                    },
                ]}
            />
            <DesignBanner
                title={`Drive More Customers<br/> Through Digital`}
                p={`Chap fantastic skive off chancer knees up starkers easy peasy up the<br/> kyver David, bleeding the BBC tomfoolery chimney.`}
                buttons={[
                    {
                        href: "/#get-started",
                        className: "seo_btn seo_btn_one btn_hover wow fadeInLeft",
                        label: "Get started"
                    },
                    {
                        href: "/#learn-more",
                        className: "seo_btn seo_btn_two btn_hover wow fadeInRight",
                        label: "Learn more"
                    },
                ]}
            />
            <AppWorkSection services={ServiceData.work}/>
            <CaseStudies
                case_collection={[
                    {
                        id: 1,
                        image: '../img/seo/studies_img_one.jpg',
                        title: 'JAMstack',
                        tags: [
                            {
                                href: '/#',
                                name: 'javascript'
                            },
                            {
                                href: '/#',
                                name: 'strapi'
                            },
                        ],
                    },
                    {
                        id: 2,
                        image: '../img/seo/studies_img_two.jpg',
                        title: 'API REST',
                        tags: [
                            {
                                href: '/#',
                                name: 'php'
                            },
                            {
                                href: '/#',
                                name: 'symfony'
                            },
                        ],
                    },
                    {
                        id: 3,
                        image: '../img/seo/studies_img_three.jpg',
                        title: 'Headless',
                        tags: [
                            {
                                href: '/#',
                                name: 'wordpress'
                            },
                            {
                                href: '/#',
                                name: 'nextjs'
                            },
                        ],
                    },
                ]}
            />
            <SeoFact
                facts={[
                    {
                        label: 'Experience',
                        counter: 222
                    },
                    {
                        label: 'Happy Clients',
                        counter: 333
                    },
                    {
                        label: 'Projects',
                        counter: 444
                    },
                    {
                        label: 'SEO Winners',
                        counter: 555
                    },
                ]}
            />
            <Testimonial.default 
                tClass="testimonial_area sec_pad" 
                testimonials={[
                    {
                    id: 1,
                    image: "new/member_01.jpg",
                    description: "He nicked it hanky panky Eaton naff it's your round quaint cheeky cheers, tomfoolery bonnet posh blimey what a plonker vagabond, zonked Elizabeth give us a bell.?",
                    authorName: "Phillip Anthropy",
                    authorPost: "UI/UX designer", 
                    },
                    {
                    id: 2,
                    image: "new/member_01.jpg",
                    description: "He nicked it hanky panky Eaton naff it's your round quaint cheeky cheers, tomfoolery bonnet posh blimey what a plonker vagabond, zonked Elizabeth give us a bell.?",
                    authorName: "Phillip Anthropy",
                    authorPost: "UI/UX designer", 
                    },
                    {
                    id: 3,
                    image: "new/member_01.jpg",
                    description: "He nicked it hanky panky Eaton naff it's your round quaint cheeky cheers, tomfoolery bonnet posh blimey what a plonker vagabond, zonked Elizabeth give us a bell.?",
                    authorName: "Phillip Anthropy",
                    authorPost: "UI/UX designer", 
                    },
                    {
                    id: 4,
                    image: "new/member_01.jpg",
                    description: "He nicked it hanky panky Eaton naff it's your round quaint cheeky cheers, tomfoolery bonnet posh blimey what a plonker vagabond, zonked Elizabeth give us a bell.?",
                    authorName: "Phillip Anthropy",
                    authorPost: "UI/UX designer", 
                    }
                ]}/>
            <SeoPartnerLogo
                logo_collection={[
                    {
                        href: '/#',
                        image: '../img/seo/logo_01.png',
                    },
                    {
                        href: '/#',
                        image: '../img/seo/logo_02.png',
                    },
                    {
                        href: '/#',
                        image: '../img/seo/logo_03.png',
                    },
                    {
                        href: '/#',
                        image: '../img/seo/logo_04.png',
                    },
                    {
                        href: '/#',
                        image: '../img/seo/logo_05.png',
                    },
                ]}
            />
            <SeoAction
                title={`Ready to get started?<br/> lt's fast, free and very easy!`}
                button={{
                    href: '/#',
                    label: 'Get a free estimate !',
                    classNames: 'about_btn'
                }}
            />
            <Footer
                copywrite={`© SaasLand Inc.. 2019 All rights reserved.`}
            />
        </div>
    )
}

export default Home;
