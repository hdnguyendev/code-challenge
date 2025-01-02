<template>
    <div class="container mt-4">
        <router-link to="/add" class="btn btn-primary mb-4">Add New User</router-link>
        <div v-if="loading" class="text-center">
            <div class="spinner-border text-primary" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
        </div>
        <div v-else>
            <div v-if="noFound" class="alert alert-warning text-center">
                No users found!
            </div>
            <div v-if="users" class="row">
                <div v-for="user in users" :key="user.id" class="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
                    <div class="card">
                        <img :src="user.avatar" class="card-img-top" style="height: 300px; object-fit: cover;">
                        <div class="card-body">
                            <h5 class="card-title">{{ user.name }}</h5>
                            <p class="card-text">{{ user.email }}</p>
                        </div>
                        <div class="card-footer d-flex justify-content-between bg-white">
                            <router-link :to="`/edit/${user.id}`" class="btn btn-sm btn-warning text-white">
                                Detail
                            </router-link>
                            <button class="btn btn-sm btn-danger" @click="removeUser(user.id)">
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <nav aria-label="Page navigation">
            <ul class="pagination pagination-floating justify-content-center">
                <li class="page-item" :class="{ disabled: meta.page === 1 }">
                    <a class="page-link" href="#" aria-label="Previous" @click.prevent="fetchUsers(meta.page - 1)">
                        <span aria-hidden="true">
                            << </span>
                    </a>
                </li>
                <li v-for="page in totalPages" :key="page" class="page-item" :class="{ active: meta.page === page }">
                    <a class="page-link" href="#" @click.prevent="fetchUsers(page)">{{ page }}</a>
                </li>
                <li class="page-item" :class="{ disabled: meta.page === meta.totalPages }">
                    <a class="page-link" href="#" aria-label="Next" @click.prevent="fetchUsers(meta.page + 1)">
                        <span aria-hidden="true">>></span>
                    </a>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script>
import { getUsers, deleteUser } from "../services/userService";

export default {
    data() {
        return {
            users: [],
            loading: true,
            noFound: false,
            meta: {
                total: 0,
                page: 1,
                limit: 4,
                totalPages: 0,
            },
        };
    },
    computed: {
        totalPages() {
            return Array.from({ length: this.meta.totalPages }, (_, i) => i + 1);
        }
    },
    methods: {
        async fetchUsers(page = 1) {
            this.loading = true;
            try {
                const response = await getUsers(page, this.meta.limit);
                this.users = response.data.data;
                this.meta.total = response.data.meta.total;
                this.meta.page = response.data.meta.page;
                this.meta.totalPages = response.data.meta.totalPages;
            } catch (error) {
                console.error("Error: ", error);
            } finally {
                this.loading = false;
                this.noFound = this.users.length === 0;
            }
        },
        async removeUser(id) {
            if (confirm("Are you sure?")) {
                try {
                    await deleteUser(id);
                    this.fetchUsers(this.meta.page);
                } catch (error) {
                    console.error("Error deleting user: ", error);
                }
            }
        },
    },
    mounted() {
        this.fetchUsers();
    },
};
</script>

<style>
.pagination-floating {
    margin: 2rem 0;
}

.pagination-floating .page-link {
    border: none;
    padding: 15px 22px;
    margin: 0 5px;
    border-radius: 10px;
    background: white;
    color: #495057;
    font-weight: 500;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
}

.pagination-floating .page-item.active .page-link {
    background: #007bff;
    color: white;
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(0, 123, 255, 0.4);
}

.pagination-floating .page-link:hover {
    background: #007bff;
    color: white;
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(0, 123, 255, 0.4);
}
</style>