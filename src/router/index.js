import Vue from 'vue'
import VueRouter from 'vue-router'
import cookieFun from '../javascript/cookieFunctions'

import Home from "../views/Home"
import Login from "../views/Login"
import Register from "../views/Register"
import Unauthorized from "../views/Unauthorized"
import WelcomeUser from "../views/welcome/WelcomeUser.vue"
import WelcomeAdmin from "../views/welcome/WelcomeAdmin.vue"
import WelcomeOmanager from "../views/welcome/WelcomeOmanager.vue"
import WelcomeVmanager from "../views/welcome/WelcomeVmanager.vue"
import WelcomeLmanager from "../views/welcome/WelcomeLmanager.vue"
import ManageOrganisations from "../views/admin/ManageOrganisations.vue"


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
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/unauthorized',
    name: 'Unauthorized',
    component: Unauthorized
  },

  {
    path: '/user',
    component: WelcomeUser,
    beforeEnter: (to, from, next) => {
      if (!cookieFun.hasRole('user')) {
        next('/unauthorized')
      } else {
        next()
      }
    },
    children: [
      {
        path: 'welcome',
        component: WelcomeUser
      }
    ]
  },


  {
    path: '/admin',
    beforeEnter: (to, from, next) => {
      if (!cookieFun.hasRole('admin')) {
        next('/unauthorized')
      } else {
        next()
      }
    },
    component: WelcomeAdmin,
    children: [
      {
        path: 'welcome',
        component: WelcomeAdmin
      }]
  },

  {
    path: '/admin/manageOrganisations',
    beforeEnter: (to, from, next) => {
      if (!cookieFun.hasRole('admin')) {
        next('/unauthorized')
      } else {
        next()
      }
    },
    component: ManageOrganisations
  },

  {
    path: '/omanager',
    component: WelcomeOmanager,
    beforeEnter: (to, from, next) => {
      if (!cookieFun.hasRole('organisation_manager')) {
        next('/unauthorized')
      } else {
        next()
      }
    },
    children: [
      {
        path: 'welcome',
        component: WelcomeOmanager
      }
    ]
  },

  {
    path: '/vmanager',
    component: WelcomeVmanager,
    beforeEnter: (to, from, next) => {
      if (!cookieFun.hasRole('venue_manager')) {
        next('/unauthorized')
      } else {
        next()
      }
    },
    children: [
      {
        path: 'welcome',
        component: WelcomeVmanager
      }
    ]
  },

  {
    path: '/lmanager',
    component: WelcomeLmanager,
    beforeEnter: (to, from, next) => {
      if (!cookieFun.hasRole('line_manager')) {
        next('/unauthorized')
      } else {
        next()
      }
    },
    children: [
      {
        path: 'welcome',
        component: WelcomeLmanager
      }
    ]
  },

  //redirecting for when full token name is used in route
  {
    path: '/line_manager/:location', redirect: '/lmanager/:location'
  },
  {
    path: '/organisation_manager/:location', redirect: '/omanager/:location'
  },
  {
    path: '/venue_manager/:location', redirect: '/vmanager/:location'
  },
]

const router = new VueRouter({
  routes
})


//SECURED ROUTING
router.beforeEach((to, from, next) => {
  const publicPages = ['/', '/login', '/register', '/unauthorized' /*,'/requestPasswordReset','/resetPassword','/activateAccount'*/];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = cookieFun.isLoggedIn();

  if (authRequired && !loggedIn) {
    next('/login');
  } else {
    next();
  }


});

export default router