import React, {Component} from 'react';
import SectionTitle from "sections/Title/SectionTitle";
import IntegrationItem from "components/Support/IntegrationItem";

class SupportIntegration extends Component {
    constructor(props){
        super(props);
    }

    render(){
        const { title, p, image, children } = this.props;
        return(
            <section className="support_integration_area">
                <div className="container">
                    <SectionTitle sClass="sec_title text-center mb_70" title={title} p={p}/>
                    <div className="row flex-row-reverse">
                        <div className="col-lg-9 col-md-10 col-sm-12">
                            <div className="row">
                                {children}
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-2 col-sm-12">
                            <img className="integration_img" src={image.src} alt={image.alt} />
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

SupportIntegration.defaultProps = {
    title:`Software Integrations`,
    p:`Why I say old chap that is spiffing lavatory chip shop gosh off his nut, smashing boot are you taking the piss posh loo brilliant matie boy.!`,
    image:{
        src: `/img/new-home/tree.png`,
        alt: 'Intégrations',
    },
    integrations:[
        {
            id: 100,
            image: "/img/new-home/kissmetrics.png",
            text: "KISSmetrics"
        },
        {
            id: 101,
            image: "/img/new-home/metorik.png",
            text: "Metorik"
        },
        {
            id: 102,
            image: "/img/new-home/nicereply-1.png",
            text: "Nicereply"
        },
        {
            id: 103,
            image: "/img/new-home/campfire.png",
            text: "Campfire"
        },
        {
            id: 104,
            image: "/img/new-home/webhooks.png",
            text: "Webhooks"
        },
        {
            id: 105,
            image: "/img/new-home/briteverify.png",
            text: "BriteVerify"
        }
    ]
}


export default SupportIntegration;
