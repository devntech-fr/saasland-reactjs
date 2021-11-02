import React from 'react';
import RichContent from "components/Content/RichContent";

class EventFeatures extends RichContent {
    render() {
        const { children } = this.props;
        return(
            <section className="event_features_area">
                <div className="container">
                    <div className="hosting_title security_title text-center">
                        <h2 className="wow fadeInUp" data-wow-delay="0.2s" dangerouslySetInnerHTML={this.displayTitle()}></h2>
                    </div>
                    <div className="row event_features_inner">
                        {children}
                    </div>
                </div>
            </section>
        )
    }
}
export default EventFeatures;
