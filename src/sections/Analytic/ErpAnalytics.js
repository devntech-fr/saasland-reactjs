import React from 'react';
import SectionTitle from "sections/Title/SectionTitle";
import ErpAnalyticsItem from "sections/Erp/ErpAnalyticsItem";

function ErpAnalytics({ title, p, children }) {
    return(
        <section className="erp_analytics_area">
            <div className="container">
                <SectionTitle title={title} p={p}
                 sClass="hosting_title erp_title text-center"/>
                <div className="row">
                    { children }
                </div>
            </div>
        </section>
    )
}
export default ErpAnalytics;
