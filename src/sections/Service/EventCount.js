import React from 'react';
import EventTimer from './EventTimer';
import RichContent from "components/Content/RichContent";

class EventCount extends RichContent {
   render() {
       return (
           <section className="event_counter_area">
               <div className="container">
                   <div className="row align-items-center">
                       <div className="col-lg-4">
                           <div className="event_text wow fadeInLeft">
                               <h3 dangerouslySetInnerHTML={this.displayTitle()}></h3>
                           </div>
                       </div>
                       <div className="col-lg-8">
                           <div className="event_countdown wow fadeInRight">
                               <div className="event_counter">
                                   <EventTimer
                                       deadline={`Oct 08, 2021 21:00:00`}
                                   />
                               </div>
                           </div>
                       </div>
                   </div>
               </div>
           </section>
       )
   }
}
export default EventCount;
