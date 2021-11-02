import React from "react";

function ErpTestimonialItem({ testimonial }) {
    const { description, stars, image, name, position, location } = testimonial;
    const showStars = () => {
        for (let star = 0; star <= stars; star++) {
            return (
                <a href="/#"><i className={`icon_star star_${star}`}></i></a>
            )
        }
    }
    return (
        <div className="erp_testimonial_item">
            <div className="content">
                <p>{description}</p>
                <div className="ratting">
                    {showStars()}
                    {/*<a href="/#"><i className="icon_star"></i></a>*/}
                    {/*<a href="/#"><i className="icon_star"></i></a>*/}
                    {/*<a href="/#"><i className="icon_star"></i></a>*/}
                    {/*<a href="/#"><i className="icon_star"></i></a>*/}
                    {/*<a href="/#"><i className="icon_star"></i></a>*/}
                </div>
            </div>
            <div className="media">
                <img src={"/img/erp-home/" + image} alt=""/>
                <div className="media-body">
                    <h5>{name}<span>{position}</span></h5>
                    <p>{location}</p>
                </div>
            </div>
        </div>
    )
}

export default ErpTestimonialItem;
