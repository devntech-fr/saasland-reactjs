import React from "react";
import FeatureItem from "sections/Features/FeatureItem";
import { displayTitle } from "components/Content/RichContent";
import { ColorDot } from "components/Graphic/Dot";

function AgencyFeatures({ aClass, title }) {
    return (
        <section className={`agency_featured_area bg_color ${aClass}`}>
            <div className="container">
                <h2 className="f_size_30 f_600 t_color3 l_height40 text-center wow fadeInUp" data-wow-delay="0.3s" dangerouslySetInnerHTML={displayTitle(title)}></h2>
                <div className="features_info">
                    <img className="dot_img" src={'/img/home4/dot.png'} alt=""/>
                    <FeatureItem
                        reverse
                        featuredImage="/img/home4/work1.png"
                        iconImage="/img/home4/icon01.png"
                        title="With efficiency to unlock more opportunities"
                        description="Why I say old chap that is spiffing bodge, blag pardon me buggered mufty Oxford butty bubble and squeak wind up, brown bread the full monty bloke ruddy cras tickety-boo squiffy. Starkers dropped a clanger lurgy is cack excuse my French what a plonker blower.!"
                    />
                    <FeatureItem
                        featuredImage="/img/home4/work2.png"
                        iconImage="/img/home4/icon02.png"
                        title="Wuth instant data to keep everyone in the know"
                        description="Why I say old chap that is spiffing bodge, blag pardon me buggered mufty Oxford butty bubble and squeak wind up, brown bread the full monty bloke ruddy cras tickety-boo squiffy. Starkers dropped a clanger lurgy is cack excuse my French what a plonker blower.!"
                    />
                    <FeatureItem
                        reverse
                        featuredImage="/img/home4/work3.png"
                        iconImage="/img/home4/icon3.png"
                        title="With efficiency to unlock more opportunities"
                        description="Why I say old chap that is spiffing bodge, blag pardon me buggered mufty Oxford butty bubble and squeak wind up, brown bread the full monty bloke ruddy cras tickety-boo squiffy. Starkers dropped a clanger lurgy is cack excuse my French what a plonker blower.!"
                    />
                    <div className="dot middle_dot"><ColorDot/></div>
                </div>
            </div>
        </section>
    )
}

export default AgencyFeatures;

AgencyFeatures.defaultProps = {
    title: `You SaasLand wherever your<br/> business agency`
}
