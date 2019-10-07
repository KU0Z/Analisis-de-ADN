import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import axios from 'axios'
import VueAxios from 'vue-axios'
import '@babel/polyfill'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@mdi/font/css/materialdesignicons.css'

axios.defaults.baseURL='http//192.168.0.110:300/'

const reqInterceptor = axios.interceptors.request.use(config => {
  console.log('Request Interceptor', config)
  config.baseURL='http//192.168.0.110:300/'
  return config
})

/*const resInterceptor = axios.interceptores.response.use(res => {
  console.log('Responce interceptor', res)
  return res
})*/

axios.interceptors.request.eject(reqInterceptor)
//axios.interceptors.response.eject(resInterceptor)

Vue.config.productionTip = false


Vue.use(VueAxios,axios)
new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')


