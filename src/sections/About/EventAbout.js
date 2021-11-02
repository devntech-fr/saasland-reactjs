import React from 'react';
import RichContent from "components/Content/RichContent";
import AboutEvent from "components/Event/AboutEvent";

class EventAbout extends RichContent {
    render() {
        const { image } = this.props;
        return(
            <section className="event_about_area">
                <div className="container">
                    <div className="row align-items-center flex-row-reverse">
                        <div className="col-lg-6">
                            <div className="event_about_img">
                                {
                                    image && (
                                        <img className="wow fadeInRight" data-wow-delay="0.2s" src={image.src} alt={image.alt}/>
                                    )
                                }
                                <div className="about_bg"></div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="event_about_content">
                                <h2 className="wow fadeInUp" dangerouslySetInnerHTML={this.displayTitle()}></h2>
                                <p className="wow fadeInUp" data-wow-delay="0.2s" dangerouslySetInnerHTML={this.displayParagraph()}></p>
                                <div className="row">
                                    <div className="col-6">
                                        <AboutEvent
                                            title={`Where`}
                                            p={`Golly gosh the wireless posh loo smashing.`}
                                            image={{
                                                src: '/img/home-event/marker.png',
                                                alt: 'Where'
                                            }}
                                        />
                                    </div>
                                    <div className="col-6">
                                        <AboutEvent
                                            title={`When`}
                                            p={`Sunday to Wednesday April 24 to 04, 2019`}
                                            image={{
                                                src: '/img/home-event/timer.png',
                                                alt: 'When'
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default EventAbout;
