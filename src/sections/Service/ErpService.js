import React from 'react';
import SectionTitle from "sections/Title/SectionTitle";
import ErpServiceItem from 'sections/Service/ErpServiceItem';

const ErpService =({ children })=> {
    return(
        <section className="erp_service_area sec_pad">
            <div className="container">
                <SectionTitle sClass="hosting_title erp_title text-center" Title='Accessible, Convenient & Manageable' TitleP='The full monty burke posh excuse my French Richard cheeky bobby spiffing crikey Why gormless, pear shaped.!'/>
                <div className="row">
                    {children}
                </div>
            </div>
        </section>
    )
}

export default ErpService;
