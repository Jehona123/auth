import { createApp } from "vue";
import Vue from "vue";

import App from "./App.vue";
import router from "./router";

createApp(App).use(router).mount("#app");

new Vue({
  el: "#app",
  render: (h) => {
    return h(App);
  },
});
