import React from 'react';
import HRBanner from 'sections/Banner/HRBanner';
import HRServices from 'sections/Service/HRServices';
import ServiceData from 'sections/Service/ServiceData';
import Video from 'sections/Media/Video';
import MarketingGetStarted from 'sections/Banner/MarketingGetStarted';
import Layout from "layouts/Layout";
import HRServiceItem from "components/Service/HRServiceItem";

const HRManagement = () => {
    const services = ServiceData.HRService;
    return(
        <Layout variant={'hr'}>
            <HRBanner
                title={`<span>Build powerful apps</span> using the fastest API for messaging`}
                p={`Walking on water and developing software from a specification are easy.`}
            />

            <HRServices>
                {
                    services.map((item, key) => {
                        return(
                            <div className="col-lg-4 col-sm-6" key={key}>
                                <HRServiceItem
                                    service={item}
                                    index={item.id}
                                />
                            </div>
                        )
                    })
                }
            </HRServices>
            <Video/>
            <MarketingGetStarted/>
        </Layout>
    )
}

const keywords = ['hr','home','human resources'];

export default HRManagement;
