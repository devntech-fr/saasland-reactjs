import React from 'react';
import HRServiceItem from 'components/Service/HRServiceItem';
import RichContent from "components/Content/RichContent";
import ServiceData from "sections/Service/ServiceData";

class HRServices extends RichContent{
    render(){
        const { services, children } = this.props;
        return(
            <section className="prototype_service_info">
                <div className="symbols-pulse active">
                    <div className="pulse-1"></div>
                    <div className="pulse-2"></div>
                    <div className="pulse-3"></div>
                    <div className="pulse-4"></div>
                    <div className="pulse-x"></div>
                </div>
                <div className="container">
                    <h2 className="f_size_30 f_600 t_color3 l_height45 text-center mb_90" dangerouslySetInnerHTML={this.displayTitle()}></h2>
                    <div className="row p_service_info">
                        {children}
                    </div>
                </div>
            </section>
        )
    }
}
export default HRServices;

HRServices.defaultProps = {
    title: `SaasLand is built for designers like you.<br/> With useful features, an intuitive interface.`,
    services: ServiceData.HRService
}
