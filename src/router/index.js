import { createWebHistory, createRouter } from "vue-router";
import store from "../store";

import ErrorPage from "../components/Pages/ErrorPage.vue";
import BlogLeftSidebarPage from "../components/Pages/BlogLeftSidebarPage.vue";
import BlogDetailsPage from "../components/Pages/BlogDetailsPage.vue";
import BlogCategoryPage from "../components/Pages/BlogCategoryPage.vue";
import BlogTagPage from "../components/Pages/BlogTagPage.vue";
import BlogSearchPage from "../components/Pages/BlogSearchPage.vue";
import ContactPage from "../components/Pages/ContactPage.vue";
import AuthenticationPage from "../components/Pages/AuthenticationPage.vue";

const routes = [
  { path: "/", name: "BlogLeftSidebarPage", component: BlogLeftSidebarPage },
  { path: "/blog-details/:id", name: "BlogDetailsPage", component: BlogDetailsPage },
  { path: "/blog-categories/:id", name: "BlogCategoryPage", component: BlogCategoryPage },
  { path: "/blog-tags/:id", name: "BlogTagPage", component: BlogTagPage },
  { path: "/blog-search-result", name: "BlogSearchPage", component: BlogSearchPage },
  { path: "/contact", name: "ContactPage", component: ContactPage },
  {
    path: "/login",
    name: "AuthenticationPage",
    component: AuthenticationPage,
  },
  { path: "/:pathMatch(.*)*", name: "ErrorPage", component: ErrorPage },
];

const router = createRouter({
  history: createWebHistory('/'),
  linkExactActiveClass: "active",
  routes,
  scrollBehavior() {
    return { top: 0, behavior: "smooth" };
  },
});

router.beforeEach((to, from, next) => {
  if (!store.getters.authIsReady) {
    const unsubscribe = store.watch(
      (state, getters) => getters.authIsReady,
      (isReady) => {
        if (isReady) {
          unsubscribe();
          if (to.path === '/login' && store.state.user) {
            next('/');
          } else {
            next();
          }
        }
      }
    );
  } else {
    if (to.path === '/login' && store.state.user) {
      next('/');
    } else {
      next();
    }
  }
});


export default router;
