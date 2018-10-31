import Vue from "vue";
import App from "./App.vue";
import VueLocalStorageDecorator from "vue-local-storage-decorator";
const BootstrapVue = require("bootstrap-vue").default;

Vue.config.productionTip = false;

Vue.use(VueLocalStorageDecorator);
Vue.use(BootstrapVue);

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

new Vue({
  render: h => h(App)
}).$mount("#app");
