import AgencyFeatures from "./AgencyFeatures";
import AppFeatures from "sections/Features/AppFeatures";
import AppFeaturesTwo from "sections/Features/AppFeaturesTwo";
import ChatFeatures from "sections/Features/ChatFeatures";
import CloudFeatures from "sections/Features/CloudFeatures";
import CoreFeatures from "sections/Features/CoreFeatures";
import DesignTab from "sections/Features/DesignTab";
import ErpFeatures from "sections/Features/ErpFeatures";
import EventFeatures from "sections/Features/EventFeatures";
import HostingPlan from "sections/Features/HostingPlan";
import HostingFeatures from "sections/Features/HostingFeatures";
import HostingFeaturesTwo from "sections/Features/HostingFeaturesTwo";
import PaymentFeatures from "sections/Features/PaymentFeatures";
import SecurityFeatures from "sections/Features/SecurityFeatures";
import SecurityPowerFeatures from "sections/Features/SecurityPowerFeatures";
import SecurityPrice from "sections/Features/SecurityPrice";
import {SeoFeatures, SeoFeaturesReverse} from "sections/Features/SeoFeatures";
import SoftwareFeatures from "sections/Features/SoftwareFeatures";
import StartupFeatures from "sections/Features/StartupFeatures";
import TrackingProduct from "sections/Features/TrackingProduct";

export default {
    default: AgencyFeatures,
    agency: AgencyFeatures,
    app: AppFeatures,
    appTwo: AppFeaturesTwo,
    chat: ChatFeatures,
    cloud: CloudFeatures,
    core: CoreFeatures,
    design: DesignTab,
    erp: ErpFeatures,
    event: EventFeatures,
    hosting: HostingFeatures,
    hosting_two: HostingFeaturesTwo,
    hosting_plan: HostingPlan,
    payment: PaymentFeatures,
    security: SecurityFeatures,
    securityPrice: SecurityPrice,
    securityPower: SecurityPowerFeatures,
    software: SoftwareFeatures,
    startup: StartupFeatures,
    seo: SeoFeatures,
    seoReverse: SeoFeaturesReverse,
    tracking: TrackingProduct
}
