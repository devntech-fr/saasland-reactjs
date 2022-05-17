import React from 'react';
import SectionTitle from "sections/Title/SectionTitle";

function AppWork({ title, p, services }) {

    return(
        <section className="app_service_area" id="work">
            <div className="container">
                <SectionTitle
                    sClass="sec_title text-center mb_70"
                    title={title}
                    tClass="t_color3"
                    p={p}
                />
                <div className="row app_service_info">
                    {
                        services.map(item => {
                            return(
                                <div className="col-lg-4" key={item.id}>
                                    <div className="app_service_item wow fadeInUp" data-wow-delay="0.2s">
                                        <i className={`app_icon ${item.icon}`}></i>
                                        <h5 className="f_p f_size_18 f_600 t_color3 mt_40 mb-30">{item.title}</h5>
                                        <p className="f_400 f_size_15 mb-30">{item.p}</p>
                                        <a href={item.button.href} target={item.button.target} className={item.button.classNames}>{item.button.label} <i className={item.button.iconClassName}></i></a>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default AppWork;
