import React from 'react';
import SectionTitle from "sections/Title/SectionTitle";
import CloudServiceTabItem from "sections/Service/Sservice/CloudServiceTabItem";

function CloudServiceTab({ title, p, children }) {
    return(
        <section className="software_service_area sec_pad">
            <div className="container">
                <SectionTitle
                    title={title}
                    p={p}
                    sClass="sec_title text-center mb_70"
                />
                <div className="row">
                    {children}
                </div>
            </div>
        </section>
    )
}
export default CloudServiceTab;

CloudServiceTab.defaultProps = {
    title:`Découvrez l'univers du centre`,
    p: `Tickety-boo cheers plastered twit chimney pot off his nut hotpot spend a penny have it, so I said squiffy A bit of how's your father.`,
}
