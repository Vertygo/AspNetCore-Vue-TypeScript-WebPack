import * as Vue from "vue";
import * as VueRouter from "vue-router";
import * as Hello from "components/Hello.vue";
import * as WijmoTest from "components/WijmoTest.vue";

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/',
      name: 'WijmoTest',
      component: WijmoTest
    }
  ]
})