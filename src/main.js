import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

Vue.directive("field", {
  bind(el, args) {
    el.oninput = function(e) {
      if (!e.isTrusted) {
        return;
      }
      switch (args.value) {
        case "tel": {
          let x = this.value
            .replace(/\D/g, "")
            .match(/(\d{0,1})(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})/);
          this.value = !x[1]
            ? ""
            : "+" +
              x[1] +
              (!x[3] ? x[2] : " ( " + x[2] + " ) ") +
              x[3] +
              (x[4] ? "-" + x[4] : "") +
              (x[5] ? "-" + x[5] : "");
          el.dispatchEvent(new Event("input"));
        }
      }
    };
  }
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
