import { createWebHistory, createRouter } from "vue-router";


import ComingSoonPage from "../components/Pages/ComingSoonPage.vue";
import ErrorPage from "../components/Pages/ErrorPage.vue";
import ThankYouPage from "../components/Pages/ThankYouPage.vue";
import BlogLeftSidebarPage from "../components/Pages/BlogLeftSidebarPage.vue";
import BlogDetailsPage from "../components/Pages/BlogDetailsPage.vue";
import BlogCategoryPage from "../components/Pages/BlogCategoryPage.vue";
import BlogTagPage from "../components/Pages/BlogTagPage.vue";
import BlogSearchPage from "../components/Pages/BlogSearchPage.vue";
import ContactPage from "../components/Pages/ContactPage.vue";

const routes = [
  {
    path: "/", name: "BlogLeftSidebarPage", component: BlogLeftSidebarPage
  },
  { path: "/coming-soon", name: "ComingSoonPage", component: ComingSoonPage },
  { path: "/:pathMatch(.*)*", name: "ErrorPage", component: ErrorPage },
  { path: "/thank-you", name: "ThankYouPage", component: ThankYouPage },
  {
    path: "/blog-details/:id",
    name: "BlogDetailsPage",
    component: BlogDetailsPage,
  },
  {
    path: "/blog-categories/:id",
    name: "BlogCategoryPage",
    component: BlogCategoryPage,
  },
  { path: "/blog-tags/:id", name: "BlogTagPage", component: BlogTagPage },
  {
    path: "/blog-search-result",
    name: "BlogSearchPage",
    component: BlogSearchPage,
  },
  { path: "/contact", name: "ContactPage", component: ContactPage },
];

const router = createRouter({
  history: createWebHistory(),
  linkExactActiveClass: "active",
  routes,
  scrollBehavior() {
    return { top: 0, behavior: "smooth" };
  },
});

export default router;
