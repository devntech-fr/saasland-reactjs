import React from 'react';
import SectionTitle from "sections/Title/SectionTitle";

const DesignTab = ({ title, p, children }) => {
    return(
        <section className="design_tab_area sec_pad">
            <div className="container">
                <SectionTitle
                    sClass="sec_title text-center mb_70"
                    title={title}
                    p={p}
                />
                <div className="row">
                    {children}
                </div>
            </div>
        </section>
    )
}

export default DesignTab;
