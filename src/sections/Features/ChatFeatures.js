import React, { Component } from "react";

class ChatFeatures extends Component {
  render() {
    let {
      img1,
      img2,
      img3,
      reverse,
      col1,
      col2,
      url,
      boldtitle,
      title,
      p,
      icon,
      pClass
    } = this.props;
    return (
      <section className="chat_features_area">
        <div className="container">
          <div className={`row align-items-center ${reverse && `flex-row-reverse`}`}>
            <div className={col1}>
              <div className="chat_features_img chat_features_img_one">
                <img
                  className="p_absolute dot_bg"
                  src={"/img/home-chat/" + img1}
                  alt=""
                />
                <img
                  className="chat_one"
                  data-parallax='{"x": 0, "y": 80}'
                  src={"/img/home-chat/" + img2}
                  alt=""
                />
                <img
                  className="p_absolute chat_two"
                  data-parallax='{"x": 0, "y": -80}'
                  src={"/img/home-chat/" + img3}
                  alt=""
                />
              </div>
            </div>
            <div className={col2}>
              <div className={`chat_features_content ${pClass}`}>
                <img src={"/img/home-chat/" + icon} alt="" />
                <h2>
                  <span>{boldtitle}</span> {title}
                </h2>
                <p>{p}</p>
                <a href={url}>Learn more</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default ChatFeatures;
