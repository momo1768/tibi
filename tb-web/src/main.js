/*
 * @Description:
 * @Author: Li cheng xue
 * @version:
 * @Date: 2024-02-20 22:37:35
 * @LastEditors: Li cheng xue
 * @LastEditTime: 2024-02-21 08:54:42
 * @FilePath: \src\main.js
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import '@/assets/iconfonts/iconfont.js'

Vue.use(ElementUI);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
