import React, {Component} from 'react';
class CloudServiceTabItem extends Component{
    render(){
        var {ticon,text, description, colClass} = this.props;
        return(
            <div className={`col-lg-5 col-md-6 ${colClass}`}>
                <div className="software_service_item mb_70">
                    <i className={ticon}></i>
                    <h5 className="mt_30 mb_15">{text}</h5>
                    <p>{description}</p>
                </div>
            </div>
        )
    }
}
export default CloudServiceTabItem;
