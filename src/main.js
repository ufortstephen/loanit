import 'core-js/stable'
import Vue from 'vue'
import App from './App'
import router from './router'
import CoreuiVue from '@coreui/vue'
import { iconsSet as icons } from './assets/icons/icons.js'
import store from './store'
import ElementUI from 'element-ui';
import locale from 'element-ui/lib/locale/lang/en'
import 'element-ui/lib/theme-chalk/index.css';
import "core-js/stable";
import "regenerator-runtime/runtime"
import Axios from "axios"


// import babelPolyfill from 'babel-polyfill'


Vue.config.performance = true
Vue.use(CoreuiVue)
Vue.use(Axios)
Vue.use(ElementUI, { locale })
Vue.prototype.$log = console.log.bind(console)


// Axios.defaults.headers.common['Authourization'] = `Bearer ${store.state.token}`

new Vue({
    el: '#app',
    router,
    store,
    icons,
    template: '<App/>',
    components: {
        App
    }
})