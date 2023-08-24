<template>
    <div>
        <div class="hero_area bg-box">
            <!-- header section strats -->
            <header style="background-color: #2d2950;" class="header_section">
                <div class="container">
                    <nav class="navbar navbar-expand-lg custom_nav-container ">
                        <a class="navbar-brand" href="/admin">
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
                                    <a class="nav-link" href="/admin">Home </a>
                                </li>
                                <li class="nav-item active">
                                    <a class="nav-link" href="/managemenu">Menu<span class="sr-only">(current)</span> </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/manageuser">User</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/managemeja">Table</a>
                                </li>
                            </ul>
                            <div class="user_option">
                                <a href="" class="user_link">
                                    <i class="fa fa-user" aria-hidden="true"></i>
                                </a>
                                <a class="cart_link" href="#">
                                </a>
                                <form class="form-inline">
                                    <button class="btn  my-2 my-sm-0 nav_search-btn" type="submit">
                                        <i class="fa fa-search" aria-hidden="true"></i>
                                    </button>
                                </form>

                                <!-- Button trigger modal -->
                                <button type="button" class="order_online" data-bs-toggle="modal" data-bs-target="#addmenu">
                                    Add Menu
                                </button>

                                <!-- Modal  Tambah Data-->
                                <div class="modal fade" id="addmenu" tabindex="-1" aria-labelledby="exampleModalLabel"
                                    aria-hidden="true">
                                    <div class="modal-dialog">
                                        <div class="modal-content">
                                            <div class="modal-header">
                                                <h5 class="modal-title" id="exampleModalLabel">Add Menu</h5>
                                                <button type="button" class="btn-close" data-bs-dismiss="modal"
                                                    aria-label="Close"></button>
                                            </div>
                                            <form @submit.prevent="upload">
                                                <div class="modal-body">

                                                    <label for="nama_menu">Nama Menu:</label>
                                                    <input type="text" class="form-control" v-model="datamenu.nama_menu"
                                                        required autocomplete="off" placeholder="masukkan menu...">
                                                    <br>
                                                    <label for="type">Type: </label>
                                                    <select class="form-control" v-model="datamenu.type" id="jenis"
                                                        required>
                                                        <option value="makanan">Makanan</option>
                                                        <option value="minuman">Minuman</option>
                                                    </select>
                                                    <br>
                                                    <label for="deskripsi">Deskripsi:</label>
                                                    <input type="text" class="form-control" v-model="datamenu.deskripsi"
                                                        required placeholder="masukkan deskripsi...">
                                                    <br>
                                                    <label for="harga">Harga:</label>
                                                    <input type="number" class="form-control" v-model="datamenu.harga"
                                                        required placeholder="masukkan harga...">
                                                    <br>
                                                    <label for="gambar">Foto:</label>
                                                    <input type="file" id="gambar" class="form-control"
                                                        @change="UploadFoto($event)" required>
                                                    <br>
                                                </div>
                                                <div class="modal-footer">
                                                    <button type="button" class="btn btn-secondary"
                                                        data-bs-dismiss="modal">Close</button>
                                                    <button type="submit" class="btn btn-warning">Upload</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                <!-- EDIT MENU -->
                                <div class="modal fade" id="editmenu" tabindex="-1" aria-labelledby="exampleModalLabel"
                                    aria-hidden="true">
                                    <div class="modal-dialog">
                                        <div class="modal-content">
                                            <div class="modal-header">
                                                <h5 class="modal-title" id="exampleModalLabel">Menu Edit</h5>
                                                <button type="button" class="btn-close" data-bs-dismiss="modal"
                                                    aria-label="Close"></button>
                                            </div>
                                            <form @submit.prevent="saveedit">
                                                <div class="modal-body">
                                                    <div class="card" style="width: 18rem;">
                                                        <img :src="'http://localhost/ukl_kasir/ukl_kasir/public/images/' + image"
                                                            class="card-img-top" alt="..." style="width:80px;">
                                                    </div>
                                                    <hr>
                                                    <label for="nama_menu">Nama Menu:</label>
                                                    <input type="text" class="form-control" v-model="detailmenu.nama_menu"
                                                        required autocomplete="off" placeholder="masukkan menu...">
                                                    <br>
                                                    <label for="type">Type: </label>
                                                    <select class="form-control" v-model="detailmenu.type" id="jenis"
                                                        required>
                                                        <option value="makanan">Makanan</option>
                                                        <option value="minuman">Minuman</option>
                                                    </select>
                                                    <br>
                                                    <label for="deskripsi">Deskripsi:</label>
                                                    <input type="text" class="form-control" v-model="detailmenu.deskripsi"
                                                        required placeholder="masukkan deskripsi...">
                                                    <br>
                                                    <label for="harga">Harga:</label>
                                                    <input type="number" class="form-control" v-model="detailmenu.harga"
                                                        required placeholder="masukkan harga...">
                                                    <br>
                                                </div>
                                                <div class="modal-footer">
                                                    <button type="button" class="btn btn-secondary"
                                                        data-bs-dismiss="modal">Close</button>
                                                    <button type="button" class="btn btn-success" data-bs-toggle="modal"
                                                        data-bs-target="#editfoto">Update Photo</button>
                                                    <button type="submit" class="btn btn-warning">Save changes</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                <!-- END EDIT MENU -->

                                <!-- EDIT PHOTO -->
                                <div class="modal fade" id="editfoto" tabindex="-1" aria-labelledby="exampleModalLabel"
                                    aria-hidden="true">
                                    <div class="modal-dialog">
                                        <div class="modal-content">
                                            <div class="modal-header">
                                                <h5 class="modal-title" id="exampleModalLabel">Edit Foto</h5>
                                                <button type="button" class="btn-close" data-bs-dismiss="modal"
                                                    aria-label="Close"></button>
                                            </div>
                                            <form @submit.prevent="savefoto">
                                                <div class="modal-body">
                                                    <input type="file" class="form-control" @change="updatefoto($event)"
                                                        id="foto" required>
                                                </div>
                                                <div class="modal-footer">
                                                    <button type="button" class="btn btn-secondary"
                                                        data-bs-dismiss="modal">Close</button>
                                                    <button type="submit" class="btn btn-warning">Save changes</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                <!-- END EDIT PHOTO -->
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
                        <th>Type</th>
                        <th>Description</th>
                        <th>Price</th>
                        <th>Photo</th>
                        <th>Edit</th>
                        <th>Remove</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(menu, nomor) in menu" :key="nomor">
                        <td>{{ nomor + 1 }}</td>
                        <td>{{ menu.nama_menu }}</td>
                        <td>{{ menu.type }}</td>
                        <td>{{ menu.deskripsi }}</td>
                        <td>{{ menu.harga }}</td>
                        <td>
                            <img :src="'http://localhost/ukl_kasir/ukl_kasir/public/images/' + menu.gambar" alt="Foto Menu"
                                style="width:80px;">
                        </td>
                        <td><button type="button" class="btn btn-primary" @click="getdetail(menu)" data-bs-toggle="modal"
                                data-bs-target="#editmenu">
                                Edit
                            </button></td>
                        <td><button class="btn btn-danger" @click="hapus(menu)">Remove</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
        <br>
        <br>
        <br>
    </div>
</template>
<script>
import axios from 'axios'
import swal from 'sweetalert'

export default {

    // Tambah Data
    data() {
        return {
            menu: {},
            datamenu: {
                nama_menu: '',
                type: '',
                deskripsi: '',
                gambar: '',
                harga: '',
            },
            detailmenu: {
                id_menu: '',
                nama_menu: '',
                type: '',
                deskripsi: '',
                gambar: '',
                harga: ''
            },
            image: '',
            gambar:''
        }
    },
    mounted() {
        this.getmenu()
        this.getdetail()
    },
    methods: {
        getmenu() {
            axios.get('http://localhost:8000/api/getMenu')
                .then(
                    ({ data }) => {
                        this.menu = data
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
                        this.detailmenu.type = response.data[0].type
                        this.detailmenu.deskripsi = response.data[0].deskripsi
                        this.image = response.data[0].gambar
                        this.detailmenu.harga = response.data[0].harga

                    }
                )
        },
        upload() {
            let form = new FormData
            form.append('gambar', this.datamenu.gambar)
            form.append('nama_menu', this.datamenu.nama_menu)
            form.append('type', this.datamenu.type)
            form.append('deskripsi', this.datamenu.deskripsi)
            form.append('harga', this.datamenu.harga)

            axios.post('http://localhost:8000/api/createMenu', form)
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
                    (err) => {
                        console.log(err)
                        swal({
                            icon: 'error',
                            title: 'Failed Upload Menu',
                            button: true
                        })
                    }
                )
        },
        UploadFoto(e) {
            this.datamenu.gambar = e.target.files[0]
        },
        saveedit() {
            axios.put('http://localhost:8000/api/updateMenu/' + this.detailmenu.id_menu, this.detailmenu)
                .then(
                    (response) => {
                        console.log(response)
                        swal({
                            title: 'Success Update Photo',
                            icon: 'success'
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
                            title: 'Failed Update Photo',
                            icon: 'success'
                        })
                    }
                )
        },

        // UPDATE FOTO

        updatefoto(e) {
            this.gambar = e.target.files[0]
        },
        savefoto() {
            let form = new FormData
            form.append("gambar", this.gambar)

            axios.post('http://localhost:8000/api/updategambar/' + this.detailmenu.id_menu, form)
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
                    (err) => {
                        console.log(err)
                        swal({
                            icon: 'error',
                            title: 'Failed Update Photo',
                            button: true
                        })
                    }
                )
        },


        // Hapus Data

        hapus(menu) {
            swal({
                title: "Mau hapus data ini?",
                text: "Kalo hilang gimana?",
                icon: "warning",
                buttons: true,
                dangerMode: true,
            })
                .then((willDelete) => {
                    if (willDelete) {

                        var url = 'http://localhost:8000/api/deleteMenu/' + menu.id_menu;
                        axios.delete(url);

                        swal("Hore! Anda berhasil menghapus data ini", {
                            icon: "success",
                        });
                        setTimeout(() => {
                            window.location.reload()
                        }, 1200);
                    } else {
                        swal("Yakin gajadi ngehapus data ini?");
                    }
                });
        }
    }
}

</script>