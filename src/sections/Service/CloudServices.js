import React from 'react';

function CloudServices({ title, children }) {
    const displayTitle = () => {
        return {__html: title };
    }
    return(
        <section className="software_featured_area sec_pad">
            <div className="container">
                <h2 className="f_600 f_size_30 t_color3 text-center l_height40 mb_70 wow fadeInUp"
                    data-wow-delay="0.3s" dangerouslySetInnerHTML={displayTitle()}
                >
                </h2>
                <div className="row software_featured_info">
                    {children}
                </div>
            </div>
        </section>
    )
}
export default CloudServices;

CloudServices.defaultProps = {
    title: `Un travail de fond <br/>au service des patients et de leurs familles`,
}
