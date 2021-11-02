import React from 'react';
import RichContent from "components/Content/RichContent";

class SecurityPrice extends RichContent {
    constructor(props){
        super(props);
    }
    render(){
        const { children } = this.props;
        return(
            <section className="pricing_area_four sec_pad">
            <div className="container">
                <div className="hosting_title security_title text-center">
                    <h2 className="wow fadeInUp" data-wow-delay="0.2s" dangerouslySetInnerHTML={this.displayTitle()}></h2>
                </div>
                {children}
            </div>
        </section>
        )
    }
}
export default SecurityPrice;

SecurityPrice.defaultProps = {
    title: `<span>SaasLand Package.</span> Free essentials or ultimate protection ?`
}
