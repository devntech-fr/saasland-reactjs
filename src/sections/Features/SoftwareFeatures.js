import React from 'react';
import SoftwareFeaturedInfo from "components/Software/SoftwareFeaturedInfo";

const SoftwareFeatures =({ title, p, image, buttonLink, reverse})=> {
    return(
        <section className="saas_featured_area sec_pad dk_bg_one">
            <div className="square_box box_three"></div>
            <div className="square_box box_four"></div>
            <div className="container">
                <SoftwareFeaturedInfo
                    title={title}
                    p={p}
                    image={image}
                    buttonLink={buttonLink}
                    reverse={reverse}
                />
            </div>
        </section>
    )
}

export default SoftwareFeatures;
