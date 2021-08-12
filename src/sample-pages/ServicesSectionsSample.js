import React from "react";
import AppWork from "../sections/Service/AppWork";
import HRService from "../sections/Service/HRService";
import ServiceData from "../sections/Service/ServiceData";
import PrototypeService from "../sections/Service/Sservice/PrototypeService";
import CloudService from "../sections/Service/CloudService";
import DarkSoftwareService from "../sections/Service/DarkSoftwareService";
import ErpService from "../sections/Service/ErpService";
import HostingFeatures from "../sections/Service/HostingFeatures";
import MarketingService from "../sections/Service/MarketingService";
import PaymentService from "../sections/Service/PaymentService";
import SecurityService from "../sections/Service/SecurityService";
import Service from "../sections/Service/Service";

function ServicesSectionsSample() {
    return (
        <div className="body_wrapper">
            <AppWork ServiceData={ServiceData}/>
            <CloudService/>
            <DarkSoftwareService/>
            <ErpService/>
            <HostingFeatures/>
            <HRService ServiceData={ServiceData}/>
            <MarketingService ServiceData={ServiceData}/>
            <PaymentService ServiceData={ServiceData}/>
            <SecurityService/>
            <Service/>
            <PrototypeService/>
        </div>
    )
}

export default ServicesSectionsSample;
