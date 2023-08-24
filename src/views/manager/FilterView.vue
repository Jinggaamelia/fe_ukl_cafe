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
                                <li class="nav-item">
                                    <a class="nav-link" href="/alltransaksi">Transaksi</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/profitview">Profit
                                    </a>
                                </li>
                                <li class="nav-item active">
                                    <a class="nav-link" href="/filter">History<span class="sr-only">(current)</span></a>
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
                        <h5 class="section-title ff-secondary text-center text-warning fw-normal">Transaction History</h5>
                    </div>
                    <br>
                    <div class="row mt-2">
                        <div class="col">
                            <input type="text" class="form-control" v-model="cari_kasir" autocomplete="off"
                                placeholder="Cari nama kasir...">
                        </div>
                        <div class="col">
                            <input type="date" class="form-control" v-model="tgl_pesan"
                                placeholder="Cari tanggal transaksi...">
                        </div>
                    </div>

                    <div class="card mt-4" v-for="t in filterdata" :key="t.id_history">
                        <div class="card-header">
                            Transaksi pada tanggal {{ t.tgl_pesan }}
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">Pelanggan atas nama {{ t.nama_pelanggan }}</h5>
                            <p class="card-text">Di layani oleh kasir {{ t.nama_user }}</p>
                            <a href="#" class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#detail"
                                @click="getfunction(t)">See detail</a>
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
                            <button type="submit" class="btn btn-primary">Save Changes</button>
                        </div>
                    </div>
                </div>
            </div>
            <!-- END -->

        </div>
    </div>
</template>
<script>
import axios from 'axios';


export default {
    data() {
        return {
            cari_kasir: '',
            tgl_pesan: '',
            datatransaksi: {},
            detail: {},
            total: '',
            role: ''
        }
    },
    mounted() {
        this.gethistory()
        this.role = localStorage.getItem('role')
    },
    computed: {
        filterdata() {
            let filterdata = this.datatransaksi
            if (this.cari_kasir) {
                filterdata = filterdata.filter(t => t.nama_user.toLowerCase().toString().includes(this.cari_kasir.toLowerCase()))
            }
            if (this.tgl_pesan) {
                filterdata = filterdata.filter(t => t.tgl_pesan.includes(this.tgl_pesan))
            }

            if (!this.cari_kasir && !this.tgl_pesan) {
                filterdata = false
            }
            return filterdata
        }
    },
    methods: {
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
        gethistory() {
            axios.get('http://localhost:8000/api/gethistory')
                .then(
                    ({ data }) => {
                        console.log(data)
                        this.datatransaksi = data
                    }
                )
        },
    }
}
</script>