import * as VueRouter from 'vue-router';
import Login from './components/Authentication/Login';
import Register from './components/Authentication/Register';
import HomePage from './components/HomePage';
import PageNotFound from './components/PageNotFound';
const routes = [
  { path: '/', component: HomePage },
  {path:'/login',component:Login},
  {path:'/register',component:Register},
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: PageNotFound },
];
const router = VueRouter.createRouter({
  history: VueRouter.createWebHistory(),
  routes, // short for `routes: routes`
});
export default router;