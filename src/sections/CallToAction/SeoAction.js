import React from "react";

function SeoAction({ title, button }) {
    return (
        <section className="seo_call_to_action_area sec_pad">
            <div className="container">
                <div className="seo_call_action_text">
                    <h2 dangerouslySetInnerHTML={{ __html: title }}></h2>
                    { button && <a href={button.href} className="about_btn">{button.label}</a>}
                
                </div>
            </div>
        </section>
    )
}

export default SeoAction
