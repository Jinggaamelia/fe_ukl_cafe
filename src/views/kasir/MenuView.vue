<template>
  <div>
    <div class="hero_area">
      <div class="bg-box">
        <img src="images/walik.jpg" alt="">
      </div>
      <!-- header section strats -->
      <header style="background-color: #191825;" class="header_section">
        <div class="container">
          <nav class="navbar navbar-expand-lg custom_nav-container ">
            <a class="navbar-brand" href="/kasir">
              <span>
                ji.coffee
              </span>
            </a>

            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class=""> </span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav  mx-auto ">
                <li class="nav-item">
                  <a class="nav-link" href="/kasir">Home </a>
                </li>
                <li class="nav-item active">
                  <a class="nav-link" href="/menuview">Menu<span class="sr-only">(current)</span> </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/keranjangview">Keranjang<span class="sr-only">(current)</span> </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/ongoingview">On Going</a>
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
      <section class="slider_section ">
                <div id="customCarousel1" class="carousel slide" data-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <div class="container ">
                                <div class="row">
                                    <div class="col-md-7 col-lg-6 ">
                                        <div class="detail-box">
                                            <h1>
                                                Our Menu
                                            </h1>
                                            <p>
                                                silahkan memilih menu dibawah ini...
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>

                </div>

            </section>
    </div>


    <!-- food section -->
    <section class="food_section layout_padding">
      <div class="container">
        <div class="heading_container heading_center">
          <h2>
            Our Menu
          </h2>
        </div>
        <br>
        <br>
        <input type="text" class="form-control mb-4" v-model="carimenu" placeholder="Search menu...">
        <div class="filters-content" v-for="menu in filter_menu" :key="menu.id_menu">
          <div class="row grid">
            <div class="col-sm-6 col-lg-4 all pizza">
              <div class="box">
                <div>
                  <div class="img-box">
                    <img :src="'http://localhost/ukl_kasir/ukl_kasir/public/images/' + menu.gambar" alt="Foto Menu"
                                style="width:900px;">
                  </div>

                  <div class="detail-box">
                    <h5>
                      {{ menu.nama_menu }}
                    </h5>
                    <p>
                      {{ menu.deskripsi }}
                    </p>

                    <div class="options">
                      <h6>
                        RP.{{ menu.harga }}
                      </h6>
                      <!-- <button class="btn btn-outline-primary" data-bs-toggle="modal" @click="getdetail(menu)" data-bs-target="#addpesanan">
                                    <i class="bi bi-basket3-fill"></i>
                                </button> -->
                      <button type="button" class="btn btn-primary" data-bs-toggle="modal" @click="getdetail(menu)"
                        data-bs-target="#addpesanan">
                        <i class="bi bi-basket3-fill"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="btn-box">
          <a href="">
            View More
          </a>
        </div>
      </div>
    </section>
    <!-- end food section -->

    <!-- Modal -->
    <div class="modal fade" id="addpesanan" tabindex="-1" aria-labelledby="addpesanan" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <form @submit.prevent="addtocart">
              <div class="modal-body">
                <label for="nama">Nama:</label>
                <input type="text" class="form-control" v-model="detailmenu.nama_menu">
                <input type="hidden" v-model="detailmenu.id_menu">

                <label for="jumlah">Jumlah:</label>
                <input type="number" class="form-control" v-model="jumlah" required>

              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="submit" class="btn btn-primary">Add to cart</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <!-- End Modal input -->
  </div>
</template>

<script>
import axios from 'axios'
import swal from 'sweetalert';


export default {
  data() {
    return {

      menu: {},
      datamenu: {},
      detailmenu: {
        nama_menu: '',
        id_menu: ''
      },
      jumlah: '',
      gambar: '',
      image: '',
      carimenu: ''
    }
  },
  mounted() {
    this.getmenu()
    this.getdetail()
    this.getcart()
  },
  computed: {
    filter_menu() {
      let filter_data = this.datamenu
      if (this.carimenu) {
        filter_data = filter_data.filter(menu => menu.nama.toString().toLowerCase().includes(this.carimenu.toLowerCase()))
      }
      return filter_data
    }
  },
  methods: {

    getmenu() {
      axios.get('http://localhost:8000/api/getMenu')
        .then(
          ({ data }) => {
            this.datamenu = data
          }
        )
    },
    getdetail(menu) {
      axios.get('http://localhost:8000/api/getMenu/' + menu.id_menu)
        .then(
          (response) => {
            console.log(response)
            this.detailmenu.id_menu = response.data[0].id_menu
            this.detailmenu.nama_menu = response.data[0].nama_menu
            // this.image = response.data[0].foto
            this.detailmenu.type = response.data[0].type
            this.detailmenu.harga = response.data[0].harga
          }
        )
    },
    addtocart() {
      let datamenu = {
        id_menu: this.detailmenu.id_menu,
        total_pesanan: this.jumlah
      }

      axios.post('http://localhost:8000/api/createtransaksi', datamenu)
        .then(
          (response) => {
            console.log(response)
            swal({
              icon: 'success',
              title: 'success',
              button: true
            })
            setTimeout(() => {
              location.href = '/menuview'
            }, 1100);
          }
        )
    }

  }
}
</script>