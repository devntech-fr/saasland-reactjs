import React from 'react';
import RichContent from "components/Content/RichContent";

class EventBanner extends RichContent {
    render() {
        const { event, buttonLink, iconButtonLink, backgroundImage } = this.props;
        return(
            <section className="event_banner_area">
                <div className="parallax-effect" style={{backgroundImage: "url(" + (backgroundImage) + ")"}}></div>
                <div className="container">
                    <div className="event_banner_content">
                        <div className="round wow zoomIn" data-wow-delay="0.2s"></div>
                        <h6 className="wow fadeInUp" data-wow-delay="0.6s">{event.date}</h6>
                        <h2 className="wow fadeInUp" data-wow-delay="0.8s" dangerouslySetInnerHTML={this.displayTitle(event.title)}></h2>
                        {
                            buttonLink &&
                            (
                                <a className="event_btn btn_hover wow fadeInLeft" data-wow-delay="0.9s" href={buttonLink.href} target={buttonLink.target}>{buttonLink.label}</a>
                            )
                        }
                        {
                            iconButtonLink &&
                            (
                                <a className="event_btn event_btn_two btn_hover wow fadeInRight" data-wow-delay="0.9s" href={iconButtonLink.href} target={iconButtonLink.target}>
                                    <i className={iconButtonLink.iconClass}></i>
                                    {iconButtonLink.label}
                                </a>
                            )
                        }
                    </div>
                </div>
            </section>
        )
    }
}

export default EventBanner;
