<template>
    <div>
        <div class="hero_area">
            <!-- header section strats -->
            <header style="background-color: #191825;" class="header_section">
                <div class="container">
                    <nav class="navbar navbar-expand-lg custom_nav-container ">
                        <a class="navbar-brand" href="/kasir">
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
                                    <a class="nav-link" href="/kasir">Home </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/menuview">Menu</a>
                                </li>
                                <li class="nav-item active">
                                    <a class="nav-link" href="/keranjangview">Keranjang<span
                                            class="sr-only">(current)</span>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/ongoingview">Transaksi</a>
                                </li>
                            </ul>
                            <div class="user_option">
                                <form class="form-inline">
                                    <button class="btn  my-2 my-sm-0 nav_search-btn" type="submit">
                                        <i class="fa fa-search" aria-hidden="true"></i>
                                    </button>
                                </form>
                                <a href="" class="order_online">
                                    Order Online
                                </a>
                            </div>
                        </div>
                    </nav>
                </div>
            </header>
            <!-- end header section -->

            <table class="table table-hover table-striped">
                <thead>
                    <tr style="background-color: #191825;" class="text-light">
                        <th>No</th>
                        <th>Menu</th>
                        <th>Jumlah</th>
                        <th>Total Harga</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(menu, nomor) in cart" :key="nomor">
                        <td>{{ nomor + 1 }}</td>
                        <td>{{ menu.nama_menu }}</td>
                        <td>{{ menu.total_pesanan }}</td>
                        <td>{{ menu.total_harga }}</td>
                        <td><button class="btn btn-danger" @click="hapus(menu)">Hapus</button></td>
                    </tr>
                </tbody>
            </table>
            <button class="btn btn-dark mt-3" data-bs-toggle="modal" data-bs-target="#checkout">CheckOut</button>
        </div>
        <div class="modal fade" id="checkout" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">Check Out</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <form @submit.prevent="checkoutnow">
                        <div class="modal-body">

                            <label for="user">Kasir:</label>
                            <select required class="form-control" v-model="checkout.id_user" id="user">
                                <option v-for="nama in kasir" :key="nama.id_user" :value="nama.id_user">{{ nama.nama_user
                                }}
                                </option>
                            </select>
                            <label for="meja">Meja</label>
                            <select required class="form-control" v-model="checkout.id_meja" id="meja">
                                <option v-for="nomor in meja" :key="nomor.id_meja" :value="nomor.id_meja">{{
                                    nomor.nomor_meja }}</option>
                            </select>

                            <label for="nama">Pelanggan:</label>
                            <input type="text" class="form-control" v-model="checkout.nama_pelanggan" required
                                autocomplete="off" placeholder="Masukkan nama pelanggan...">

                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="submit" class="btn btn-primary">Check Out</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
import swal from 'sweetalert'

export default {
    data() {
        return {
            cart: {},
            kasir: {},
            meja: {},
            checkout: {},
        }
    },
    mounted() {
        this.checkout.id_user = localStorage.getItem('id_user')
        this.getcart()
        this.getkasir()
        this.getmeja()
    },
    methods: {
        getkasir() {
            axios.get('http://localhost:8000/api/getkasir')
                .then(
                    ({ data }) => {
                        console.log(data)
                        this.kasir = data
                    }
                )
        },
        getmeja() {
            axios.get('http://localhost:8000/api/getmejakosong')
                .then(
                    ({ data }) => {
                        console.log(data)
                        this.meja = data
                    }
                )
        },
        getcart() {
            axios.get('http://localhost:8000/api/getcart')
                .then(
                    ({ data }) => {
                        console.log(data)
                        this.cart = data
                    }
                )
        },
        checkoutnow() {
            swal({
                title: 'Apakah anda yakin?',
                icon: 'warning',
                dangerMode: true,
                buttons: true,
            }).then(
                (checkout) => {
                    if (checkout) {
                        axios.put('http://localhost:8000/api/checkout', this.checkout)
                            .then(
                                (response) => {
                                    console.log(response)
                                    swal({
                                        icon: 'success',
                                        title: 'Success'
                                    })
                                    setTimeout(() => {
                                        location.reload()
                                    }, 1200);
                                }
                            )
                            .catch(
                                (error) => {
                                    console.log(error)
                                    swal({
                                        title: 'Failed Check Out',
                                        icon: 'error',
                                        button: true
                                    })
                                }
                            )
                    }
                }
            )
        },
        hapus(menu) {
            axios.delete('http://localhost:8000/api/deletetransaksi/' + menu.id_transaksi)
        },
        logout() {
            swal({
                icon: 'warning',
                title: 'Ingin Log Out?',
                dangerMode: true,
                buttons: true
            }).then(
                (response) => {
                    if (response) {
                        localStorage.removeItem('role')
                        localStorage.removeItem('token')
                        swal({
                            icon: 'success'
                        })
                        setTimeout(() => {
                            location.href = '/'
                        }, 1200);
                    }
                }
            )
        }
    }
}
</script>