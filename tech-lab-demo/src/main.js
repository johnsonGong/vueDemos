// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import router from './router'

Vue.config.productionTip = false

require('./assets/main.css')

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  // template: '<App/>',
  // template: '<Welcome/>',
  components: { App },
  render: h => h(App)
})

/**
 * 属性 template 与 render 有相同作用;
 *
 *
 */
