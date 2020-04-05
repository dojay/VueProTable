import iView from 'iview'
import 'iview/dist/styles/iview.css'

import VueProTable from './components/ProTable.vue'

const install = function(Vue, opts = {}) {
  if (install.installed) return
  Vue.use(iView)
  Vue.component(VueProTable.name, VueProTable);
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.vue)
}

export default {
  install
}
