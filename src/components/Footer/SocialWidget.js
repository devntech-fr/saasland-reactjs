import React from "react";

function SocialWidget({ title, links }) {
    return (
        <div className="f_widget social-widget">
            <h3 className="f-title f_600 w_color f_size_18 mb_40">{title}</h3>
            <div className="f_social_icon">
                {
                    links.map(item =>{
                        return(
                            <a href={item.url} key={item.id}><i className={item.icon}></i></a>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default SocialWidget;
