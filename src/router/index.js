import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const mfcV = name => () => import(`views/${name}`)
const mfcC = name => () => import(`components/${name}`)

export default new Router({
  routes: [
    { path: '/', name: 'home', component: mfcV('home') },
    { path: '/hello/:name', name: 'hello', component: mfcC('Hello') }
  ]
})
