import React from 'react';
import { displayTitle } from "components/Content/RichContent";

function SecurityFeatures({ title, children }) {
    return(
        <section className="h_security_area">
            <div className="container">
                <div className="hosting_title security_title text-center">
                    <h2 className="wow fadeInUp" data-wow-delay="0.2s" dangerouslySetInnerHTML={displayTitle(title)}></h2>
                </div>
                <div className="row">
                    {children}
                </div>
            </div>
        </section>
    )
}
export default SecurityFeatures;

SecurityFeatures.defaultProps = {
    title: `<span>Security</span> Total digital protection`
}
