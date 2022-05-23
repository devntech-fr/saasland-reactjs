import React from 'react';

function HostingFeaturesTwo({ rowClass, image, title, p, children }) {
    return(
        <section className="hosting_features_area">
            <div className="container">
                <div className={`row ${rowClass}`}>
                    <div className="col-lg-6">
                        <div className="h_features_img">
                            <img src={"/img/hosting/" + image} alt=""/>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="h_features_content">
                            <div className="hosting_title">
                                <h2>{title}</h2>
                                <p>{p}</p>
                            </div>
                            <React.Fragment>
                                {children}
                            </React.Fragment>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HostingFeaturesTwo;
