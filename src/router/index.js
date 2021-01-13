import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home'
import About from '../views/About'
import Signup from '../views/Signup'
import Signin from '../views/Signin'
import Post from '../views/Post'
import Users from '../views/Users'
import Account from '../views/Account'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/signin',
    name: 'Signin',
    component: Signin
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup
  },
  {
    path: '/post',
    name: 'Post',
    component: Post
  },

  {
    path: '/users',
    name: 'Users',
    component: Users
  },

  {
    path: '/account',
    name: 'Account',
    component: Account
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
