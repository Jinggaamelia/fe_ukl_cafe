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
                                <li class="nav-item">
                                    <a class="nav-link" href="/managemenu">Menu</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/manageuser">User</a>
                                </li>
                                <li class="nav-item active">
                                    <a class="nav-link" href="/managemeja">Table<span class="sr-only">(current)</span> </a>
                                </li>
                            </ul>
                            <div class="user_option">
                                <a href="" class="user_link">
                                    <i class="fa fa-user" aria-hidden="true"></i>
                                </a>
                                <a class="cart_link" href="#">
                                    <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
                                        xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                        viewBox="0 0 456.029 456.029" style="enable-background:new 0 0 456.029 456.029;"
                                        xml:space="preserve">
                                        <g>
                                            <g>
                                                <path d="M345.6,338.862c-29.184,0-53.248,23.552-53.248,53.248c0,29.184,23.552,53.248,53.248,53.248
                   c29.184,0,53.248-23.552,53.248-53.248C398.336,362.926,374.784,338.862,345.6,338.862z" />
                                            </g>
                                        </g>
                                        <g>
                                            <g>
                                                <path d="M439.296,84.91c-1.024,0-2.56-0.512-4.096-0.512H112.64l-5.12-34.304C104.448,27.566,84.992,10.67,61.952,10.67H20.48
                   C9.216,10.67,0,19.886,0,31.15c0,11.264,9.216,20.48,20.48,20.48h41.472c2.56,0,4.608,2.048,5.12,4.608l31.744,216.064
                   c4.096,27.136,27.648,47.616,55.296,47.616h212.992c26.624,0,49.664-18.944,55.296-45.056l33.28-166.4
                   C457.728,97.71,450.56,86.958,439.296,84.91z" />
                                            </g>
                                        </g>
                                        <g>
                                            <g>
                                                <path d="M215.04,389.55c-1.024-28.16-24.576-50.688-52.736-50.688c-29.696,1.536-52.224,26.112-51.2,55.296
                   c1.024,28.16,24.064,50.688,52.224,50.688h1.024C193.536,443.31,216.576,418.734,215.04,389.55z" />
                                            </g>
                                        </g>
                                        <g>
                                        </g>
                                        <g>
                                        </g>
                                        <g>
                                        </g>
                                        <g>
                                        </g>
                                        <g>
                                        </g>
                                        <g>
                                        </g>
                                        <g>
                                        </g>
                                        <g>
                                        </g>
                                        <g>
                                        </g>
                                        <g>
                                        </g>
                                        <g>
                                        </g>
                                        <g>
                                        </g>
                                        <g>
                                        </g>
                                        <g>
                                        </g>
                                        <g>
                                        </g>
                                    </svg>
                                </a>
                                <form class="form-inline">
                                    <button class="btn  my-2 my-sm-0 nav_search-btn" type="submit">
                                        <i class="fa fa-search" aria-hidden="true"></i>
                                    </button>
                                </form>

                                <!-- Button trigger modal -->
                                <button type="button" class="order_online" data-bs-toggle="modal" data-bs-target="#addmeja">
                                    Add table
                                </button>

                                <!-- Modal Tambah Meja-->
                                <div class="modal fade" id="addmeja" tabindex="-1" aria-labelledby="exampleModalLabel"
                                    aria-hidden="true">
                                    <div class="modal-dialog">
                                        <div class="modal-content">
                                            <div class="modal-header">
                                                <h5 class="modal-title" id="exampleModalLabel">Add Table</h5>
                                                <button type="button" class="btn-close" data-bs-dismiss="modal"
                                                    aria-label="Close"></button>
                                            </div>
                                            <form @submit.prevent="addmeja">
                                                <div class="modal-body">

                                                    <label for="nomor_meja">Number:</label>
                                                    <input type="number" class="form-control" v-model="datameja.nomor_meja"
                                                        required autocomplete="off" placeholder="masukkan nomor...">
                                                    <br>
                                                    <label for="status">Status: </label>
                                                    <select class="form-control" v-model="datameja.status" id="status"
                                                        required>
                                                        <option value="digunakan">Digunakan</option>
                                                        <option value="kosong">Kosong</option>
                                                    </select>
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
                                <!-- Modal Edit Meja-->
                                <div class="modal fade" id="editmeja" tabindex="-1" aria-labelledby="exampleModalLabel"
                                    aria-hidden="true">
                                    <div class="modal-dialog">
                                        <div class="modal-content">
                                            <div class="modal-header">
                                                <h5 class="modal-title" id="exampleModalLabel">Table Edit</h5>
                                                <button type="button" class="btn-close" data-bs-dismiss="modal"
                                                    aria-label="Close"></button>
                                            </div>
                                            <form @submit.prevent="saveedit">
                                                <div class="modal-body">

                                                    <label for="nomor_meja">Number:</label>
                                                    <input type="number" class="form-control"
                                                        v-model="detailmeja.nomor_meja" required autocomplete="off"
                                                        placeholder="masukkan nomor...">
                                                    <br>
                                                    <label for="status">Status: </label>
                                                    <select class="form-control" v-model="detailmeja.status" id="status"
                                                        required>
                                                        <option value="digunakan">Digunakan</option>
                                                        <option value="kosong">Kosong</option>
                                                    </select>
                                                    <br>
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
                        <th>Table Number</th>
                        <th>Status</th>
                        <th>Edit</th>
                        <th>Remove</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(meja, nomor) in meja" :key="nomor">
                        <td>{{ nomor + 1 }}</td>
                        <td>{{ meja.nomor_meja }}</td>
                        <td>{{ meja.status }}</td>
                        <td>
                            <button type="button" class="btn btn-primary" @click="getdetail(meja)" data-bs-toggle="modal"
                                data-bs-target="#editmeja">
                                Edit
                            </button>
                        </td>
                        <td><button class="btn btn-danger" @click="hapus(meja)">Remove</button></td>
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
            meja: {},
            datameja: {
                nomor_meja: '',
                status: '',
            },
            detailmeja: {
                nomor_meja: '',
                status: '',
                id_meja: ''
            }
        }
    },
    mounted() {
        this.getmeja()
    },
    methods: {
        getmeja() {
            axios.get('http://localhost:8000/api/getMeja')
                .then(
                    ({ data }) => {
                        this.meja = data
                    }
                )
        },
        getdetail(meja) {
            axios.get('http://localhost:8000/api/getMeja/' + meja.id_meja)
                .then(
                    (response) => {
                        console.log(response)
                        this.detailmeja.id_meja = response.data[0].id_meja
                        this.detailmeja.nomor_meja = response.data[0].nomor_meja
                        this.detailmeja.id_meja = response.data[0].id_meja
                        this.detailmeja.status = response.data[0].status

                    }
                )
        },
        addmeja() {
            let form = new FormData
            form.append('nomor_meja', this.datameja.nomor_meja)
            form.append('status', this.datameja.status)

            axios.post('http://localhost:8000/api/createMeja', form)
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
                            title: 'Failed Upload Table',
                            button: true
                        })
                    }
                )
        },
        saveedit() {
            axios.put('http://localhost:8000/api/updateMeja/' + this.detailmeja.id_meja, this.detailmeja)
                .then(
                    (response) => {
                        console.log(response)
                        swal({
                            title: 'Success Update Meja',
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
                            title: 'Failed Update Meja',
                            icon: 'success'
                        })
                    }
                )
        },

        // Hapus Data

        hapus(meja) {
            swal({
                title: "Mau hapus data ini?",
                text: "Kalo hilang gimana?",
                icon: "warning",
                buttons: true,
                dangerMode: true,
            })
                .then((willDelete) => {
                    if (willDelete) {

                        var url = 'http://localhost:8000/api/deleteMeja/' + meja.id_meja;
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