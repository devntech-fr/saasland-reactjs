import React from 'react';
import SectionTitle from "sections/Title/SectionTitle";
import ErpServiceItem from 'sections/Service/ErpServiceItem';

const ErpService =({ title, p, children })=> {
    return(
        <section className="erp_service_area sec_pad">
            <div className="container">
                <SectionTitle sClass="hosting_title erp_title text-center" title={title} p={p}/>
                <div className="row">
                    {children}
                </div>
            </div>
        </section>
    )
}

export default ErpService;
