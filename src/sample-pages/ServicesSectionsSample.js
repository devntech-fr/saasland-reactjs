import React from "react";
import AppWork from "sections/Service/AppWork";
import HRServices from "sections/Service/HRService";
import ServiceData from "sections/Service/ServiceData";
import PrototypeService from "sections/Service/Sservice/PrototypeService";
import CloudServices from "sections/Service/CloudServices";
import DarkSoftwareService from "sections/Service/DarkSoftwareService";
import ErpService from "sections/Service/ErpService";
import HostingFeatures from "sections/Service/HostingFeatures";
import MarketingService from "sections/Service/MarketingService";
import PaymentService from "sections/Service/PaymentService";
import SecurityService from "sections/Service/SecurityService";
import Services from "sections/Service/Services";

function ServicesSectionsSample() {
    return (
        <div className="body_wrapper">
            <AppWork ServiceData={ServiceData}/>
            <CloudServices/>
            <DarkSoftwareService/>
            <ErpService/>
            <HostingFeatures/>
            <HRServices ServiceData={ServiceData}/>
            <MarketingService ServiceData={ServiceData}/>
            <PaymentService ServiceData={ServiceData}/>
            <SecurityService/>
            <Services.default/>
            <PrototypeService/>
        </div>
    )
}

export default ServicesSectionsSample;
