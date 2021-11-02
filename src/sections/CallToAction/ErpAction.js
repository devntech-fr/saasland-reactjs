import React from 'react';
import RichContent from "components/Content/RichContent";

class ErpAction extends RichContent {
    render() {
        const { image } = this.props;
        return(
            <section className="erp_action_area">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-3 col-md-4">
                            {
                                image && (
                                    <img src={image.src} alt={image.alt} />
                                )
                            }
                        </div>
                        <div className="col-lg-9 col-md-8">
                            <div className="erp_content">
                                <h2 dangerouslySetInnerHTML={this.displayTitle()}></h2>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
export default ErpAction;
