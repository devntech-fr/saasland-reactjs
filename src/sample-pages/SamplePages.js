import React from "react";
import {Route, Switch} from "react-router-dom";
import AboutSectionsSample from "sample-pages/AboutSectionsSample";
import BannerSectionsSample from "sample-pages/BannerSectionsSample";
import BlogGridSample from "sample-pages/BlogGridSample";
import BlogListSample from "sample-pages/BlogListSample";
import BlogSingleSample from "sample-pages/BlogSingleSample";
import EventGallerySample from "sample-pages/EventGallerySample";
import FeaturesSectionsSample from "sample-pages/FeaturesSectionsSample";
import FooterSample from "sample-pages/FooterSample";

function SamplePages({ match }) {
    if (match.url !== '/sample') {
        return null;
    }
    return (
        <Switch>
            <Route path={match.url + "/about"} component={AboutSectionsSample} />
            <Route path={match.url + "/banner"} component={BannerSectionsSample}/>
            <Route path={match.url + "/blog-grid"} component={BlogGridSample}/>
            <Route path={match.url + "/blog-list"} component={BlogListSample}/>
            <Route path={match.url + "/blog-single"} component={BlogSingleSample}/>
            <Route path={match.url + "/event-gallery"} component={EventGallerySample}/>
            <Route path={match.url + "/features"} component={FeaturesSectionsSample}/>
            <Route path={match.url + "/footer"} component={FooterSample}/>
        </Switch>
    )
}

export default SamplePages;
