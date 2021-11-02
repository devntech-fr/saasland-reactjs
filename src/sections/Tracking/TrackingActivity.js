import React from 'react';
import TrackingActivityItem from "components/Tracking/TrackingActivityItem";

const TrackingActivity =()=>{
    return(
        <section className="tracking_activity_area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <TrackingActivityItem
                            image={{
                                src: "/img/home-tracking/activity_icon.png",
                                alt: ""
                            }}
                            title={`Track Activity Live`}
                            p={`Twit cras excuse my French matie boy grub it’s all gone to`}
                        />
                    </div>
                    <div className="col-lg-4">
                        <TrackingActivityItem
                            image={{
                                src: "/img/home-tracking/time_icon.png",
                                alt: ""
                            }}
                            title={`Time Efficiency`}
                            p={`Twit cras excuse my French matie boy grub it’s all gone to`}
                        />
                    </div>
                    <div className="col-lg-4">
                        <TrackingActivityItem
                            image={{
                                src: "/img/home-tracking/analyze_icon.png",
                                alt: ""
                            }}
                            title={`Analyze Input`}
                            p={`Twit cras excuse my French matie boy grub it’s all gone to`}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TrackingActivity;
