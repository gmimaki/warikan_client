import Vue from 'vue'
import Router from 'vue-router'
import firebase from 'firebase/app'
import HelloWorld from './components/HelloWorld.vue'
import Login from './components/Login.vue'
import createTravel from './components/CreateTravel.vue'
import invite from './components/Invite.vue'

Vue.use(Router)

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'index',
            component: HelloWorld
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path: '/createTravel',
            name: 'createTravel',
            component: createTravel
        },
        {
            path: '/invite',
            name: 'invite',
            component: invite,
        }
    ]
})

router.beforeResolve((to, from, next) => {
    next()
        /*
    if (to.path === "/") {
        next()
    } else {
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                next()
            } else {
                next({ path: "/" })
            }
        })
    }
        */
})

export default router