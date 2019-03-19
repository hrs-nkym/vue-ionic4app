import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'

// Vue.config.productionTip = false
Vue.config.ignoredElements = [
  'ion-app',
  'ion-page',
  'ion-header',
  'ion-toolber',
  'ion-title',
  'ion-content',
  'ion-list',
  'ion-item',
  'ion-label'
]

new Vue({
  render: h => h(App),
}).$mount('#app')
