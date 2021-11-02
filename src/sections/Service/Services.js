import AppWork from "sections/Service/AppWork";
import CloudServices from "sections/Service/CloudServices";
import DarkSoftwareService from "sections/Service/DarkSoftwareService";
import ErpService from "sections/Service/ErpService";
import HostingFeatures from "sections/Service/HostingFeatures";
import HostingService from "sections/Service/HostingService";
import HRServices from "sections/Service/HRServices";
import MarketingService from "sections/Service/MarketingService";
import PaymentService from "sections/Service/PaymentService";
import SecurityService from "sections/Service/SecurityService";
import SeoService from "sections/Service/SeoService";

export default {
    default: AppWork,
    app: AppWork,
    cloud: CloudServices,
    software: DarkSoftwareService,
    erp: ErpService,
    hosting: HostingFeatures,
    hostingService: HostingService,
    hr: HRServices,
    marketing: MarketingService,
    payment: PaymentService,
    security: SecurityService,
    seo: SeoService
}
