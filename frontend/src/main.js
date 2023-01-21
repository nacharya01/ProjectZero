import { createApp } from "vue";
import App from "./App.vue";
import PrimeVue from "primevue/config";
import "primevue/resources/themes/saga-blue/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";

import router from "./router";
import store from "./store/index";

const app = createApp(App);

app.use(PrimeVue);
app.use(router);
app.use(store);

app.mount("#app");
