import React, {Component} from 'react';
import Reveal from 'react-reveal/Reveal';
import ClientLogo from "components/Security/ClientLogo";

class SupportPartnerLogo extends Component {
    render(){
        const { title, logoCollection } = this.props;
        return(
            <section className="support_partner_logo_area">
                <div className="container">
                    <h4 className="f_size_18 f_400 f_p text-center l_height28 mb_50">{title}</h4>
                    <div className="row partner_info">
                        {
                            logoCollection.map((item, key) =>{
                                return(
                                    <Reveal effect="fadeInLeft" duration={1500} key={key}>
                                        <ClientLogo href={'/#'} image={item.image}/>
                                    </Reveal>
                                )
                            })
                        }
                    </div>
                    <div className="border_bottom"></div>
                </div>
            </section>
        )
    }
}

export default SupportPartnerLogo;
