// Import section
import Vue from 'vue'
import p from 'plugins'
import App from './App'
import { sync } from 'vuex-router-sync'
import store from './store'
import router from './router'

sync(store, router)

// Vue config section
Vue.config.productionTip = false

// Vue use section
Vue.use(p, {
  locales: ['zh-CN', 'en']
})

/* eslint-disable no-new */
const app = new Vue({
  router,
  store,
  render: h => h(App)
})

app.$mount('#app')
