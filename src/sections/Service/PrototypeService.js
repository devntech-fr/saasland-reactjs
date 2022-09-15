import React, {Component} from 'react';
import SectionTitle from "sections/Title/SectionTitle";
import ServicesSlider from 'sections/Service/ServicesSlider';

class PrototypeService extends Component{
    render(){
        return(
            <section className="prototype_service_area_two">
                <div className="container custom_container">
                    <SectionTitle
                        title="Your enterprise carrier in the Cloud"
                        p="WShow off show off pick your nose and blow off Elizabeth grub haggle dropped a clanger cracking.!"
                        tClass="t_color3"
                        sClass="sec_title text-center mb_70"
                    />
                    <ServicesSlider
                        sliderItems={[
                            {
                                id: 1,
                                icon: 'ti-check',
                                title: `Mail Metrics<br/> Receive`,
                                p: `Brolly off his nut A bit of how's your father chancer in my flat chinwag bog skive.`,
                                image: {
                                    src: '/img/home2/undraw.png',
                                    alt: 'undraw'
                                }
                            },
                            {
                                id: 2,
                                icon: 'ti-check',
                                title: `Mail Metrics<br/> Receive`,
                                p: `Brolly off his nut A bit of how's your father chancer in my flat chinwag bog skive.`,
                                image: {
                                    src: '/img/home2/undraw.png',
                                    alt: 'undraw'
                                }
                            },
                            {
                                id: 3,
                                icon: 'ti-check',
                                title: `Mail Metrics<br/> Receive`,
                                p: `Brolly off his nut A bit of how's your father chancer in my flat chinwag bog skive.`,
                                image: {
                                    src: '/img/home2/undraw.png',
                                    alt: 'undraw'
                                }
                            },
                        ]}
                    />
                </div>
            </section>
        )
    }
}
export default PrototypeService;
