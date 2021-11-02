import React, {Component} from 'react';

class HostingActionTwo extends Component {
    render(){
        const { title, p, buttonLink } = this.props;
        return(
            <section className="h_action_promo_area">
                <div className="overlay_bg" style={{backgroundImage: "url(../img/hosting/hosting_action_bg.png)"}}></div>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-8">
                            <div className="h_promo_content">
                                <h2>{title}</h2>
                                <p>{p}</p>
                            </div>
                        </div>
                        <div className="col-md-4 text-right">
                            {
                                buttonLink && <a href={buttonLink.href} target={buttonLink.target} className="hosting_btn btn_hover">{buttonLink.label}</a>
                            }
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
export default HostingActionTwo;
