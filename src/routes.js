import addBlog from './components/addBlog.vue';
import showBlogs from './components/showBlogs.vue';
import singleBlog from './components/singleBlog.vue';
import splash from './components/splash.vue';
import Login from './components/Login';
import signup from './components/signup.vue';

export default [
		{	path: '*',
			redirect: '/Login'
		},
		{
			path: '/',
			redirect: 'Login'
		},
	    { 
	    	path: '/all',
	    	component: showBlogs
	    }, 
	    { 
	    	path: '/Login',
	    	name: 'Login',
	    	component: Login
	    },

	    { 
	    	path: '/add',
	    	name: 'addBlog',
	    	component: addBlog,
	    	meta: {
	    		requiresAuth: true
	    	}
	    },

	    { 
	    	path: '/blog/:id',
	    	name: 'singleBlog',
	    	component: singleBlog
	    },
	    { 
	    	path: '/',
	    	name: 'splash',
	    	component: splash
	    },
	    { 
	    	path: '/signup',
	    	name: 'signup',
	    	component: signup
	    }
	]
