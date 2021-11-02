import React from 'react';

const SupportSubscribe =({ title, p, formAction })=>{
    return(
        <section className="support_subscribe_area sec_pad">
            <img className="h_leaf one wow fadeInUp" data-wow-delay="0.4s" src={"../img/new-home/tree-left.png"} alt=""/>
            <img className="h_leaf two wow fadeInUp" data-wow-delay="0.6s" src={"../img/new-home/tree-right.png"} alt=""/>
            <div className="container">
                <div className="sec_title text-center mb_50 wow fadeInUp" data-wow-delay="0.3s">
                    <h2 className="f_p f_size_30 l_height50 f_600 t_color3">{title}</h2>
                    <p className="f_400 f_size_16 mb-0">{p}</p>
                </div>
                <form action={formAction} className="support_subscribe mailchimp" method="post">
                    <input type="text" name="EMAIL" className="form-control memail" placeholder="E-Mail Address"/>
                    <button className="btn btn-submit" type="submit"><i className="ti-arrow-right"></i></button>
                </form>
            </div>
        </section>
    )
}

SupportSubscribe.defaultProps = {
    title:`Newsletter Personalized for You`,
    p:`Instant Sign Up. Cancel Anytime. No Credit Card Required.`,
    formAction:`/#`
}

export default SupportSubscribe;
