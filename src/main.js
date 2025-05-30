import { createApp, markRaw } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import AOS from "aos";
import BootstrapVue3 from "bootstrap-vue-3";
import Toaster from "@meforma/vue-toaster";
import { createHead } from '@vueuse/head';
import { createVCodeBlock } from '@wdns/vue-code-block';
import VueMathjax from 'vue-mathjax-next';

import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue-3/dist/bootstrap-vue-3.css";

import "./assets/custom.scss";

const app = createApp(App);

// Mark router as raw to avoid reactivity issues
app.config.globalProperties.$router = markRaw(router);
const VCodeBlock = createVCodeBlock({
    // options
});
const head = createHead();

app.use(router).use(Toaster);
app.use(store);
app.use(BootstrapVue3);
app.use(VCodeBlock);
app.use(head);
app.use(VueMathjax)

app.mount("#app");

// Initialize AOS after mounting the app
AOS.init();
