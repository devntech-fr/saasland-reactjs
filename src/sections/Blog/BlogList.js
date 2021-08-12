import React from 'react';
import BlogRightSidebar from './BlogRightSidebar';
import BlogListItem from './BlogListItem';
import ServiceData from '../Service/ServiceData';
const BlogList =()=>{
    return(
        <section className="blog_area sec_pad">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <BlogListItem ServiceData={ServiceData}/>
                        <ul className="list-unstyled page-numbers shop_page_number text-left mt_30">
                            <li><span aria-current="page" className="page-numbers current">1</span></li>
                            <li><a className="page-numbers" href=".#">2</a></li>
                            <li><a className="next page-numbers" href=".#"><i className="ti-arrow-right"></i></a></li>
                        </ul>
                    </div>
                    <div className="col-lg-4">
                        <BlogRightSidebar ServiceData={ServiceData}/>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default BlogList;
