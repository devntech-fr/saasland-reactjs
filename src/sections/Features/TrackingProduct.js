import React, {Component} from 'react';
import TrackingProductItem from 'components/Tracking/TrackingProductItem';


class TrackingProduct extends Component{
    render(){
        const { children } = this.props;
        return(
            <section className="tracking_product_area sec_pad">
                <div className="container">
                    {children}
                </div>
            </section>
        )
    }
}

export default TrackingProduct;
