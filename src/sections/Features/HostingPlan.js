import React, {Component} from 'react';
import SectionTitle from "sections/Title/SectionTitle";
import ServiceData from "sections/Service/ServiceData";

class HostingPlan extends Component {
    constructor(){
        super();
        this.state = ServiceData.HostingPlans;
    }
    render(){
        return(
            <section className="h_pricing_area sec_pad">
            <div className="container">
                <SectionTitle Title="Check out awesome plans, And order now" TitleP="The full monty burke posh excuse my French Richard cheeky bobby spiffing crikey Why gormless, pear shaped.!" sClass="hosting_title text-center"/>
                <div className="h_price_inner">
                    <ul className="nav nav-tabs hosting_tab" id="myTab" role="tablist">
                        <li className="nav-item">
                            <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Standard</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">CPU Optimized</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">General Purpose </a>
                        </li>
                    </ul>
                    <div className="tab-content h_price_tab" id="myTabContent">
                        <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                            {this.state.Standard.map(post =>(
                                <React.Fragment key={post.id}>
                                    <p>{post.title}</p>
                                    <div className="h_price_body">
                                        <div className="price_head">
                                            <div className="p_head">
                                                <h5>Memory</h5>
                                            </div>
                                            <div className="p_head">
                                                <h5>Vcpus</h5>
                                            </div>
                                            <div className="p_head">
                                                <h5>Ssd disk</h5>
                                            </div>
                                            <div className="p_head">
                                                <h5>Transfer</h5>
                                            </div>
                                            <div className="p_head">
                                                <h5>SupportPrice</h5>
                                            </div>
                                            <div className="p_head c_width">

                                            </div>
                                        </div>
                                        <div className="h_price_body">
                                            {
                                                post.priceList.map( list => {
                                                    return(
                                                        <div className="h_p_list" key={list.id}>
                                                            <div className="h_price_item memory" data-title="Memory">
                                                                <h5>{list.Memory}</h5>
                                                            </div>
                                                            <div className="h_price_item" data-title="Vcpus">
                                                                <h5>{list.Vcpus}</h5>
                                                            </div>
                                                            <div className="h_price_item" data-title="Ssd disk">
                                                                <h5>{list.Ssd}</h5>
                                                            </div>
                                                            <div className="h_price_item" data-title="Transfer">
                                                                <h5>{list.Transfer}</h5>
                                                            </div>
                                                            <div className="h_price_item" data-title="SupportPrice">
                                                                <h5><span>{list.Price}</span>{list.PriceS}</h5>
                                                            </div>
                                                            <div className="h_price_item c_width">
                                                                <h5><a href="/#" className="h_price_btn">Choose Plan</a></h5>
                                                            </div>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                    </div>
                                </React.Fragment>
                            ))}
                        </div>
                        <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                            {this.state.Cpu.map(post =>(
                                <React.Fragment key={post.id}>
                                    <p>{post.title}</p>
                                    <div className="h_price_body">
                                        <div className="price_head">
                                            <div className="p_head">
                                                <h5>Memory</h5>
                                            </div>
                                            <div className="p_head">
                                                <h5>Vcpus</h5>
                                            </div>
                                            <div className="p_head">
                                                <h5>Ssd disk</h5>
                                            </div>
                                            <div className="p_head">
                                                <h5>Transfer</h5>
                                            </div>
                                            <div className="p_head">
                                                <h5>SupportPrice</h5>
                                            </div>
                                            <div className="p_head c_width">

                                            </div>
                                        </div>
                                        <div className="h_price_body">
                                            {
                                                post.priceList.map( list => {
                                                    return(
                                                        <div className="h_p_list" key={list.id}>
                                                            <div className="h_price_item memory" data-title="Memory">
                                                                <h5>{list.Memory}</h5>
                                                            </div>
                                                            <div className="h_price_item" data-title="Vcpus">
                                                                <h5>{list.Vcpus}</h5>
                                                            </div>
                                                            <div className="h_price_item" data-title="Ssd disk">
                                                                <h5>{list.Ssd}</h5>
                                                            </div>
                                                            <div className="h_price_item" data-title="Transfer">
                                                                <h5>{list.Transfer}</h5>
                                                            </div>
                                                            <div className="h_price_item" data-title="SupportPrice">
                                                                <h5><span>{list.Price}</span>{list.PriceS}</h5>
                                                            </div>
                                                            <div className="h_price_item c_width">
                                                                <h5><a href="/#" className="h_price_btn">Choose Plan</a></h5>
                                                            </div>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                    </div>
                                </React.Fragment>
                            ))}
                        </div>
                        <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                            {this.state.General.map(post =>(
                                <React.Fragment key={post.id}>
                                    <p>{post.title}</p>
                                    <div className="h_price_body">
                                        <div className="price_head">
                                            <div className="p_head">
                                                <h5>Memory</h5>
                                            </div>
                                            <div className="p_head">
                                                <h5>Vcpus</h5>
                                            </div>
                                            <div className="p_head">
                                                <h5>Ssd disk</h5>
                                            </div>
                                            <div className="p_head">
                                                <h5>Transfer</h5>
                                            </div>
                                            <div className="p_head">
                                                <h5>SupportPrice</h5>
                                            </div>
                                            <div className="p_head c_width">

                                            </div>
                                        </div>
                                        <div className="h_price_body">
                                            {
                                                post.priceList.map( list => {
                                                    return(
                                                        <div className="h_p_list" key={list.id}>
                                                            <div className="h_price_item memory" data-title="Memory">
                                                                <h5>{list.Memory}</h5>
                                                            </div>
                                                            <div className="h_price_item" data-title="Vcpus">
                                                                <h5>{list.Vcpus}</h5>
                                                            </div>
                                                            <div className="h_price_item" data-title="Ssd disk">
                                                                <h5>{list.Ssd}</h5>
                                                            </div>
                                                            <div className="h_price_item" data-title="Transfer">
                                                                <h5>{list.Transfer}</h5>
                                                            </div>
                                                            <div className="h_price_item" data-title="SupportPrice">
                                                                <h5><span>{list.Price}</span>{list.PriceS}</h5>
                                                            </div>
                                                            <div className="h_price_item c_width">
                                                                <h5><a href="/#" className="h_price_btn">Choose Plan</a></h5>
                                                            </div>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                    </div>
                                </React.Fragment>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
        )
    }
}
export default HostingPlan;
