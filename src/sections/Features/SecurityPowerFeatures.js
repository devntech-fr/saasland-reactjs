import React from 'react';
import { displayTitle } from "components/Content/RichContent";

function SecurityPowerFeatures({ title, children }) {
    return (
        <section className="security_features_area">
            <div className="container">
                <div className="hosting_title security_title text-center">
                    <h2 className="wow fadeInUp" data-wow-delay="0.2s" dangerouslySetInnerHTML={displayTitle(title)}></h2>
                </div>
                <div className="security_features_inner">
                    {children}
                </div>
            </div>
        </section>
    )
}

export default SecurityPowerFeatures;

SecurityPowerFeatures.defaultProps = {
    title:`<span>Popular</span> Simple yet Powerful`,
}
