import React from 'react';
import Reveal from 'react-reveal/Reveal/';

function Breadcrumb({title, description, image}) {
    return(
        <section className={`breadcrumb_area`}>
            {image && <img className="breadcrumb_shap" src={image.src} alt={image.alt} title={image.title}/>}
            <img className="breadcrumb_shap" src={"/img/breadcrumb/banner_bg.png"} alt=""/>
            <div className="container">
                <div className="breadcrumb_content text-center">
                    <Reveal effect="fadeInUp"><h1 className="f_p f_700 f_size_50 w_color l_height50 mb_20">{title}</h1></Reveal>
                    <p className="f_400 w_color f_size_16 l_height26">{description}</p>
                </div>
            </div>
        </section>
    )
}
export default Breadcrumb;
