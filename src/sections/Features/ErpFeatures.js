import React from 'react';
import ErpFeatureItem from 'sections/Features/ErpFeatureItem';

const ErpFeatures =({ children })=>{
    return(
        <section className="erp_features_area_two sec_pad">
            <div className="container">
                {children}
            </div>
        </section>
    )
}
export default ErpFeatures;
