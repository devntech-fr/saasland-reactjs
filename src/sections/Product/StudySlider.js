import React, {Component} from 'react';
import Slider from 'react-slick/';

function StudySlider({ cases }) {
    const renderCases = () => {
        return cases.map((study, key) => {
            console.log('study',study);
            return (
                <div className="iitem" key={key}>
                    <div className="studies_item">
                        <img src={study.image} alt={study.title}/>
                        <div className="text">
                            <a href=".#">
                                <h4>{study.title}</h4>
                            </a>
                            {
                                study.tags.map((tag, key) => (
                                    <span key={key}>
                                        <a href={tag.href}>{tag.name}</a>
                                    </span>
                                ))
                            }
                        </div>
                    </div>
                </div>
            )
        
        });
    }
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                slidesToShow: 1,
                slidesToScroll: 1
                }
            }
            ]
        };
    return (
        <React.Fragment>
            <Slider {...settings} className="case_studies_slider">
                {renderCases()}
            </Slider>
        </React.Fragment>
    )
}

export default StudySlider;
