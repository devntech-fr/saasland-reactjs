import React from 'react';
import SectionTitle from "sections/Title/SectionTitle";
import HostingServiceItem from 'sections/Service/HostingServiceItem';

function HostingService({ title, p, services }) {
    const showServices = () => {
        return services.map((service, key) => {
            console.log('service',service);
            return (
                <div className="col-lg-4 col-sm-6" key={key}>
                    <HostingServiceItem
                        title={service.title}
                        description={service.p}
                        icon={service.icon}
                    />
                </div>
            )
        })
    }
    return(
        <section className="hosting_service_area sec_pad">
            <div className="container">
                <SectionTitle
                    sClass="hosting_title text-center"
                    title={title}
                    p={p}
                />
                <div className="row">
                    {showServices()}
                </div>
            </div>
        </section>
    )
}
export default HostingService;
