import Vue from 'vue'
import App from './App.vue'
import router from './router/index'

Vue.config.productionTip=false;//关闭生产环境下的提示

new Vue({
    el:'#app',
    router,
    components:{
        App
    },
    template:'<App></App>'
})