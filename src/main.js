import Vue from 'vue'
import App from './App.vue'
import vMessage from './components/Message/index' 
Vue.use(vMessage)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
