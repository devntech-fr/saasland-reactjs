import BlogGrid from "sections/Blog/BlogGrid";
import BlogList from "sections/Blog/BlogList";
import BlogRightSidebar from "sections/Blog/BlogRightSidebar";
import HostingBlog from "sections/Blog/HostingBlog";
import BlogSingle from "sections/Blog/BlogSingle";

export default {
    default: BlogGrid,
    grid: BlogGrid,
    list: BlogList,
    withSidebar: BlogRightSidebar,
    hosting: HostingBlog,
    single: BlogSingle
}
