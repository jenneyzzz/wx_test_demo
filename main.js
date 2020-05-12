import Vue from 'vue'
import App from './App'
//几乎每个页面都要用到封装的请求方法，所以在main.js中全局引入
import {myRequest} from './util/api.js'
//把引入的myRequest请求方法，绑定在Vue上，使用的时候this.$myRequest()
Vue.prototype.$myRequest = myRequest;

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
