import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from "../views/Home"
import Login from "../views/Login"

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
]

const router = new VueRouter({
    routes
})


//SECURED ROUTING
/*router.beforeEach((to, from, next) => {
    const publicPages = ['/login', '/register','/requestPasswordReset','/resetPassword','/activateAccount'];
    const authRequired = !publicPages.includes(to.path);
    const loggedIn = localStorage.getItem('user');
  
    // trying to access a restricted page + not logged in
    // redirect to login page
    if (authRequired && !loggedIn) {
      next('/login');
    } else {
      next();
    }
  });
  */
  export default router