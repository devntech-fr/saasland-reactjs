import React from "react";

function ChatFeatureItem({ title, href, description, imageOne, imageTwo }) {
    return (
        <div className="chat_features_item wow fadeInUp">
            <div className="round">
                <div className="round_circle"></div>
                <img
                    className="top_img p_absolute"
                    src={imageTwo.src}
                    alt={imageTwo.alt}
                />
                <img src={imageOne.src} alt={imageOne.alt} />
            </div>
            <a href={href}>
                <h4>{title}</h4>
            </a>
            <p>
                {description}
            </p>
        </div>
    )
}

export default ChatFeatureItem

ChatFeatureItem.defaultProps = {
    title: 'Simplify communications',
    href: '/#',
    description: 'Tidio lets you get all your live chat, e-mail, and Messenger communication in one panel.',
    imageOne: ''
}
