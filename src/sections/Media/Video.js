import React from 'react';
import SectionTitle from "sections/Title/SectionTitle";

const Video = () => {
    return(
        <section className="video_area bg_color sec_pad">
            <div className="container">
                <SectionTitle title="Your enterprise carrier in the Cloud" p="WShow off show off pick your nose and blow off Elizabeth grub haggle dropped a clanger cracking.!" tClass="t_color3" sClass="sec_title text-center mb_70"/>
                <div className="video_content">
                    <div className="video_info">
                        <div className="ovarlay_color"></div>
                        <a className="popup-youtube video_icon" href="https://www.youtube.com/watch?v=sU3FkzUKHXU"><i className="arrow_triangle-right"></i></a>
                        <h2>SaasLand</h2>
                    </div>
                    <img className="video_leaf" src={'/img/new/leaf.png'} alt=""/>
                    <img className="cup" src={'/img/new/cup.png'} alt=""/>
                </div>
            </div>
        </section>
    )
}

export default Video;
