import React from "react";
import ChatFeatureItem from "components/Feature/ChatFeatureItem";
import { displayTitle } from "components/Content/RichContent";

const CoreFeatures = ({ title, children }) => {
  return (
    <section className="chat_core_features_area sec_pad">
      <div className="container">
        <div className="hosting_title chat_title text-center">
          <h2 className="wow fadeInUp" data-wow-delay="0.2s" dangerouslySetInnerHTML={displayTitle(title)}>
          </h2>
        </div>
        <div className="row">
            {children}
        </div>
      </div>
    </section>
  );
};
export default CoreFeatures;

CoreFeatures.defaultProps = {
    title: `Core Features<br /> That makes us <span>top notch</span>`
}
