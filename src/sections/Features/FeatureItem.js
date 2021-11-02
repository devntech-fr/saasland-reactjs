import React, {Component} from 'react';
import Reveal from 'react-reveal/Reveal';
import {ColorDot} from "components/Graphic/Dot";
class FeatureItem extends Component{
    render(){
        const { reverse, featuredImage, iconImage, title, description } = this.props;
        const rowClass = reverse ? `flex-row-reverse` : `agency_featured_item_two`;
        const aClass = reverse ? `pr_70 pl_70` : `pl_100`;
        return(
            <div className={`row agency_featured_item ${rowClass} `}>
                <div className="col-lg-6">
                   <Reveal effect="fadeInLeft">
                        <div className="agency_featured_img text-right">
                            <img src={featuredImage} alt=""/>
                        </div>
                   </Reveal>
                </div>
                <div className="col-lg-6">
                    <div className={`agency_featured_content wow fadeInLeft ${aClass}`} data-wow-delay="0.6s">
                    <Reveal effect="fadeInRight">
                        <div className="dot"><ColorDot/></div>
                        <img className="number" src={iconImage} alt=""/>
                        <h3>{title}</h3>
                        <p>{description}</p>
                        <a href=".#" className="icon mt_30"><i className="ti-arrow-right"></i></a>
                    </Reveal>
                    </div>
                </div>
            </div>
        )
    }
}

export default FeatureItem;

FeatureItem.defaultProps = {
    reverse: false,
    featuredImage: '/img/home4/work1.png',
    iconImage: '/img/home4/icon01.png',
    title: 'With efficiency to unlock more opportunities',
    description: 'Why I say old chap that is spiffing bodge, blag pardon me buggered mufty Oxford butty bubble and squeak wind up, brown bread the full monty bloke ruddy cras tickety-boo squiffy. Starkers dropped a clanger lurgy is cack excuse my French what a plonker blower.'

}
