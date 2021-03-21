import Vue from 'vue'
import App from './App.vue'
import router from './router'

import BeeGridTable from "beegridtable";
import BeeLocale from "beegridtable/src/locale"; //default English
// import BeelocaleZh from 'beegridtable/src/locale/lang/zh-CN' // Set zh-CN default

import 'beegridtable/dist/styles/beegridtable.css';

Vue.use(BeeGridTable, {
  locale:BeeLocale,
  capture: true,
});

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
