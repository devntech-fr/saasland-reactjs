import React, {useState} from "react";

function Contact() {
    const [contactForm, setContactForm] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleSubmit = () => {}

    const handleChange = e => {
        setContactForm({[e.target.name]: e.target.value})
    }
    return (
        <section className="contact_info_area sec_pad bg_color">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3">
                        <div className="contact_info_item">
                            <h6 className="f_p f_size_20 t_color3 f_500 mb_20">Bureau</h6>
                            <p className="f_400 f_size_15">11, Aude</p>
                        </div>
                        <div className="contact_info_item">
                            <h6 className="f_p f_size_20 t_color3 f_500 mb_20">Contact Info</h6>
                            <p className="f_400 f_size_15"><span className="f_400 t_color3">Téléphone :</span> <a href="tel:+33665546677">(+33) 6 65 54 66 77</a></p>
                            <p className="f_400 f_size_15"><span className="f_400 t_color3">Email :</span> <a href="mailto:saasland@gmail.com">devntech@protonmail.com</a></p>
                        </div>
                    </div>
                    <div className="contact_form col-lg-9">
                        <h2 className="f_p f_size_22 t_color3 f_600 l_height28 mb_40">Leave a Message</h2>
                        <form onSubmit={handleSubmit} className="contact_form_box" method="post" id="contactForm">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="form-group text_box">
                                        <input type="text" id="name" name="name" placeholder="Votre NOM COMPLET" onChange={handleChange}/>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group text_box">
                                        <input type="text" name="email" id="email" placeholder="Votre Email" onChange={handleChange}/>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="form-group text_box">
                                        <input type="text" id="subject" name="subject" placeholder="Sujet" onChange={handleChange}/>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="form-group text_box">
                                        <textarea onChange={handleChange} name="message" id="message" cols="30" rows="10" placeholder="Votre Message . . ."></textarea>
                                    </div>
                                </div>
                            </div>
                            <button type="submit" className="btn_three">Envoyer</button>
                        </form>
                        {/* {emailStatus ? emailStatus : null} */}
                        <div id="success">Your message succesfully sent!</div>
                        <div id="error">Opps! There is something wrong. Please try again</div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Contact;
