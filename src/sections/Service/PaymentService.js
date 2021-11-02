import React , {Component} from 'react';
import Reveal from 'react-reveal/Reveal';

class PaymentService extends Component {
    render(){
        const { title, p, image, shape, services, reverse } = this.props;
        return(
            <section className="payment_service_area">
                <div className="container">
                    <div className={`row${reverse ? ` flex-row-reverse` : ''}`}>
                        <div className="col-lg-4">
                            <Reveal effect="fadeInUp" duration={500}>
                                <div className="service-content">
                                    <div className="pay_icon">
                                        {shape ? <div className="icon_shape"></div> : <React.Fragment></React.Fragment>}
                                        {image ? <img src={image.url} alt={image.alt}/> : <React.Fragment></React.Fragment>}
                                    </div>
                                    <h2 className="f_p w_color f_700">{title}</h2>
                                    <p className="f_p w_color">{p}</p>
                                </div>
                            </Reveal>
                        </div>
                        <div className="col-lg-8">
                            <div className="row">
                                {
                                    services.map((item, key) => {
                                        return(
                                            <Reveal effect="fadeInUp" duration={500} cascade key={key}>
                                                <div className="col-md-6 media payment_service_item">
                                                    <div className="icon">
                                                        <img src={"/img/home9/" + item.image} alt=""/>
                                                    </div>
                                                    <div className="media-body">
                                                        <h3 className="f_size_20 f_p w_color f_600">{item.title}</h3>
                                                        <p className="f_400 f_size_15 w_color">{item.description}</p>
                                                    </div>
                                                </div>
                                            </Reveal>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
export default PaymentService;

PaymentService.defaultProps = {
    title: 'Our services',
    p: 'Why I say old chap that is, spiffing jolly good a load of old tosh spend a penny tosser arse over.',
    image: {
        src: '/img/home9/icon3.png',
        alt: ''
    },
    shape: false,
    services: []
}
