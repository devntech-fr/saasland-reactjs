import React from 'react';
import PricingList from "components/List/PricingList";

function DomainSearch({ title, form, prices }) {

    return(
        <section className="domain_search_area sec_pad">
            <div className="map_bg"></div>
            <div className="container">
                <div className="domain_box_info">
                    <h3 className="wow fadeInUp" data-wow-delay="0.3s">{title}</h3>
                    <form action="#" method="post">
                        <div className="domain_form_inner">
                            <input type="text" className="form-control" placeholder="Enter your domain name"/>
                            <div className="domain_select">
                                <select className="form-control selectpickers">
                                    <option>.com</option>
                                    <option>.net</option>
                                    <option>.org</option>
                                    <option>.biz</option>
                                    <option>.uk</option>
                                </select>
                            </div>
                            <button type="submit" className="hosting_btn">Search</button>
                        </div>
                    </form>
                    <PricingList prices={prices}/>
                </div>
            </div>
        </section>
    )
}

export default DomainSearch;
