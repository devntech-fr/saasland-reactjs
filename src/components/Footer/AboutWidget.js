import React, {Component} from 'react';

class AboutWidget extends Component {
    render(){
        const { title, links, dark } = this.props;
        return(
            <div className={`f_widget${dark ? ` dark_widget` : ''} about-widget pl_70 wow fadeInLeft`} data-wow-delay="0.4s">
                <h3 className="f-title f_600 t_color f_size_18 mb_40">{title}</h3>
                <ul className="list-unstyled f_list">
                    {
                        links.map(item =>{
                            return(
                                <li key={item.id}><a href="/">{item.text}</a></li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default AboutWidget;
