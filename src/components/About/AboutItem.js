import React from "react";

function AboutItem(props) {
    const { image, title, width } = props;
    return (
        <div className={`about_item ${width}`}>
            <img src={image.src} alt=""/>
            <div className={`about_text${width === 'w55' ? ` text_two` : ''}`}>
                <span className="br"></span>
                <h5 className="f_size_18 l_height28 mb-0">{title}</h5>
            </div>
        </div>
    )
}

export default AboutItem;
