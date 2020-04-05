import Vue from 'vue'
import App from './App'
import VueProTable from '../src/index'

Vue.use(VueProTable)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
