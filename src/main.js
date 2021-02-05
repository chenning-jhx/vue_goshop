import Vue from 'vue'
import App from './App.vue'
import router from './router'

//引入lib-flexible插件，自适应
import "lib-flexible/flexible.js"


//引入vant插件
import { Swipe, SwipeItem } from 'vant';

Vue.use(Swipe);
Vue.use(SwipeItem);


//网络请求
import { get } from "@/network/request"
Vue.prototype.$get = get

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
