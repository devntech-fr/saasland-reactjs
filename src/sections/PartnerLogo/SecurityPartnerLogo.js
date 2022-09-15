import React, {Component} from 'react';
import Reveal from 'react-reveal/Reveal';
import ClientLogo from "components/Security/ClientLogo";

class SecurityPartnerLogo extends Component {
    render(){
        let BannerData = this.props.BannerData;
        let {sClass} = this.props;
        return(
            <section className={sClass}>
                <div className="container">
                    <div className="row partner_info">
                        {
                            BannerData.ClientsLogo.map(item =>{
                                return(
                                    <ClientLogo id={item.id} image={item.image} href={item.href} />
                                )
                            })
                        }
                    </div>
                </div>
            </section>
        )
    }
}

export default SecurityPartnerLogo;
