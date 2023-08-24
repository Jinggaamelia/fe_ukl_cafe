<template>
    <div>
        <div class="hero_area bg-box">
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
                                <li class="nav-item">
                                    <a class="nav-link" href="/keranjangview">Keranjang
                                    </a>
                                </li>
                                <li class="nav-item active">
                                    <a class="nav-link" href="/ongoingview">Transaksi<span
                                            class="sr-only">(current)</span></a>
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

            <!-- Meja Section -->
            <section class="food_section layout_padding">
                <div class="container">
                    <div class="heading_container heading_center">
                        <h2>
                            Meja
                        </h2>
                    </div>
                    <br>
                    <br>
                    <div class="filters-content">
                        <div class="row grid">
                            <input type="number" class="form-control mb-4" v-model="cari_meja"
                                    placeholder="Cari nomor meja..." autocomplete="off">
                            <div class="col-sm-6 col-lg-4 all pizza" v-for="meja in filter_ongoing" :key="meja.id_meja">
                                
                                <div >
                                    <div data-bs-toggle="modal" data-bs-target="#finish" @click="handleclick(meja)"
                                        class="box wow fadeInUp" >
                                        <div>
                                            <div class="img-box">
                                                <img src="images/favicon.png" alt="">
                                            </div>
                                            <div class="detail-box">
                                                <h5>
                                                    Meja no : {{ meja.nomor_meja }}
                                                </h5>
                                                <p>
                                                    status : {{ meja.status }}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
            <!-- End Meja -->

            <!-- Finish Transaksi  -->
            <div class="modal fade" id="finish" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">Transaksi</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <form @submit.prevent="selesaitransaksi">
                            <div class="modal-body">
                                <span style="font-family: 'Times New Roman', Times, serif;">ATAS NAMA: <b>{{
                                    detail_ongoing.nama_pelanggan }}</b> </span>
                                <br>
                                <span style="font-family: 'Times New Roman', Times, serif;">TOTAL HARGA: <b>{{
                                    totalharga }}</b> </span>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="submit" class="btn btn-primary">Check Out</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <!-- End -->
        </div>
    </div>
</template>
<script>
    import axios from 'axios'
    import swal from 'sweetalert'

    export default{
        data(){
            return{
                ongoing: {},
                totalharga: '',
                detail_ongoing: {},
                cari_meja: ''
            }
        },
        mounted() {
        this.getongoing()
        this.gettotalharga()
        },
        computed: {
            filter_ongoing() {
                let filtered = this.ongoing
                if (this.cari_meja) {
                    filtered = filtered.filter(meja => meja.nomor_meja.toString().toLowerCase().includes(this.cari_meja.toLowerCase()))
                }
                return filtered
            }
        },
        methods: {
            getongoing(){
                axios.get('http://localhost:8000/api/getongoing')
                    .then(
                        ({ data }) => {
                            console.log(data)
                            this.ongoing = data
                        }
                    )
            },
            handleclick(meja) {
                this.getdetailtransaksi(meja)
                this.gettotalharga(meja)
            },
            getdetailtransaksi(meja) {
                axios.get('http://localhost:8000/api/get_ongoing_transaksi/' + meja.id_meja)
                    .then(
                        ({ data }) => {
                            console.log(data)
                            this.detail_ongoing = data
                        }
                    )
            },
            gettotalharga(meja) {
                axios.get('http://localhost:8000/api/gettotalharga/' + meja.id_meja)
                    .then(
                        ({ data }) => {
                            console.log(data)
                            this.totalharga = data
                        }
                    )
            },
            selesaitransaksi() {
                swal({
                    icon: 'warning',
                    title: 'Apakah sudah benar?',
                    dangerMode: true,
                    buttons: true
                }).then(
                    (response) => {
                        if (response) {
                            axios.put('http://localhost:8000/api/transaksi_done/' + this.detail_ongoing.id_meja, this.detail_ongoing.id_meja)
                                .then(
                                    (response) => {
                                        console.log(response)
                                        swal({
                                            icon: 'success',
                                            title: 'Success'
                                        })
                                        setTimeout(() => {
                                            location.href = '/printnota/' + this.detail_ongoing.id_keranjang
                                        }, 1200);
                                    }
                                )
                                .catch(
                                    (error) => {
                                        console.log(error)
                                        swal({
                                            title: 'Failed',
                                            icon: 'error'
                                        })
                                    }
                                )
                        }
                    }
                )
            },
        }
    }
</script>