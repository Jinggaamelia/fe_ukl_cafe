<template>
    <div>
        <div class="hero_area">
            <!-- header section strats -->
            <header style="background-color: #191825;" class="header_section">
                <div class="container">
                    <nav class="navbar navbar-expand-lg custom_nav-container ">
                        <a class="navbar-brand" href="/manager">
                            <span>
                                Burgerku
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
                                <li class="nav-item active">
                                    <a class="nav-link" href="/profitview">Profit<span class="sr-only">(current)</span>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/filter">Filter</a>
                                </li>
                            </ul>
                            <div class="user_option">
                                <form class="form-inline">
                                    <button class="btn  my-2 my-sm-0 nav_search-btn" type="submit">
                                        <i class="fa fa-search" aria-hidden="true"></i>
                                    </button>
                                </form>
                                <a @click="logout" href="#" class="order_online">
                                    Logout
                                </a>
                            </div>
                        </div>
                    </nav>
                </div>
            </header>
            <!-- end header section -->

            <div class="container-xxl py-5">
                <div class="container">
                    <div class="text-center wow fadeInUp" data-wow-delay="0.1s">
                        <h5 class="section-title ff-secondar text-center text-warning fw-normal">Transaction Profit</h5>
                    </div>
                    <br>
                    <div class="row mt-3">
                        <div class="col">
                            <input type="date" class="form-control" v-model="cari_tgl">
                        </div>
                        <div class="col">
                            <input type="month" class="form-control" v-model="cari_bulan">
                        </div>
                        <div class="col">
                            <input type="submit" @click="getdate" class="btn btn-warning">
                        </div>
                    </div>

                    <div class="row mt-4">
                        <div class="card-header">
                            penghasilan
                        </div>
                        <div class="card-body">
                            <h5 class="card-title" v-if="this.cari_bulan">Pendapatan bulan {{ cari_bulan }} Adalah Rp.{{
                                profitbulan }}</h5>
                            <p class="card-text" v-if="this.cari_tgl">Pendapatan Tanggal {{ cari_tgl }} Adalah Rp.{{
                                profithari }}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div style="width: 300px; height: 300px; margin: 0px 40% 0px;" class="mt-4">
                <canvas id="piechart" width="300" height="300"></canvas>
            </div>

            <!-- DETAIL -->
            <div class="modal fade" id="detail" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">DETAIL</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
            <!-- END DETAIL -->

        </div>
    </div>
</template>
<script>

import axios from 'axios';
import Chart from 'chart.js/auto'
import swal from 'sweetalert'
// import axios from 'axios'
// import { filter } from 'vue/types/umd';
// import { filter } from 'vue/types/umd'

export default {
    data() {
        return {
            cari_bulan: '',
            cari_tgl: '',
            profitbulan: '',
            profithari: '',
            datamenu: {}
        }
    },
    mounted(){
            this.getdate()
        axios.get('http://localhost:8000/api/getMenu')
            .then(
                (response) => {
                    console.log(response)
                    const data = response.data.map(item => item.jumlah_pesan)
                    const nama = response.data.map(item => item.nama_menu)

                    let colors = []
                    for (let i = 0; i < data.length; i++) {
                        let color = '#' + Math.floor(Math.random() * 16777215).toString(16)
                        colors.push(color)
                    }

                    const chartData = {
                        labels: nama,
                        datasets: [{
                            data: data,
                            backgroundColor: colors
                        }]
                    }


                    new Chart(document.getElementById('piechart'), {
                        type: 'pie',
                        labels: 'Data Menu',
                        data: chartData,
                        options: {
                            responsive: true
                        }
                    })
                })
            .catch(
                err => {
                    console.log(err)
                }
            )
        },
    computed: {
    },
    methods: {
        getdate() {
            if (this.cari_bulan) {
                axios.get('http://localhost:8000/api/getbulan/' + this.cari_bulan)
                    .then(
                        ({ data }) => {
                            console.log(data)
                            this.profitbulan = data
                        }
                    )
            }

            if (this.cari_tgl) {
                axios.get('http://localhost:8000/api/gettgl/' + this.cari_tgl)
                    .then(
                        ({ data }) => {
                            console.log(data)
                            this.profithari = data
                        }
                    )
            }

            // if (this.cari_bulan && this.cari_tgl) {
            //     swal({
            //         icon: 'warning',
            //         title: 'Cari salah satu!',
            //         button: true
            //     })
            // }
        },
        logout() {
            swal({
                icon: 'warning',
                title: 'Log Out?',
                dangerMode: true,
                buttons: true
            }).then(
                (response) => {
                    if (response) {
                        localStorage.removeItem('token')
                        localStorage.removeItem('role')
                        swal({
                            icon: 'success',
                            button: false
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