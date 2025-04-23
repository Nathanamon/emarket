import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomeView.vue'
import Cart from '../views/CartView.vue'
import Checkout from '../views/CheckoutView.vue'
import Login from '../views/LoginView.vue'
import ProductDetail from '../views/ProductDetailView.vue'
import Products from '../views/ProductsView.vue'
import Register from '../views/RegisterView.vue'
import UserDashboard from '../views/UserDashboardView.vue'
import AdminProducts from '../views/AdminProductsView.vue'
import AdminUsers from '../views/AdminUsersView.vue'

const routes = [ 
    {
        path: '/',
        name: 'index',
        component: Home
    },
    {
        path: '/home',
        name: 'home',
        component: Home
    },
    {
        path: '/cart',
        name: 'cart',
        component: Cart
    },
    {
        path: '/checkout',
        name: 'checkout',
        component: Checkout
    },
    {
        path: '/login',
        name: 'login',
        component: Login
    },
    {
        path: '/products',
        name: 'products',
        component: Products
    },
    {
        path: '/products/:id',
        name: 'product-detail',
        component: ProductDetail
    },
    {
        path: '/register',
        name: 'register',
        component: Register
    },
    {
        path: '/user-dashboard',
        name: 'user-dashboard',
        component: UserDashboard
    },
    {
        path: '/admin/products',
        name: 'admin-products',
        component: AdminProducts
    },
    {
        path: '/admin/users',
        name: 'admin-users',
        component: AdminUsers
    }
]

const router = createRouter({
 history: createWebHistory(),
 routes
})
export default router 