import React from "react";

function CompanyWidget() {
    return (
        <div className="f_widget company_widget wow fadeInLeft" data-wow-delay="0.2s">
            <a href="index.html" className="f-logo"><img src={'/img/logo.png'} alt=""/></a>
            <div className="widget-wrap">
                <p className="f_400 f_p f_size_15 mb-0 l_height34"><span>Email:</span> <a href="mailto:saasland@gmail.com" className="f_400">saasland@gmail.com</a></p>
                <p className="f_400 f_p f_size_15 mb-0 l_height34"><span>Phone:</span> <a href="tel:948256347968" className="f_400">+948 256 347 968</a></p>
            </div>
            <form action="#" className="f_subscribe mailchimp" method="post">
                <input type="text" name="EMAIL" className="form-control memail" placeholder="Email"/>
                <button className="btn btn-submit" type="submit"><i className="ti-arrow-right"></i></button>
            </form>
        </div>
    )
}

export default CompanyWidget;
