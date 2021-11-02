import React from "react";

function PriceItem({ popular, image, title, p, amount, currency, period, features, buttonLink }) {
    return (
        <div className="price_item">
            {popular && <div className="tag"><span>Popular</span></div>}
            <img src={image.src} alt={image.alt} />
            <h5 className="f_p f_size_20 f_600 t_color2 mt_30">{title}</h5>
            <p>{p}</p>
            <div className="price f_700 f_size_40 t_color2">{currency} {amount}<sub className="f_size_16 f_400">/ {period}</sub></div>
            <ul className="list-unstyled p_list">
                {
                    features.map((feature, key) => (
                        <li key={key}><i className={`ti-${feature.included ? `check` : `close`}`}></i>{feature.label}</li>
                    ))
                }
            </ul>
            <a href={buttonLink.href} target={buttonLink.target} className="price_btn btn_hover">{buttonLink.label}</a>
        </div>
    )
}

export default PriceItem;
