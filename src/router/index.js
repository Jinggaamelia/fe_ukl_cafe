import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginView from '../views/LoginView.vue'
import IndexView from '../views/kasir/IndexView.vue'
import MenuView from '../views/kasir/MenuView.vue'
import KeranjangView from '../views/kasir/KeranjangView.vue'
import OngoingView from '../views/kasir/OngoingView.vue'
import PrintView from '../views/kasir/PrintView.vue'
import IndexAdmin from '../views/admin/IndexAdmin.vue'
import ManageMenu from '../views/admin/ManageMenu.vue'
import ManageUser from '../views/admin/ManageUser.vue'
import ManageMeja from '../views/admin/ManageMeja.vue'
import TestView from '../views/kasir/TestView.vue'
import HomeManager from '../views/manager/HomeManager.vue'
import AllTransaksi from '../views/manager/AllTransaksi.vue'
import ProfitView from '../views/manager/ProfitView.vue'
import FilterView from '../views/manager/FilterView.vue'
import NotFound from '../views/NotFound.vue'
import SalahAkses from '../views/SalahAkses.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: LoginView
  },
  {
    path: '/kasir',
    name: 'indexkasir',
    component: IndexView,
    meta: {
      requiresAuth: true,
      allowedRoles: ['kasir']
    }
  },
  {
    path: '/menuview',
    name: 'menu',
    component: MenuView,
    meta: {
      requiresAuth: true,
      allowedRoles: ['kasir']
    }
  },
  {
    path: '/keranjangview',
    name: 'keranjang',
    component: KeranjangView,
    meta: {
      requiresAuth: true,
      allowedRoles: ['kasir']
    }
  },
  {
    path: '/ongoingview',
    name: 'ongoing',
    component: OngoingView,
    meta: {
      requiresAuth: true,
      allowedRoles: ['kasir']
    }
  },
  {
    path: '/printnota/:code',
    name: 'print',
    component: PrintView
  },
  {
    path: '/manager',
    name: 'home',
    component: HomeManager,
    meta: {
      requiresAuth: true,
      allowedRoles: ['manajer']
    }
  },
  {
    path: '/alltransaksi',
    name: 'transasksi',
    component: AllTransaksi,
    meta: {
      requiresAuth: true,
      allowedRoles: ['manajer']
    }
  },
  {
    path: '/profitview',
    name: 'profitview',
    component: ProfitView,
    meta: {
      requiresAuth: true,
      allowedRoles: ['manajer']
    }
  },
  {
    path: '/filter',
    name: 'filterview',
    component: FilterView,
    meta: {
      requiresAuth: true,
      allowedRoles: ['manajer']
    }
  },
  {
    path: '/test',
    name: 'test',
    component: TestView
  },
  {
    path: '/admin',
    name: 'indexadmin',
    component: IndexAdmin,
    meta: {
      requiresAuth: true,
      allowedRoles: ['admin']
    }
  },
  {
    path: '/managemenu',
    name: 'crudmenu',
    component: ManageMenu,
    meta: {
      requiresAuth: true,
      allowedRoles: ['admin']
    }
  },
  {
    path: '/manageuser',
    name: 'cruduser',
    component: ManageUser,
    meta: {
      requiresAuth: true,
      allowedRoles: ['admin']
    }
  },
  {
    path: '/managemeja',
    name: 'crudmeja',
    component: ManageMeja,
    meta: {
      requiresAuth: true,
      allowedRoles: ['admin']
    }
  },
  {
    path: '*',
    component: NotFound
  },
  {
    path: '/forbidden',
    component: SalahAkses
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

router.beforeEach((to,form, next) => {
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth)
  if (requiresAuth) {
    const userRole = localStorage.getItem("role")
    if (!userRole) {
      next({
        path: '/'
      })
    } else {
      if (to.meta.allowedRoles.includes(userRole)) {
        next()
      } else {
        next({
          path: '/forbidden'
        })
      }
    }
  } else {
    next();
  }
})
