import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import Accounting from 'accounting-js'

Vue.config.productionTip = false

Vue.filter('currency', (val) => Accounting.formatMoney(val))

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
