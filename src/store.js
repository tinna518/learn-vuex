import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
    state:{
        name:'',
        password:''
    },
    mutations:{}
})
export default store