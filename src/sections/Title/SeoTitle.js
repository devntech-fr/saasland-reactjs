import React, {Component} from 'react';
import Reveal from 'react-reveal/Reveal';

class SeoTitle extends Component {
    render(){
        var {title, p} = this.props;
        return(
            <div className="seo_sec_title text-center mb_70">
                <Reveal effect="fadeInUp" duration={1300}><h2>{title}</h2></Reveal>
                <Reveal effect="fadeInUp" duration={1600}><p>{p}</p></Reveal>
            </div>
        )
    }
}
export default SeoTitle;
