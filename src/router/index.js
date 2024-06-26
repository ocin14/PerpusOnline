import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '../views/Dashboard.vue'
import Index from '../components/siswa/Index.vue'
import Tambah from '../components/siswa/Tambah.vue'
import Edit from '../components/siswa/Edit.vue'
import Detail from '../components/siswa/Detail.vue'
import indexb from '../components/buku/indexb.vue'
import tambahB from '../components/buku/tambahB.vue'
import edit from '../components/buku/edit.vue'
import detail from '../components/buku/detail.vue'
import login from '../components/login.vue'
import indexP from '../components/peminjaman/indexP.vue'
import TambahPinjam from '../components/peminjaman/TambahPinjam.vue'
import EditPinjam from '../components/peminjaman/EditPinjam.vue'
import DetailPinjam from '../components/peminjaman/DetailPinjam.vue'
import TambahDetail from '../components/peminjaman/TambahDetail.vue'
import indexK from '../components/Kembali/indexK.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/siswa',
    name: 'index',
    component: Index
  },
  {
    path: '/siswa/tambah',
    name: 'tambah',
    component: Tambah
  },
  {
    path: '/siswa/edit/:id',
    name: 'Edit',
    component: Edit
  },
  {
    path: '/siswa/detail/:id',
    name: 'Detail',
    component: Detail
  },
  {
    path: '/buku',
    name: 'indexB',
    component: indexb
  },
  {
    path: '/buku/tambah',
    name: 'tambahB',
    component: tambahB
  },
  {
    path: '/buku/edit/:id',
    name: 'edit',
    component: edit
  },
  {
    path: '/buku/detail/:id',
    name: 'detail',
    component: detail
  },
  {
    path: '/login',
    name: 'login',
    component: login
  },
  {
    path: '/pinjam',
    name: 'indexP',
    component: indexP
  },
  {
    path: '/pinjam/tambah',
    name: 'TambahPinjam',
    component: TambahPinjam
  },
  {
    path: '/pinjam/edit/:id',
    name: 'EditPinjam',
    component: EditPinjam
  },
  {
    path: '/pinjam/detail/:id',
    name: 'DetailPinjam',
    component: DetailPinjam
  },
  {
    path: '/pinjam/detail/tambah/:id',
    name: 'TambahDetail',
    component: TambahDetail
  },
  {
    path: '/kembali',
    name: 'indexK',
    component: indexK
  }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
