import React,{Component} from 'react';
import SectionTitle from "sections/Title/SectionTitle";

class AppWork extends Component{
    render(){
        let ServiceData = this.props.ServiceData;
        return(
            <section className="app_service_area" id="work">
                <div className="container">
                    <SectionTitle sClass="sec_title text-center mb_70" Title="How We Work" tClass="t_color3" TitleP="Bender cobblers chap grub sloshed up the duff I fantastic owt to do with me at public school.!"/>
                    <div className="row app_service_info">
                        {
                            ServiceData.work.map(item => {
                                return(
                                    <div className="col-lg-4" key={item.id}>
                                        <div className="app_service_item wow fadeInUp" data-wow-delay="0.2s">
                                            <i className={`app_icon ${item.icon}`}></i>
                                            <h5 className="f_p f_size_18 f_600 t_color3 mt_40 mb-30">{item.title}</h5>
                                            <p className="f_400 f_size_15 mb-30">{item.p}</p>
                                            <a href={item.button.href} target={item.button.target} className={item.button.classNames}>{item.button.label} <i className={item.button.iconClassName}></i></a>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </section>
        )
    }
}
export default AppWork;
