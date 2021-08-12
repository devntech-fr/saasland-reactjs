import React from "react";
import AppFeatures from "../sections/Features/AppFeatures";
import AppFeaturesTwo from "../sections/Features/AppFeaturesTwo";
import ChatFeatures from "../sections/Features/ChatFeatures";
import CloudFeatures from "../sections/Features/CloudFeatures";
import CloudFeaturesTwo from "../sections/Features/CloudFeaturesTwo";
import CoreFeatures from "../sections/Features/CoreFeatures";
import Designtab from "../sections/Features/Designtab";
import ErpFeatures from "../sections/Features/ErpFeatures";
import EventFeatures from "../sections/Features/EventFeatures";
import Features from "../sections/Features/Features";
import HostingPlan from "../sections/Features/HostingPlan";
import PaymentFeatures from "../sections/Features/PaymentFeatures";
import SecurityFeatures from "../sections/Features/SecurityFeatures";
import SoftwareFeatures from "../sections/Features/SoftwareFeatures";
import StartupFeatures from "../sections/Features/StartupFeatures";
import TrackingProduct from "../sections/Features/TrackingProduct";

function FeaturesSectionsSample() {
    return (
        <div className="body_wrapper">
            <AppFeatures/>
            <AppFeaturesTwo/>
            <ChatFeatures rowClass='flex-row-reverse' pClass="pr_70" col1="col-lg-6 offset-lg-1" col2="col-lg-5" icon="chat_icon.png" img1="dot.png" img2="chat_02.png" img3="chat_01.png" titleSmall="Move deals" titlebig="through your funnel – fast"
                          p="Real-time tools and rich insights mean our support solution amplifies your team for an unbeatable experience." url="#"/>
            <CloudFeatures/>
            <CloudFeaturesTwo/>
            <CoreFeatures/>
            <Designtab/>
            <ErpFeatures/>
            <EventFeatures/>
            <Features/>
            <PaymentFeatures/>
            <SecurityFeatures/>
            <SoftwareFeatures/>
            <StartupFeatures/>
            <TrackingProduct/>
        </div>
    )
}

export default FeaturesSectionsSample;
