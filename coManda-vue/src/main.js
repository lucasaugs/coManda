import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap";
import PrimeVue from "primevue/config";
import "primevue/resources/primevue.min.css";
import "primevue/resources/themes/lara-light-indigo/theme.css";
import "primeicons/primeicons.css";

import { router } from "./router/index.js";

createApp(App).use(router).use(PrimeVue).mount("#app");
