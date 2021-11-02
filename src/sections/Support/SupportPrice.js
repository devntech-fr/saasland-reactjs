import React, {Component} from 'react';
import SectionTitle from "sections/Title/SectionTitle";
import PriceItem from "components/Support/PriceItem";

class SupportPrice extends Component {
    render(){
        const { title, p, children } = this.props;
        return(
            <section className="support_price_area sec_pad">
                <div className="container custom_container p0">
                    <SectionTitle
                        sClass="sec_title text-center mb_70"
                        title={title}
                        p={p}
                    />
                    <div className="price_content price_content_two">
                        <div className="row">
                            {children}
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
export default SupportPrice;
