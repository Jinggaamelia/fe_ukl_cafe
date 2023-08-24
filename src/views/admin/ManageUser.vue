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
                                <li class="nav-item active">
                                    <a class="nav-link" href="/manageuser">User<span class="sr-only">(current)</span> </a>
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
                                <button type="button" class="order_online" data-bs-toggle="modal" data-bs-target="#adduser">
                                    Add User
                                </button>

                                <!-- Modal  Tambah Data-->
                                <div class="modal fade" id="adduser" tabindex="-1" aria-labelledby="exampleModalLabel"
                                    aria-hidden="true">
                                    <div class="modal-dialog">
                                        <div class="modal-content">
                                            <div class="modal-header">
                                                <h5 class="modal-title" id="exampleModalLabel">Add User</h5>
                                                <button type="button" class="btn-close" data-bs-dismiss="modal"
                                                    aria-label="Close"></button>
                                            </div>
                                            <form @submit.prevent="upload">
                                                <div class="modal-body">

                                                    <label for="nama_user">Name:</label>
                                                    <input type="text" class="form-control" v-model="datauser.nama_user"
                                                        required autocomplete="off" placeholder="masukkan nama...">
                                                    <br>
                                                    <label for="username">Username:</label>
                                                    <input type="text" class="form-control" v-model="datauser.username"
                                                        required placeholder="masukkan username...">
                                                    <br>
                                                    <label for="role">Role: </label>
                                                    <select class="form-control" v-model="datauser.role" id="role" required>
                                                        <option value="admin">Admin</option>
                                                        <option value="manajer">Manager</option>
                                                        <option value="kasir">Kasir</option>
                                                    </select>
                                                    <br>
                                                    <label for="password">Password:</label>
                                                    <input type="password" class="form-control" v-model="datauser.password"
                                                        required placeholder="masukkan password...">
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
                                <!-- edit user -->
                                <div class="modal fade" id="edituser" tabindex="-1" aria-labelledby="exampleModalLabel"
                                    aria-hidden="true">
                                    <div class="modal-dialog">
                                        <div class="modal-content">
                                            <div class="modal-header">
                                                <h5 class="modal-title" id="exampleModalLabel">User Edit</h5>
                                                <button type="button" class="btn-close" data-bs-dismiss="modal"
                                                    aria-label="Close"></button>
                                            </div>
                                            <form @submit.prevent="saveedit">
                                                <div class="modal-body">

                                                    <label for="nama_user">Name:</label>
                                                    <input type="text" class="form-control" v-model="detailuser.nama_user"
                                                        required autocomplete="off" placeholder="masukkan nama...">
                                                    <br>
                                                    <label for="username">Username:</label>
                                                    <input type="text" class="form-control" v-model="detailuser.username"
                                                        required autocomplete="off" placeholder="masukkan username...">
                                                    <br>
                                                    <label for="role">Role: </label>
                                                    <select class="form-control" v-model="detailuser.role" id="role"
                                                        required>
                                                        <option value="admin">Admin</option>
                                                        <option value="kasir">Kasir</option>
                                                        <option value="manajer">Manajer</option>
                                                    </select>
                                                    <br>
                                                    <label for="password">Password:</label>
                                                    <input type="password" class="form-control" v-model="detailuser.password"
                                                        required autocomplete="off" placeholder="masukkan password...">
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
                        <th>Nama</th>
                        <th>Username</th>
                        <th>Role</th>
                        <th>Edit</th>
                        <th>Remove</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(user, nomor) in user" :key="nomor">
                        <td>{{ nomor + 1 }}</td>
                        <td>{{ user.nama_user }}</td>
                        <td>{{ user.username }}</td>
                        <td>{{ user.role }}</td>
                        <td><button type="button" class="btn btn-primary" @click="getdetail(user)" data-bs-toggle="modal"
                                data-bs-target="#edituser">
                                Edit
                            </button></td>
                        <td><button class="btn btn-danger" @click="hapus(user)">Remove</button></td>
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
            user: {},
            datauser: {
                nama_user: '',
                username: '',
                role: '',
                password: '',
            },
            detailuser: {
                nama_user: '',
                username: '',
                role: '',
                password: '',
                id_user: ''
            }
        }
    },
    mounted() {
        this.getuser()
    },
    methods: {
        getuser() {
            axios.get('http://localhost:8000/api/getUser')
                .then(
                    ({ data }) => {
                        this.user = data
                    }
                )
        },
        getdetail(user) {
            axios.get('http://localhost:8000/api/getUser/' + user.id_user)
                .then(
                    (response) => {
                        console.log(response)
                        this.detailuser.id_user = response.data[0].id_user
                        this.detailuser.nama_user = response.data[0].nama_user
                        this.detailuser.username = response.data[0].username
                        this.detailuser.role = response.data[0].role
                        this.detailuser.password = response.data[0].password

                    }
                )
        },
        upload() {
            let form = new FormData
            form.append('nama_user', this.datauser.nama_user)
            form.append('username', this.datauser.username)
            form.append('role', this.datauser.role)
            form.append('password', this.datauser.password)

            axios.post('http://localhost:8000/api/createUser', form)
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
                            title: 'Failed Upload User',
                            button: true
                        })
                    }
                )
        },
        saveedit() {
            axios.put('http://localhost:8000/api/updateUser/' + this.detailuser.id_user, this.detailuser)
                .then(
                    (response) => {
                        console.log(response)
                        swal({
                            title: 'Success Update User',
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
                            title: 'Failed Update User',
                            icon: 'success'
                        })
                    }
                )
        },

        // Hapus Data

        hapus(user) {
            swal({
                title: "Mau hapus data ini?",
                text: "Kalo hilang gimana?",
                icon: "warning",
                buttons: true,
                dangerMode: true,
            })
                .then((willDelete) => {
                    if (willDelete) {

                        var url = 'http://localhost:8000/api/deleteUser/' + user.id_user;
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