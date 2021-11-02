import React, {Component} from 'react';
import SectionTitle from "sections/Title/SectionTitle";
import ServiceSlider from 'sections/Service/Sservice/ServiceSlider';

class PrototypeService extends Component{
    render(){
        return(
            <section className="prototype_service_area_two">
                <div className="container custom_container">
                    <SectionTitle Title="Your enterprise carrier in the Cloud" TitleP="WShow off show off pick your nose and blow off Elizabeth grub haggle dropped a clanger cracking.!"
                    tClass="t_color3" sClass="sec_title text-center mb_70"/>
                    <ServiceSlider/>
                </div>
            </section>
        )
    }
}
export default PrototypeService;
