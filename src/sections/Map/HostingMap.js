import React , {Component} from 'react';
import SectionTitle from "sections/Title/SectionTitle";
import ServiceData from "sections/Service/ServiceData";

class HostingMap extends Component {
    constructor(props){
        super(props);
        this.state = {
            Map: ServiceData.HostingMap.Map
        }
    }
    render(){
        const { title, p } = this.props;
        return(
            <section className="h_map_area">
                <div className="container">
                    <SectionTitle
                        title={title}
                        p={p}
                        sClass="hosting_title text-center"
                    />
                    <div className="h_map">
                        <ul className="list-unstyled">
                            {
                                this.state.Map.map(item=>(
                                    <li className="wow fadeIn" data-wow-delay="0.1s" key={item.id}>
                                        <div className="place_name wow fadeInUp" data-wow-delay="0.2s">{item.countryName}</div>
                                        <div className="round"><div className="dot"></div></div>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </section>
        )
    }
}
export default HostingMap;
