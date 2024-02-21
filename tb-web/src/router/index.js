/*
 * @Description:
 * @Author: Li cheng xue
 * @version:
 * @Date: 2024-02-20 22:37:35
 * @LastEditors: Li cheng xue
 * @LastEditTime: 2024-02-20 22:54:10
 * @FilePath: \src\router\index.js
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
