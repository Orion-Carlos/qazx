import Vue from 'vue'
import Router from 'vue-router'
import LayOut from '@/views/layout.vue';
import saleTarget from '@/components/target/saleTarget.vue';


require('../polyfills')

Vue.use(Router)
function importAll(r: any) {
  return r.keys().map((key: any) => r(key))
}

const routesCache: any[] = []

const routes = importAll(require.context('./modules/', true, /\.ts$/))

routes.forEach((element: any) => {
  Object.keys(element).forEach(key => {
    routesCache.push(element[key])
  })
})

export default new Router({
  routes: [
    {
      path: '/',
      name: 'layout',
      component: LayOut,
      children: routesCache,
    },
  ]
})
