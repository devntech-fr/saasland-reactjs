import React from "react";
import ChatBanner from "sections/Banner/ChatBanner";
import CoreFeatures from "sections/Features/CoreFeatures";
import ChatFeatures from "sections/Features/ChatFeatures";
import ChatIntegration from "sections/Integrations/ChatIntegration";
import ChatClients from "sections/Testimonial/ChatClients";
import Layout from "layouts/Layout";
import ChatFeatureItem from "components/Feature/ChatFeatureItem";

function HomeChat() {
    return (
        <Layout variant={'chat'}>
            <ChatBanner
                title={`Engage your website visitors using <strong>Live Chat</strong>`}
            />
            <CoreFeatures title={`Core Features<br /> That makes us <span>top notch</span>`}>
                <div className="col-lg-4 col-md-6">
                    <ChatFeatureItem
                        title={"Simplify communications"}
                        href={".#"}
                        p={"Tidio lets you get all your live chat, e-mail, and Messenger\n" +
                        "                communication in one panel."}
                        imageOne={{
                            src: "/img/home-chat/chat.png"
                        }}
                        imageTwo={
                            {
                                src: "/img/home-chat/pluse.png",
                                alt: "pulse"
                            }
                        }
                    />
                </div>
                <div className="col-lg-4 col-md-6">
                    <ChatFeatureItem
                        title={"Quick Response"}
                        href={".#"}
                        p={"Tidio lets you get all your live chat, e-mail, and Messenger\n" +
                        "                communication in one panel."}
                        imageOne={{
                            src: "/img/home-chat/mobile.png"
                        }}
                        imageTwo={
                            {
                                src: "/img/home-chat/pluse.png",
                                alt: "pulse"
                            }
                        }
                    />
                </div>
                <div className="col-lg-4 col-md-6">
                    <ChatFeatureItem
                        title={"Easy Report"}
                        href={".#"}
                        p={"Tidio lets you get all your live chat, e-mail, and Messenger\n" +
                        "                communication in one panel."}
                        imageOne={{
                            src: "/img/home-chat/book.png"
                        }}
                        imageTwo={
                            {
                                src: "/img/home-chat/pluse.png",
                                alt: "pulse"
                            }
                        }
                    />
                </div>
            </CoreFeatures>
            <ChatFeatures
                rowClass='flex-row-reverse' pClass="pr_70" col1="col-lg-6 offset-lg-1" col2="col-lg-5"
                icon="chat_icon.png" img1="dot.png" img2="chat_02.png" img3="chat_01.png"
                titleSmall="Move deals" titlebig="through your funnel – fast"
                p="Real-time tools and rich insights mean our support solution amplifies your team for an unbeatable experience." url="#"
            />
            <ChatFeatures  pClass="pl_70" col1="col-lg-6" col2="col-lg-5 offset-lg-1" icon="video_icon.png" img1="dot.png" img2="skyp_1.png" img3="skyp_2.png" titleSmall="First ever" titlebig="Video Calling Support"
                           p="Real-time tools and rich insights mean our support solution amplifies your team for an unbeatable experience." url="#"/>
            <ChatFeatures rowClass='flex-row-reverse' pClass="pr_60" col1="col-lg-6 offset-lg-1" col2="col-lg-5" icon="dashboard.png" img1="dot.png" img2="support_dashboard.jpg" img3="skyp_2.png" titleSmall="Dedicated" titlebig="Dashboard Support"
                          p="Real-time tools and rich insights mean our support solution amplifies your team for an unbeatable experience." url="#"/>
            <ChatIntegration />
            <ChatClients/>
        </Layout>
    );
}

const keywords = ['chat','home'];

export default HomeChat;
