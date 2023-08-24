<template>
    <div>
        <div class="hero_area">
            <!-- header section strats -->
            <header style="background-color: #191825;" class="header_section">
                <div class="container">
                    <nav class="navbar navbar-expand-lg custom_nav-container ">
                        <a class="navbar-brand" href="/manager">
                            <span>
                                ji.coffee
                            </span>
                        </a>

                        <button class="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                            <span class=""> </span>
                        </button>

                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav  mx-auto ">
                                <li class="nav-item">
                                    <a class="nav-link" href="/manager">Home </a>
                                </li>
                                <li class="nav-item active">
                                    <a class="nav-link" href="/alltransaksi">Transaksi<span
                                            class="sr-only">(current)</span></a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/profitview">Profit<span class="sr-only">(current)</span>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/filter">History</a>
                                </li>
                            </ul>
                            <div class="user_option">
                                <form class="form-inline">
                                    <button class="btn  my-2 my-sm-0 nav_search-btn" type="submit">
                                        <i class="fa fa-search" aria-hidden="true"></i>
                                    </button>
                                </form>
                            </div>
                        </div>
                    </nav>
                </div>
            </header>
            <!-- end header section -->

            <div class="container-xxl py-5">
                <div class="container">
                    <div class="text-center wow fadeInUp" data-wow-delay="0.1s">
                        <h5 class="section-title ff-secondar text-center text-warning fw-normal">History Transaksi</h5>
                    </div>
                    <br>
                    <input type="text" class="form-control mt-2" v-model="cari_kasir" autocomplete="off"
                        placeholder="Cari Nama Kasir...">

                    <div class="card mt-4" v-for="transaksi in filterdata" :key="transaksi.id_history">
                        <div class="card-header">
                            Transaksi pada tanggal {{ transaksi.tgl_pesan }}
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">Transaksi di layani oleh kasir: {{ transaksi.nama_user }}</h5>
                            <p class="card-text">Dengan nama pelanggan <b>{{ transaksi.nama_pelanggan }}</b> </p>
                            <a href="#" class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#detail"
                                @click="getfunction(transaksi)">Lihat
                                detail</a>
                        </div>
                    </div>
                </div>
            </div>

            <!-- DETAIL -->
            <div class="modal fade" id="detail" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">Detail</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <form @submit.prevent="checkoutnow">
                            <div class="modal-body">
                                <table class="table table-hover table-striped">
                                    <thead>
                                        <tr style="background-color: #191825;" class="text-light">
                                            <th>No</th>
                                            <th>Menu</th>
                                            <th>Jumlah</th>
                                            <th>Harga</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="(t, nomor) in detail" :key="nomor">
                                            <td>{{ nomor + 1 }}</td>
                                            <td>{{ t.nama_menu }}</td>
                                            <td>{{ t.total_pesanan }}</td>
                                            <td>{{ t.total_harga }}</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <p>Total Harga: <b>{{ total }}</b></p>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <!-- END -->
        </div>
    </div>
</template>
<script>
import axios from 'axios'

export default {
    data() {
        return {
            alltransaction: {},
            cari_kasir: '',
            detail: {},
            total: ''
        }
    },
    mounted() {
        this.gettransaksi()
        this.gettotal()
    },
    computed: {
        filterdata() {
            let filterdata = this.alltransaction
            if (this.cari_kasir) {
                filterdata = filterdata.filter(transaksi => transaksi.nama.toString().toLowerCase().includes(this.cari_kasir.toLowerCase()))
            }
            return filterdata
        }
    },
    methods: {
        gettransaksi() {
            axios.get('http://localhost:8000/api/gethistory')
                .then(
                    ({ data }) => {
                        console.log(data)
                        this.alltransaction = data
                    }
                )
        },
        getfunction(history) {
            this.gettotal(history)
            this.getdetail(history)
        },
        gettotal(history) {
            axios.get('http://localhost:8000/api/gettotal/' + history.id_keranjang)
                .then(
                    ({ data }) => {
                        console.log(data)
                        this.total = data
                    }
                )
        },
        getdetail(history) {
            axios.get('http://localhost:8000/api/gethistory/' + history.id_keranjang)
                .then(
                    ({ data }) => {
                        console.log(data)
                        this.detail = data
                    }
                )
        },
    }
}
</script>