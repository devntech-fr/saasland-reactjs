import React, { Component } from "react";

class ChatFeatures extends Component {
  render() {
    let {
      parallaxImages,
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
                {
                  parallaxImages && parallaxImages.map((image, key) => (
                        <img
                            className={image.classNames}
                            src={image.src}
                            alt={image.alt}
                            title={image.alt}
                            data-parallax={`{"x": ${image.parallax.x}, "y": ${image.parallax.y}`}
                        />
                    ))
                }
              </div>
            </div>
            <div className={col2}>
              <div className={`chat_features_content ${pClass}`}>
                <img src={icon} alt="" />
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
