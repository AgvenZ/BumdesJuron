import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Units from '../views/Units.vue'
import Documents from '../views/Documents.vue'
import LoginAdmin from '../views/LoginAdmin.vue'
import DashboardAdmin from '../views/DashboardAdmin.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/units',
    name: 'Units',
    component: Units
  },
  {
    path: '/documents',
    name: 'Documents',
    component: Documents
  },
  {
    path: '/admin/login',
    name: 'LoginAdmin',
    component: LoginAdmin
  },
  {
    path: '/admin/dashboard',
    name: 'DashboardAdmin',
    component: DashboardAdmin
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// Navigation guard untuk halaman admin
router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('adminToken')
  
  // Jika mengakses halaman admin dashboard tanpa token
  if (to.path === '/admin/dashboard' && !token) {
    next('/admin/login')
  } 
  // Jika sudah login dan mengakses halaman login admin
  else if (to.path === '/admin/login' && token) {
    next('/admin/dashboard')
  }
  else {
    next()
  }
})

export default router