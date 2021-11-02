import React from 'react';
import SectionTitle from "sections/Title/SectionTitle";
import HostingServiceItem from 'sections/Service/HostingServiceItem';

function HostingService({ title, p, services }) {
    const showServices = () => {
        services.map(service => {
            console.log('service',service);
            return (<div className="col-lg-4 col-sm-6" key={service.id}>
                <HostingServiceItem
                    title={service.title}
                    description={service.description}
                    icon={service.icon}
                />
            </div>)
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
                    {showServices}
                    {/*<HostingServiceItem hostingicon="icon1.png" hostingserviceTitle="Shared Hosting" hostingservicedescription="Hunky dory barney fanny around up the duff no biggie loo cup of tea jolly good ruddy say arse.!"/>*/}
                    {/*<HostingServiceItem hostingicon="icon2.png" hostingserviceTitle="Domain Sale" hostingservicedescription="Hunky dory barney fanny around up the duff no biggie loo cup of tea jolly good ruddy say arse.!"/>*/}
                    {/*<HostingServiceItem hostingicon="icon3.png" hostingserviceTitle="Reduce complexity" hostingservicedescription="Hunky dory barney fanny around up the duff no biggie loo cup of tea jolly good ruddy say arse.!"/>*/}
                    {/*<HostingServiceItem hostingicon="icon4.png" hostingserviceTitle="Access globally" hostingservicedescription="Hunky dory barney fanny around up the duff no biggie loo cup of tea jolly good ruddy say arse.!"/>*/}
                    {/*<HostingServiceItem hostingicon="icon5.png" hostingserviceTitle="Move faster" hostingservicedescription="Hunky dory barney fanny around up the duff no biggie loo cup of tea jolly good ruddy say arse.!"/>*/}
                    {/*<HostingServiceItem hostingicon="icon6.png" hostingserviceTitle="Easily integrate" hostingservicedescription="Hunky dory barney fanny around up the duff no biggie loo cup of tea jolly good ruddy say arse.!"/>*/}
                </div>
            </div>
        </section>
    )
}
export default HostingService;
