import React from 'react';
import SectionTitle from "sections/Title/SectionTitle";
import HostingBlogItems from '../Blog/HostingBlogItems';
function HostingBlog({ title, p, children }) {
    return(
        <section className="h_blog_area sec_pad">
            <div className="container">
                <SectionTitle
                    title={title}
                    p={p}
                    sClass="hosting_title text-center"
                />
                <div className="row">
                    {children}
                </div>
            </div>
        </section>
    )
}

export default HostingBlog;
