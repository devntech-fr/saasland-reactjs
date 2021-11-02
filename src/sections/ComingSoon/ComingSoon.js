import React from "react";
import ComingClock from "components/Coming/ComingClock";

function ComingSoon(){
    return (
        <div className="saasland_container">
            <div className="saasland_col_6 saasland_col_content">
                <div className="container_wrap">
                    <div className="saasland_log">
                        <a href="#"><img src="/img/logo.png" srcSet="img/logo2x.png 2x" alt=""/></a>
                    </div>
                    <div className="saasland_content">
                        <h2>We're Coming Soon..</h2>
                        <h1 className="f_robot_c f_50 f_700">We're working in<br/> our new website,<br/> stay tuned!</h1>
                        <a href="#" className="btn btn_hover agency_banner_btn">Notify Us</a>
                    </div>
                    <div className="saasland_bottom">
                        Copyright © 2018 Desing by <a href="#">DroitThemes</a>
                    </div>
                </div>
            </div>
            <div className="saasland_col_6 saasland_col_screen">
                <div className="saasland_bg"></div>
                <div id="clockdiv" className="clock">
                    <div className="timer">
                        <span className="days"></span>
                        <div className="smalltext">Days</div>
                    </div>
                    <div className="timer">
                        <span className="hours"></span>
                        <div className="smalltext">Hours</div>
                    </div>
                    <div className="timer">
                        <span className="minutes"></span>
                        <div className="smalltext">Minutes</div>
                    </div>
                    <div className="timer">
                        <span className="seconds"></span>
                        <div className="smalltext">Seconds</div>
                    </div>
                </div>
                <div className="saasland_social">
                    <p>Stay in Touch :</p>
                    <ul className="list_style">
                        <li><a href="#"><i className="social_facebook"></i></a></li>
                        <li><a href="#"><i className="social_twitter"></i></a></li>
                        <li><a href="#"><i className="social_linkedin"></i></a></li>
                        <li><a href="#"><i className="social_pinterest"></i></a></li>
                        <li><a href="#"><i className="social_youtube"></i></a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ComingSoon;
