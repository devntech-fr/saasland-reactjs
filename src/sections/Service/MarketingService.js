import React from 'react';
import StartupServiceItem from 'sections/Service/Sservice/StartupServiceItem';
import Reveal from 'react-reveal/Reveal';

function MarketingService({ title, services }) {
    return(
        <section className="agency_service_area bg_color">
            <div className="container custom_container">
                <h2 className="f_size_30 f_600 t_color3 l_height40 text-center mb_90 wow fadeInUp" data-wow-delay="0.2s">{title}</h2>
                <div className="row mb_30">
                    {
                        services.map( items => {
                            return(
                                <Reveal effect="fadeInUp" key={items.id}>
                                    <div className="col-lg-3 col-sm-6">
                                        <StartupServiceItem iShap={items.shape}  Sicon={items.icon} text={items.text} description={items.description} btn={items.btn} bicon={items.bicon}/>
                                    </div>
                                </Reveal>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default MarketingService;
