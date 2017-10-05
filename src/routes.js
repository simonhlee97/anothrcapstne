import addBlog from './components/addBlog.vue';
import showBlogs from './components/showBlogs.vue';
import singleBlog from './components/singleBlog.vue';
import splash from './components/splash.vue';

export default [
    { path: '/all', component: showBlogs},
    { path: '/add', component: addBlog},
    { path: '/blog/:id', component: singleBlog},
    { path: '/', component: splash}
]
