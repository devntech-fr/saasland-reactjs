import React from "react";
import EventBanner from "sections/Banner/EventBanner";
import EventCount from "sections/Service/Sservice/EventCount";
import EventAbout from "sections/About/EventAbout";
import EventTeam from "sections/Team/EventTeam";
import EventFeatures from "sections/Features/EventFeatures";
import EventDetails from "sections/Features/EventDetails";
import ScheduleTab from "sections/Product/ScheduleTab";
import EventPrice from "sections/Event/EventPrice";
import EventFact from "sections/Event/EventFact";
import EventGallery from "sections/Portfolio/EventGallery";
import EventSponsor from "sections/Event/EventSponsor";
import EventLocation from "sections/Event/EventLocation";
import Layout from "layouts/Layout";
import EventTeamItem from "components/Event/EventTeamItem";
import Slider from "react-slick";
import EventFeatureItem from "sections/Features/EventFeatureItem";
import SeoFact from "components/Seo/SeoFact";
import EventGalleryItem from "sections/Portfolio/EventGalleryItem";

class HomeEvent extends React.Component {
    render() {
        const eventTeamSliderSettings = {
            dots: true,
            infinite: true,
            speed: 500,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 2000,
            slidesToShow: 3,
            slidesToScroll: 1,
        };
        return (
            <Layout variant={'event'}>
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
                <EventCount title={`Count Every Second Until the <span>Event</span>`}/>
                <EventAbout
                    title={`Web Design Conference 2019`}
                    p={`So I said knees up Jeffrey grub me old mucker Oxford spend a penny, pukka codswallop fantastic lost the plot Queen's English. Daft he legged it mufty chancer porkies burke blatant pardon me lavatory.`}
                    image={{
                        src: '/img/home-event/about.jpg',
                        alt: 'about event'
                    }}
                />
                <EventTeam title={`<span>Speakers</span> Who's Speaking`}>
                    <Slider ref={c => (this.slider = c)} className="event_team_slider" {...eventTeamSliderSettings}>
                        <EventTeamItem image="team1.jpg" name="John Deo" post="Wp Developer"/>
                        <EventTeamItem image="team2.jpg" name="Jason Response" post="Graphic Design"/>
                        <EventTeamItem image="team3.jpg" name="John Deo" post="Wp Developer"/>
                        <EventTeamItem image="team1.jpg" name="John Deo" post="Wp Developer"/>
                        <EventTeamItem image="team2.jpg" name="John Deo" post="Wp Developer"/>
                    </Slider>
                </EventTeam>
                <EventFeatures title={`<span>The Event</span>SaasLand in Town`}>
                    <EventFeatureItem
                        image={{
                            src: "leader.png",
                            alt: "leader"
                        }}
                        iconClass={`icon_plus`}
                        title="Meet the Leaders"
                        p="Lost the plot lurgy on your bike mate Oxford hanky panky blow off haggle golly gosh do one."
                        iconButtonLink={{
                            href: '/#',
                            target: '_self',
                            label: 'Lead this'
                        }}
                    />
                    <EventFeatureItem
                        image={{
                            src: "meetup.png",
                            alt: "meetup"
                        }}
                        iconClass={`icon_plus`}
                        title="Day Long Meetup"
                        p="Lost the plot lurgy on your bike mate Oxford hanky panky blow off haggle golly gosh do one."
                        iconButtonLink={{
                            href: '/#',
                            target: '_self',
                            label: 'Buy Tickets'
                        }}
                    />
                    <EventFeatureItem
                        image={{
                            src: "chat.png",
                            alt: "chat"
                        }}
                        iconClass={`icon_plus`}
                        title="Ask Questions"
                        p="Lost the plot lurgy on your bike mate Oxford hanky panky blow off haggle golly gosh do one."
                        iconButtonLink={{
                            href: '/#',
                            target: '_self',
                            label: 'Buy Tickets'
                        }}
                    />
                </EventFeatures>
                <EventDetails
                    title={`<span>Main Discussions</span>SaasLand Visual Studio`}
                />
                <ScheduleTab
                    title={`<span>Schedule</span>Conference Schedule`}
                />
                <EventPrice
                title={`<span>14-day free trial.</span> No credit card required.`}
                />
                <EventFact title={`<span>Over 1200+</span> completed work & Still counting.`}>
                    <SeoFact
                        id={`one`}
                        number={693}
                        label={`Happy Clients`}
                    />
                    <SeoFact
                        id={`two`}
                        number={300}
                        label={`Projects`}
                    />
                    <SeoFact
                        id={`three`}
                        number={300}
                        label={`SEO Winners`}
                    />
                    <SeoFact
                        id={`four`}
                        number={250}
                        label={`Coffee`}
                    />
                </EventFact>
                <EventGallery>
                    <EventGalleryItem image="image_01.jpg" title="Apple Mobile Mockup" bname="Branding" bname2="Fashion"/>
                    <EventGalleryItem image="image_02.jpg" title="Apple Mobile Mockup" bname="Branding" bname2="Fashion"/>
                    <EventGalleryItem image="image_03.jpg" title="Apple Mobile Mockup" bname="Branding" bname2="Fashion"/>
                    <EventGalleryItem image="image_04.jpg" title="Apple Mobile Mockup" bname="Branding" bname2="Fashion"/>
                    <EventGalleryItem image="image_05.jpg" title="Apple Mobile Mockup" bname="Branding" bname2="Fashion"/>
                    <EventGalleryItem image="image_06.jpg" title="Apple Mobile Mockup" bname="Branding" bname2="Fashion"/>
                </EventGallery>
                <EventSponsor title={`<span>Lovely Clients</span> Offcial Sponsors`} />
                <EventLocation
                    title={`Venue Infos`}
                    p={`Mirpur 1620 Collins Street West <br />Victoria 406 New York`}
                    coordinates={{
                        email: 'devntech@protonmail.com',
                        mobile: '0665546677'
                    }}
                    socialLinks={[
                        {
                            id: 1,
                            icon: 'facebook',
                            href: '/#',
                            target: '_self'
                        }
                    ]}
                />
            </Layout>
        );
    }
}

const keywords = ['event','home'];

export default HomeEvent;
