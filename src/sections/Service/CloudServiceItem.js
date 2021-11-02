import React, {Component} from 'react';

class CloudServiceItem extends Component {
    render(){
        const { image, title, p, buttonLink, shape, cols, noButton } = this.props;
        return(
            <div className={`col-lg-${cols} col-sm-6 wow fadeInUp`} data-wow-delay="0.4s">
                <div className="software_featured_item text-center mb_20">
                    <div className="s_icon">
                        {
                            shape
                                ? <img src={"/img/home5/icon_shape.png"} alt=""/>
                                : <React.Fragment></React.Fragment>
                        }
                        <img className="icon" src={image.src} alt=""/>
                    </div>
                    <h3 className="f_600 t_color3">{title}</h3>
                    <p className="f_400 f_size_15 mb-30">{p}</p>
                    {!noButton && <a href={buttonLink.href} className="learn_btn">{buttonLink.label}</a>}
                </div>
            </div>
        )
    }
}
export default CloudServiceItem

CloudServiceItem.defaultProps = {
    title: 'Build better apps faster',
    p: "Crikey blow off chap knackered gosh bobby geeza gormless well, Charles cheeky bugger I cor blimey guvnor hanky panky jolly good.",
    buttonLink: {
        label: "Learn More",
        href: "/#"
    },
    shape: true,
    noButton: false,
    image: {
        src: '/img/home5/icon1.png',
        alt: ''
    },
    cols: 4
}
