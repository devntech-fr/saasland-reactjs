import React from "react";

function TabAsideItem({ identifier, image, isActive }) {
    return (
        <div className={`tab_img${isActive ? ` active` : ''}`} id={`tab_${identifier}`}>
            <img className="img-fluid wow fadeInRight" data-wow-delay="0.4s" src={image.src} alt={image.alt}/>
        </div>
    )
}

export default TabAsideItem;

TabAsideItem.defaultProps = {
    identifier: 'ruby',
    image: {
        src: '/img/home5/php.jpg',
        alt: 'php'
    },
    isActive: false,
}
