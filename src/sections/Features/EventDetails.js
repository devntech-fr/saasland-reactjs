import React from 'react';
import RichContent from "components/Content/RichContent";
import EventPromotion from "components/Event/EventPromotion";

class EventDetails extends RichContent {
    render() {
        return(
            <section className="event_promotion_area">
                <div className="container">
                    <div className="hosting_title security_title text-center">
                        <h2 className="wow fadeInUp" data-wow-delay="0.2s" dangerouslySetInnerHTML={this.displayTitle()}></h2>
                    </div>
                    <EventPromotion
                        image={{
                            src: '/img/home-event/promo.jpg',
                            alt: 'Promo'
                        }}
                        tag={`Workshop`}
                        date={`24 - 06 - 2019`}
                        title={`The Impact of Event Marketing`}
                        buttonLink={{
                            label: 'Buy Tickets',
                            href: '/#',
                            target: '_self'
                        }}
                        description={`Only a quid it's all gone to pot say codswallop loo tinkety tonk old fruit Oxford Why, porkies cheeky bugger tickety-boo butty a load of old tosh bleeder, down the pub well owt to do with me is chip shop gormless. I don't want no agro bleeder tomfoolery knees up what a load of rubbish the full monty.`}
                    />
                </div>
            </section>
        )
    }
}
export default EventDetails;
