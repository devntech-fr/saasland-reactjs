import React, {Component} from 'react';
import Isotope from 'isotope-layout/js/isotope';
import ImagesLoaded from 'imagesloaded/imagesloaded';
import Portfolio2GridItem from 'sections/Portfolio/Portfolio2GridItem';

class Portfolio2Grid extends Component{
    state = {
        activeItem: '*',
    }

    componentDidMount() {
        var imgLoad = new ImagesLoaded('#work-portfolio');

        imgLoad.on('progress', function(instance, image) {
            this.iso = new Isotope('#work-portfolio', {
                itemSelector: '.portfolio_item',
                layoutMode: "masonry"
            });
        });

    }
    onFilterChange = (newFilter) => {

        this.setState({activeItem: newFilter});
        if (this.iso === undefined) {
            this.iso = new Isotope('#work-portfolio', {
            itemSelector: '.portfolio_item',
            layoutMode: "masonry"
            });
        }

    // this.iso.arrange({ filter: newFilter });
      if(newFilter === '*') {
        this.iso.arrange({ filter: `*` });
      } else {
        this.iso.arrange({ filter: `.${newFilter}` });
      }
    }

    onActive = v => v === this.state.activeItem ? 'active' : '';

    showFilters = () => {
        return this.props.filters?.map((filter, key) => {
            console.log('filter',filter);
            return (
                <div data-filter={filter.name} className={`work_portfolio_item ${this.onActive(filter.name)}`} onClick={() => {this.onFilterChange(filter.name)}} key={key}>{filter.label}</div>
            )
        })
    }

    showGridItems = () => {
        return this.props.posts?.map((post, key) => {
            console.log('post',post);
            return (
                <Portfolio2GridItem
                    colClass={post.colClass}
                    image={post.image}
                    title={post.title}
                    tags={post.tags}
                />
            )
        })
    }

    render(){
        return(
            <section className="portfolio_area sec_pad bg_color">
                <div className="container">
                    <div id="portfolio_filter" className="portfolio_filter mb_50">
                        <div
                            data-filter="*"
                            className={`work_portfolio_item ${this.onActive('*')}`}
                            onClick={() => {this.onFilterChange("*")}}
                        >All</div>
                        {this.showFilters()}
                    </div>
                    <div className="row portfolio_gallery mb_30" id="work-portfolio">
                        {this.showGridItems()}
                        <Portfolio2GridItem colClass="col-lg-6 web fashion" pImg="/2-columns/grid1.jpg" ptitle="Apple Mobile Mockup" tOne="Web" tTwo="Fashion"/>
                        <Portfolio2GridItem colClass="col-lg-6 develop" pImg="2-columns/grid2.jpg" ptitle="Interior Design" tOne="Develop"/>
                        <Portfolio2GridItem colClass="col-lg-6 web" pImg="2-columns/grid3.jpg" ptitle="Portfolio Center Slider" tOne="Web" tTwo="Fashion"/>
                        <Portfolio2GridItem colClass="col-lg-6 fashion" pImg="2-columns/grid4.jpg" ptitle="Portfolio Masonry" tOne="fashion"/>
                        <Portfolio2GridItem colClass="col-lg-6 ux brand" pImg="2-columns/grid5.jpg" ptitle="Double Exposure" tOne="UX" tTwo="Brand"/>
                        <Portfolio2GridItem colClass="col-lg-6 product" pImg="2-columns/grid6.jpg" ptitle="American Burger" tOne="Product" />
                        <Portfolio2GridItem colClass="col-lg-6 develop fashion" pImg="2-columns/grid7.jpg" ptitle="Double Exposure" tOne="Develop" tTwo="Fashion"/>
                        <Portfolio2GridItem colClass="col-lg-6 brand ux" pImg="2-columns/grid8.jpg" ptitle="Inner Smart Watch" tOne="Brand" tTwo="UX"/>
                    </div>
                </div>
            </section>
        )
    }
}
export default Portfolio2Grid;
