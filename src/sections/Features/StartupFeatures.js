import React from 'react';
import Reveal from 'react-reveal';

function StartupFeatures() {
    return(
        <section className="startup_fuatures_area sec_pad">
            <div className="container">
                <div className="sec_title mb_70 wow fadeInUp" data-wow-delay="0.4s">
                    <Reveal effect="fadeInLeft">
                        <h2 className="f_p f_size_30 l_height40 f_600 t_color text-center">Ways your team can<br/> Use hubstaff</h2>
                    </Reveal>
                </div>
                <ul className="nav nav-tabs startup_tab" id="myTab" role="tablist">
                    <Reveal effect="fadeInLeft" duration={500}>
                        <li className="nav-item">
                            <a className="nav-link" id="demo-tab" data-toggle="tab" href="#demo" role="tab" aria-controls="demo" aria-selected="false">
                                <span className="icon"><i className="icon-cloud-upload"></i></span>
                                <h3>Demo<br/> Cloud</h3>
                            </a>
                        </li>
                    </Reveal>
                    <Reveal effect="fadeInLeft" duration={1000}>
                        <li className="nav-item">
                            <a className="nav-link" id="market-tab" data-toggle="tab" href="#market" role="tab" aria-controls="market" aria-selected="false">
                                <span className="icon"><i className="icon-cloud-upload"></i></span>
                                <h3>Marketing<br/> Cloud</h3>
                            </a>
                        </li>
                    </Reveal>
                    <Reveal effect="fadeInLeft" duration={1400}>
                        <li className="nav-item">
                            <a className="nav-link" id="app-tab" data-toggle="tab" href="#app" role="tab" aria-controls="app" aria-selected="false">
                                <span className="icon"><i className="icon-screen-tablet"></i></span>
                                <h3>Commerce<br/> Apps</h3>
                            </a>
                        </li>
                    </Reveal>
                    <Reveal effect="fadeInLeft" duration={2000}>
                        <li className="nav-item">
                            <a className="nav-link" id="hubstaff-tab" data-toggle="tab" href="#hubstaff" role="tab" aria-controls="hubstaff" aria-selected="false">
                                <span className="icon"><i className="icon-graduation"></i></span>
                                <h3>Hubstaff<br/> App</h3>
                            </a>
                        </li>
                    </Reveal>
                </ul>
                <div className="tab-content startup_tab_content" id="myTabContent">
                    <StartupTabPanel
                        isActive={true}
                        panelId={"demo"}
                    />
                    <StartupTabPanel
                        isActive={false}
                        panelId={"market"}
                    />
                    <StartupTabPanel
                        isActive={false}
                        panelId={"app"}
                    />
                    <StartupTabPanel
                        isActive={false}
                        panelId={"hubstaff"}
                    />
                </div>
            </div>
        </section>
    )
}

const StartupTabNavItem = ({ isActive, tabId, target, ariaSelected, iconClassName, label }) => (
    <>
        {/*<a className="nav-link" id="demo-tab" data-toggle="tab" href="#demo" role="tab" aria-controls="demo" aria-selected="true">*/}
        {/*    <span className="icon"><i className="icon-cloud-upload"></i></span>*/}
        {/*    <h3>Demo<br/> Cloud</h3>*/}
        {/*</a>*/}
        <a
            className={`nav-link${isActive && ` active`}`}
            id={`${tabId}-tab`}
            data-toggle="tab"
            href={`#${target}`}
            role="tab"
            aria-controls={target}
            aria-selected={ariaSelected}
        >
            <span className="icon">
                <i className={iconClassName}></i>
            </span>
            <h3>{label}</h3>
        </a>
    </>
)

function StartupTabPanel({ isActive, panelId, ariaLabel }) {
    const getAriaLabel = () => {
        if (ariaLabel !== panelId) {
            return ariaLabel;
        }
        return panelId;
    }
    return (
        <div className={`tab-pane fade${isActive && ` show active`}`} id={panelId} role="tabpanel" aria-labelledby={`${getAriaLabel}-tab`}>
            <div className="startup_tab_img">
                <div className="web_img">
                    <img src={'../../img/new/web_image.jpg'} alt=""/>
                </div>
                <div className="phone_img"><img src={'../../img/new/iPhoneX.png'} alt=""/></div>
            </div>
        </div>
    )
}

export default StartupFeatures;
