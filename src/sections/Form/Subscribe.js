import React, {Component} from 'react';
import Testimonial from 'sections/Testimonial/Testimonials';
import SeoFact from "sections/Fact/SeoFact";
import SeoPartnerLogo from "sections/PartnerLogo/SeoPartnerLogo";
import SeoAction from "sections/CallToAction/SeoAction";
import CaseStudies from "sections/CaseStudy/CaseStudies";

class Subscribe extends Component {
    render(){
        let FooterData = this.props.FooterData;
        return(
            <React.Fragment>
                <CaseStudies/>
                <SeoFact/>
                <Testimonial.default tClass="testimonial_area sec_pad" FooterData={FooterData}/>
                <SeoPartnerLogo/>
                <SeoAction/>
            </React.Fragment>
        )
    }
}

export default Subscribe;
