import React from 'react';
import SupportItem from "components/Support/SupportItem";

const HelpSupport = ({ title, children }) => {
    return(
        <section className="support_help_area sec_pad">
            <div className="container">
                <h2 className="f_p f_size_30 l_height50 f_600 t_color text-center wow fadeInUp mb_60">{title}</h2>
                <div className="d-flex">
                    {children}
                </div>
            </div>
        </section>
    )
}

export default HelpSupport;

