import React, {Component} from 'react';
import CloudServiceNavItem from "components/Service/CloudServiceNavItem";
import TabPanel from "components/Service/TabPanel";
import TabAsideItem from "components/Service/TabAsideItem";

class DeveloperTab extends Component {
    render() {
        const { title } = this.props;
        return(
            <section className="developer_product_area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 d-flex align-items-center">
                            <div className="developer_product_content">
                                <h2 className="f_600 f_size_30 l_height30 t_color3 mb_50 wow fadeInUp" data-wow-delay="0.2s">{title}</h2>
                                <ul className="nav nav-tabs develor_tab mb-30" id="myTab2" role="tablist">
                                    <CloudServiceNavItem identifier={'ruby'} label={'Ruby'} isActive isSelected/>
                                    <CloudServiceNavItem identifier={'curl'} label={'Curl'}/>
                                    <CloudServiceNavItem identifier={'php'} label={'PHP'}/>
                                    <CloudServiceNavItem identifier={'js'} label={'JavaScript'}/>
                                </ul>
                                <div className="tab-content developer_tab_content">
                                    <TabPanel identifier={'ruby'} isActive>
                                        <p className="mb_40">Tickety-boo cheers plastered twit chimney pot off his nut hotpot spend a penny have it, so I said squiffy A bit of how's your father mufty pukka knees up absolutely bladdered brown bread, James Bond boot spiffing ummm I'm telling vagabond arse over tit burke. He lost his bottle mush old spend a penny wellies gormless bite.!</p>
                                        <a href="/#" className="details_btn">API Documentation</a>
                                    </TabPanel>
                                    <TabPanel identifier={'curl'}>
                                        <p className="mb_40">Cheers plastered twit chimney pot off his nut hotpot spend a penny have it, so I said squiffy A bit of how's your father mufty pukka knees up absolutely bladdered brown bread, James Bond boot spiffing ummm I'm telling vagabond arse over tit burke. He lost his bottle mush old spend a penny wellies gormless bite.!</p>
                                        <a href="/#" className="details_btn">API Documentation</a>
                                    </TabPanel>
                                    <TabPanel identifier={'php'}>
                                        <p className="mb_40">Tickety-boo cheers plastered twit chimney pot off his nut hotpot spend a penny have it, so I said squiffy A bit of how's your father mufty pukka knees up absolutely bladdered brown bread, James Bond boot spiffing ummm I'm telling vagabond arse over tit burke. He lost his bottle mush old spend a penny wellies gormless bite.!</p>
                                        <a href="/#" className="details_btn">API Documentation</a>
                                    </TabPanel>
                                    <TabPanel identifier={'js'}>
                                        <p className="mb_40">Tickety-boo cheers plastered twit chimney pot off his nut hotpot spend a penny have it, so I said squiffy A bit of how's your father mufty pukka knees up absolutely bladdered brown bread, James Bond boot spiffing ummm I'm telling vagabond arse over tit burke. He lost his bottle mush old spend a penny wellies gormless bite.!</p>
                                        <a href="/#" className="details_btn">API Documentation</a>
                                    </TabPanel>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="tab_img_info">
                                <TabAsideItem identifier={'ruby'} isActive/>
                                <TabAsideItem
                                    identifier={'curl'}
                                    image={{
                                        src: "/img/home5/01.jpg",
                                        alt: "alt"
                                    }}
                                />
                                <TabAsideItem
                                    identifier={'php'}
                                    image={{
                                        src: "/img/home5/02.jpg",
                                        alt: "php"
                                    }}
                                />
                                <TabAsideItem
                                    identifier={'js'}
                                    image={{
                                        src: "/img/home5/03.jpg",
                                        alt: "js"
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default DeveloperTab;
