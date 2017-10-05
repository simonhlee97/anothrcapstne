export default {
    computed: {
        filteredBlogs: function(){
            return this.blogs.filter((blog) => {
                return blog.title.match(this.search);
            });
        }
    }
};
// this mixin contains the search function, using .filter() method