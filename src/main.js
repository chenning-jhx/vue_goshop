import Vue from 'vue'
import App from './App.vue'
import router from './router'

//引入lib-flexible插件，自适应
import "lib-flexible/flexible.js"


//引入vant插件
import { Swipe, SwipeItem } from 'vant';
import { List, Sticky } from 'vant';
import { Col, Row } from 'vant';
import { GoodsAction, GoodsActionIcon, GoodsActionButton } from 'vant';

Vue.use(Swipe).use(SwipeItem);
Vue.use(List).use(Sticky);
Vue.use(Col).use(Row)
Vue.use(GoodsAction).use(GoodsActionIcon).use(GoodsActionButton)


//网络请求
import { get } from "@/network/request"
Vue.prototype.$get = get

//定义一个时间过滤器
Vue.filter('dateFormat', originVal => {
  const dt = new Date(originVal)
  const y = dt.getFullYear()
  // 月份从0开始,使她变成字符串,不足两位时,前面补个0
  const m = (dt.getMonth() + 1 + '').padStart(2, '0')
  const d = (dt.getDate() + '').padStart(2, '0')
  const hh = (dt.getHours() + '').padStart(2, '0')
  const mm = (dt.getMinutes() + '').padStart(2, '0')
  const ss = (dt.getSeconds() + '').padStart(2, '0')
  return `${y}-${m}-${d} ${hh}:${mm}:${ss}`
})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
