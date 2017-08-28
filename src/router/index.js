import Vue from 'vue'
import Router from 'vue-router'
const compLoad = (name) => (resolve) => require([`@/components/${name}`], resolve)
const viewLoad = (name) => (resolve) => require([`@/view/${name}`], resolve)
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'default',
      component: viewLoad('index')
    },
    {
      path: '/index',
      name: 'index',
      component: viewLoad('index')
    },
    {
      path: '/booklist',
      name: 'booklist',
      component: compLoad('booklist')
    },
    {
      path: '/bookDetail/:id',
      name: 'bookDetail',
      component: compLoad('bookDetail')
    },
    {
      path: '/login',
      name: 'login',
      component: compLoad('login')
    },
    {
      path: '/vuex1',
      name: 'vuex1',
      component: compLoad('vuex1')
    },
    {
      path: '/compDemo',
      name: 'compDemo',
      component: viewLoad('compDemo')
    },
    {
      path: '*',
      name: 'p404',
      component: viewLoad('p404')
    }
  ]
})
