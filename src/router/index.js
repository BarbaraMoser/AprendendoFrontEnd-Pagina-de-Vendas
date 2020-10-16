import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Order from '../views/Order.vue'
import Brands from '../views/Brands.vue'
import NewBrand from '../views/NewBrand.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/order',
        name: 'Order',
        component: Order
    },
    {
        path: '/brands',
        name: 'Brands',
        component: Brands
    },
    {
        path: '/brands/new',
        name: 'NewBrand',
        component: NewBrand
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
