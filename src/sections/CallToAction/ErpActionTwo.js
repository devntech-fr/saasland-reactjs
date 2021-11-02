import React from 'react';
import RichContent from "components/Content/RichContent";

class ErpActionTwo extends RichContent {
    render() {
        const { image, buttonLink } = this.props;
        return(
            <section className="erp_call_action_area">
                <div className="container">
                    <div className="erp_action_content text-center">
                        {
                            image && (
                                <img src={image.src} alt={image.alt}/>
                            )
                        }
                        <h3 dangerouslySetInnerHTML={this.displayTitle()}></h3>
                        <p dangerouslySetInnerHTML={this.displayParagraph()}></p>
                        {
                            buttonLink && (
                                <a href={buttonLink.href} target={buttonLink.target} className="er_btn er_btn_two">{buttonLink.label}</a>
                            )
                        }
                    </div>
                </div>
            </section>
        )
    }
}
export default ErpActionTwo;
