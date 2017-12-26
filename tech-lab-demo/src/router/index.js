import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Welcome from '@/pages/Welcome'
import ProductList from '@/pages/ProductList'
import ProductDetail from '@/pages/ProductDetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'welcome',
      component: Welcome
    },
    {
      path: '/list',
      name: 'productList',
      component: ProductList
    },
    {
      path: '/detail',
      name: 'productDetail',
      component: ProductDetail
    }
  ]
})
