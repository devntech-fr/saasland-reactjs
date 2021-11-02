import React, {Component} from 'react';

class HostingAction extends Component {
    render(){
        let { image, title, text }= this.props;
        return(
            <section className={`h_action_area`}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className={`col-lg-6`}>
                            <div className="h_action_img">
                                <img className="img-fluid" src={"../img/hosting/" + image} alt=""/>
                            </div>
                        </div>
                        <div className={`col-lg-6`}>
                            <div className="h_action_content">
                                <h2>{title}</h2>
                                <p>{text}</p>
                                <a href="/#" className="hosting_btn btn_hover">Product Docs</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
export default HostingAction;
