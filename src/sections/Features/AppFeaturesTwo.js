import React from 'react';
import RichContent from "components/Content/RichContent";
import Reveal from "react-reveal"
import AppFeaturedItem from "components/Feature/AppFeaturedItem";
import PropTypes from "prop-types";
import CallToActionButton from "types/CallToActionButton";
import OnePageMenu from "components/Navbar/OnePageMenu";

class ParallaxSetting {
    start = 700;
    duration = 100;
    // properties = ParallaxProperty[];
}
class ParallaxProperty {
    startValue = 100;
    endValue = 30;
    property = "translateY";
}

class AppFeaturesTwo extends RichContent {
    render(){
        const { title, p, buttonLink, children } = this.props;
        return(
            <section className="app_featured_area" id="features">
                <div className="container">
                    <div className="row flex-row-reverse app_feature_info">
                        <div className="col-lg-6">
                            <div className="app_fetured_item">{children}</div>
                        </div>
                        <div className="col-lg-6">
                          <Reveal bottom cascade>
                              <div className="app_featured_content">
                                <h2 className="f_p f_size_30 f_700 t_color3 l_height45 pr_70 mb-30" dangerouslySetInnerHTML={this.displayTitle(title)}></h2>
                                <p className="f_400" dangerouslySetInnerHTML={this.displayParagraph(p)}></p>
                                  {
                                      buttonLink &&
                                      <a href={buttonLink.href} target={buttonLink.target} className="learn_btn_two">{buttonLink.label} <i className="ti-arrow-right"></i></a>
                                  }
                              </div>
                          </Reveal>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
export default AppFeaturesTwo;

AppFeaturesTwo.propTypes = {
    title: PropTypes.string.isRequired,
    p: PropTypes.string.isRequired,
    features: PropTypes.arrayOf(AppFeaturedItem)
}
