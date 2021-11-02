import React from "react";

function MarketingTestimonialItem({ testimonial }) {
    const { id, description, image, authorName, authorPost } = testimonial;

    return (
        <div className="testimonial_item text-center left">
            <div className="author_img"><img src={image} alt=""/></div>
            <div className="author_description">
                <h4 className="f_500 t_color3 f_size_18">{authorName}</h4>
                <h6>{authorPost}</h6>
            </div>
            <p>{description}</p>
        </div>
    )
}

MarketingTestimonialItem.defaultProps = {
    id: 1,
    image: '/img/home4/author_img.png',
    authorName: 'Lurch Schpellchek',
    authorPost: 'UI/UX designer',
    description: 'What a load of rubbish bits and bobs pear shaped owt to do with me bubble and squeak jolly good morish tinkety tonk old fruit, car boot my good sir buggered plastered cheeky David, haggle young delinquent say so I said bite your arm off easy peasy. Skive off it`s all gone to pot buggered.',
}

export default MarketingTestimonialItem;
