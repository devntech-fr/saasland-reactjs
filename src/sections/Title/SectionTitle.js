import React from 'react';
import RichContent from "components/Content/RichContent";

class SectionTitle extends RichContent {
    render(){
        var {title, p, sClass, tClass} = this.props;
        console.log('title, p', title, p);
        return(
            <div className={`${sClass} ${tClass}`}>
                <h2 className="mb_0 title_h2 t_color wow fadeInUp" data-wow-delay="0.3s" dangerouslySetInnerHTML={this.displayTitle(title)}></h2>
                <p className="mb_0 wow fadeInUp" data-wow-delay="0.6s" dangerouslySetInnerHTML={this.displayParagraph(p)}></p>
                <span className="bottom_line wow fadeInLeft" data-wow-delay="0.9s"></span>
            </div>
        )
    }
}

export default SectionTitle;
