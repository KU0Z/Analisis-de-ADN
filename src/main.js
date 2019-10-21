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
const vue_fb = {}
  
const base = axios.create({
  baseURL: 'http://192.168.0.50:3000/',
  headers: {
	  'Access-Control-Allow-Origin': '*',
	}
})

Vue.prototype.$http = base
/*Vue.use(vue_fb, {
  appId: '536085350536644',
  autoLogAppEvents: true,
  xfbml: true,
  version: 'v2.9'
})*/
//Vue.prototype.$fb = initFbSdk
new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')


