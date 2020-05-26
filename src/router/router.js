/*
 * @Descripttion: 
 * @LastEditors: xc
 * @Date: 2020-05-26 16:30:35
 * @LastEditTime: 2020-05-26 16:48:13
 */ 
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'index',
      component: () => import(/* webpackChunkName: "index" */ '@/views'),
      children:[
        {
          path: '/home',
          name: 'home',
          component: () => import(/* webpackChunkName: "home" */ '@/views/home')
        }
      ]
    },
    
  ]
})
