import React from "react";

function ChatGetStarted({ title, p, button }) {
    return (
        <section className="chat_get_started_area">
            <div className="container">
                <div className="chat_get_started_content text-center">
                    <h2 className="wow fadeInUp" data-wow-delay="0.2s">{title}</h2>
                    <p>{p}</p>
                    {button && <a href={button.href} className="chat_btn btn_hover">{button.label}</a>}
                </div>
            </div>
        </section>
    )
}

export default ChatGetStarted;
