import Home from './Pages/Home'
import SignIn from './Pages/SignIn'
import About from './Pages/About'

export const routes = [

   {
      path: '/',
      name: 'home',
      component: Home,
      exact: true
   },

   {
      path: '/signin',
      name: 'auth.signin',
      component: SignIn,
      exact: true,
      meta: 'guest'
   },

   {
      path: '/about',
      name: 'pages.about',
      component: About,
      exact: true,
      meta: 'auth'
   }

]

export const NavbarRoutes = [

   {
      title: 'Home',
      path: '/',
   },

   {
      title: 'About',
      path: '/about',
      meta: 'auth'
   }

]
