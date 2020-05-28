import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'
import store from './store.js'

Vue.use(ElementUI)
Vue.use(Vuex)

axios.defaults.baseURL = 'http://localhost:8083/'
Vue.config.productionTip = false
Vue.prototype.$axios = axios

new Vue({
  render: h => h(App),
  store
}).$mount('#app')
