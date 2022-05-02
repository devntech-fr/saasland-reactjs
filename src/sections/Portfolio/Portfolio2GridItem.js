import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Portfolio2GridItem extends Component{
    render(){
        var {image, title, tags, colClass } = this.props;
        return(
            <div className={`portfolio_item mb-30 ${colClass} `}>
                <div className="portfolio_img">
                    <img src={"/img/portfolio/" + image} alt=""/>
                    <div className="hover_content">
                        <a href=".#" className="img_popup leaf"><i className="ti-plus"></i></a>
                        <div className="portfolio-description leaf">
                            <Link to="/Pages/PortfolioSingle" className="portfolio-title">
                                <h3 className="f_500 f_size_20 f_p">{title}</h3>
                            </Link>
                            <div className="links">
                                {tags?.map((tag, key) => (
                                    <a href=".#" key={key}>{tag}</a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
export default Portfolio2GridItem;