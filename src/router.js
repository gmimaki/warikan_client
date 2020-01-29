import Vue from 'vue'
import Router from 'vue-router'
import firebase from 'firebase/app'
import HelloWorld from './components/HelloWorld.vue'

Vue.use(Router)

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'index',
            component: HelloWorld
        }
    ]
})

export default router