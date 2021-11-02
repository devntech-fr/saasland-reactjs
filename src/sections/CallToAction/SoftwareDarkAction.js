import React from 'react';
import SectionTitle from "sections/Title/SectionTitle";

const SoftwareDarkAction = ({ title, p, form }) => {
    return(
        <section className="saas_signup_area sec_pad dk_bg_two">
            <div className="container">
                <SectionTitle
                    sClass="sec_title text-center mb_70"
                    tClass="w_color"
                    title={title}
                    p={p}
                />
                {
                    form &&
                    <form action="#" className="saas_signup_form row">
                        <div className="col-md-4 col-sm-6">
                            <div className="input-group wow fadeInLeft" data-wow-delay="0.3s">
                                <input type="text" className="form-control" placeholder="Name"/>
                                <label></label>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6">
                            <div className="input-group wow fadeInLeft" data-wow-delay="0.5s">
                                <input type="text" className="form-control" placeholder="Email"/>
                                <label></label>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6">
                            <div className="input-group wow fadeInLeft" data-wow-delay="0.6s">
                                <input type="number" className="form-control" placeholder="Password"/>
                                <label></label>
                            </div>
                        </div>
                        <div className="col-lg-12 text-center wow fadeInUp" data-wow-delay="0.8s">
                            <button type="submit" className="signup_btn btn_hover saas_banner_btn mt_60">Get started for free</button>
                        </div>
                    </form>
                }
            </div>
        </section>
    )
}

export default SoftwareDarkAction;
