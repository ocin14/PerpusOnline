<template>
  <div>
        <navbar-component></navbar-component>
        <sidebar-component></sidebar-component>
        <div class="content-wrapper">            
            <div class="content-header">
                <div class="container-fluid">
                    <div class="row mb-2">
                        <div class="col-sm-6">
                            <h1 class="m-0">Data Peminjaman</h1>
                        </div>          
                    </div>
                </div>
            </div>
 
            <div class="content">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-md-10">
                            <div class="card card-primary card-outline">
                                <div class="card-body">
                                    <router-link class="btn btn-info mb-2" to="/pinjam/tambah">
                                        <i class="fas fa-plus"></i> Tambah
                                    </router-link>
                                    <table class="table table-bordered">
                                        <thead>
                                            <tr>
                                                <th style="width: 10px">#</th>
                                                <th>Nama Siswa</th>
                                                <th>Tanggal Pinjam</th>
                                                <th>Tanggal Kembali</th>
                                                <th>Status</th>
                                                <th>Aksi</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr v-for="(p, index) in pinjam" :key="index">
                                                <td>{{ index + 1 }}</td>
                                                <td>{{ p.nama_siswa }}</td>
                                                <td>{{ p.tanggal_pinjam | moment("DD/MM/YYYY") }}</td>
                                                <td>{{ p.tanggal_kembali | moment("DD/MM/YYYY") }}</td>
                                                <td>
                                                    <span v-if="p.status == 1" class="badge bg-success">Kembali</span>
                                                    <span v-else class="badge bg-danger">Belum kembali</span>
                                                </td>
                                                <td>
                                                    <div class="btn-group">
                                                        <router-link class="btn btn-success" :to="{ name : 'detailpinjam' , params : { id : p.id } }">Detail</router-link>                                                        
                                                        <router-link class="btn btn-warning" :to="{ name : 'EditPinjam' , params : { id : p.id_siswa } }">Edit</router-link>  
                                                        <button type="button" @click="hapus(p.id)" class="btn btn-danger">Hapus</button>                                                      
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name:'indexPinjam',
    data(){
        return{
            pinjam:{}
        }
    },
    created(){
        axios.get('http://localhost:8000/api/getpinjam')
                  .then( res => {
                      this.pinjam = res.data
                  })
                  axios.get(`http://localhost:8000/api/getsiswaid/${this.$route.params.id}`)
                 .then((res) => {
                      this.siswa = res.data
                  })
                  .catch(err => console.log(err));
    },
    methods:{
        hapus(id) {
            axios.delete(`http://localhost:8000/api/delete/${id}`)
                      .then( () => {
                          let i = this.pinjam.map(item => item.id).indexOf(id);
                          this.pinjam.splice(i, 1);
                      });
        }
    }
}
</script>

<style>

</style>