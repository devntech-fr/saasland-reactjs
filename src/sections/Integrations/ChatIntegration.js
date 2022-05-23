import React from 'react';

function ChatIntegration({ title, p, integrations }) {
    // const displayTitle = () => {
    //     const span = title.split(' ')[0];
    //     const title = title.substring(0,span.length);
    //     console.log('span',span);
    //     console.log('title',title);
    //     return (
    //         <h2>{title}</h2>
    //     )
    // }
    return(
        <section className="security_integration_area chat_integration_area">
            <div className="container">
                <div className="border-bottom"></div>
                <div className="chat_title text-center">
                    {title}
                    <h2 className="wow fadeInUp"><span>Integrations.</span> Discover even more possibilities.</h2>
                    <p>{p}</p>
                </div>
            </div>
            <div className="container-fluid">
                <div className="row">
                    {
                        integrations.map(({name, href, image}, key) => (
                            <div className="col-lg-2 col-md-4 col-sm-6" key={key}>
                                <a href={href} className="s_integration_item">
                                    <img src={image} alt="" height={50}/>
                                    {name && <h5>{name}</h5>}
                                </a>
                            </div>
                        ))
                    }
                    <div className="col-lg-2 col-md-4 col-sm-6">
                        <a href="/#" className="s_integration_item">
                            <img src={"../img/new-home/kissmetrics.png"} alt=""/>
                            <h5>KISSmetrics</h5>
                        </a>
                    </div>
                    <div className="col-lg-2 col-md-4 col-sm-6">
                        <a href="/#" className="s_integration_item">
                            <img src={"../img/new-home/metorik.png"} alt=""/>
                            <h5>Metorik</h5>
                        </a>
                    </div>
                    <div className="col-lg-2 col-md-4 col-sm-6">
                        <a href="/#" className="s_integration_item">
                            <img src={"../img/new-home/nicereply-1.png"} alt=""/>
                            <h5>Nicereply</h5>
                        </a>
                    </div>
                    <div className="col-lg-2 col-md-4 col-sm-6">
                        <a href="/#" className="s_integration_item">
                            <img src={"../img/new-home/update.png"} alt=""/>
                            <h5>Software Updater</h5>
                        </a>
                    </div>
                    <div className="col-lg-2 col-md-4 col-sm-6">
                        <a href="/#" className="s_integration_item">
                            <img src={"../img/new-home/campfire.png"} alt=""/>
                            <h5>Campfire</h5>
                        </a>
                    </div>
                    <div className="col-lg-2 col-md-4 col-sm-6">
                        <a href="/#" className="s_integration_item">
                            <img src={"../img/new-home/webhooks.png"} alt=""/>
                            <h5>Webhooks</h5>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default ChatIntegration;
