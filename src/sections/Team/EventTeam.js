import React from 'react';
import RichContent from "components/Content/RichContent";

class EventTeam extends RichContent {
    render(){
        const { children } = this.props;
        return(
            <section className="event_team_area sec_pad">
            <div className="container">
                <div className="hosting_title security_title text-center">
                    <h2 className="wow fadeInUp" data-wow-delay="0.2s" dangerouslySetInnerHTML={this.displayTitle()}></h2>
                </div>
                {children}
            </div>
        </section>
        )
    }
}

export default EventTeam;
