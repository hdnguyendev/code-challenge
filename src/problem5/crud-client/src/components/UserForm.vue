<template>
    <form @submit.prevent="submit" class="container mt-4 p-4 border rounded shadow-sm" enctype="multipart/form-data"
        method="post">
        <h2 class="mb-4">{{ isEdit ? "Detail User" : "Create User" }}</h2>
        <div class="d-flex justify-content-center mb-3">
            <div v-if="avatarPreview">
                <img :src="avatarPreview" alt="Avatar Preview" class="img-thumbnail" style="max-width: 200px;" />
            </div>
        </div>

        <div class="mb-3">
            <label for="avatar" class="form-label">Avatar:</label>
            <input @blur="validate()" id="avatar" type="file" class="form-control" accept="image/*"
                @change="handleFileChange" name="avatar" v-bind:class="{ 'is-invalid': error.avatar }" />

            <div class="invalid-feedback" v-if="error.avatar">{{ error.avatar }}</div>
        </div>

        <div class="mb-3">
            <label for="name" class="form-label">Name:</label>
            <input @blur="validate()" id="name" v-model="user.name" type="text" class="form-control"
                v-bind:class="{ 'is-invalid': error.name }" />
            <div class="invalid-feedback" v-if="error.name">{{ error.name }}</div>
        </div>
        <div class="mb-3">
            <label for="email" class="form-label">Email:</label>
            <input @blur="validate()" id="email" v-model="user.email" type="email" class="form-control"
                v-bind:class="{ 'is-invalid': error.email }" />
            <div class="invalid-feedback" v-if="error.email">{{ error.email }}</div>
        </div>
        <div class="mb-3">
            <label for="phone" class="form-label">Phone:</label>
            <input @blur="validate()" id="phone" v-model="user.phone" type="tel" class="form-control"
                v-bind:class="{ 'is-invalid': error.phone }" />
            <div class="invalid-feedback" v-if="error.phone">{{ error.phone }}</div>
        </div>
        <div class="mb-3">
            <label for="address" class="form-label">Address:</label>
            <input @blur="validate()" id="address" v-model="user.address" type="text" class="form-control"
                v-bind:class="{ 'is-invalid': error.address }" />
            <div class="invalid-feedback" v-if="error.address">{{ error.address }}</div>
        </div>

        <div class="d-flex justify-content-between">
            <button type="submit" class="btn btn-primary">{{ isEdit ? "Update" : "Create" }}</button>
            <router-link to="/" class="btn btn-secondary">Cancel</router-link>
        </div>
    </form>
</template>

<script>
export default {
    props: {
        user: { type: Object, default: () => ({ name: "", email: "", phone: "", address: "", avatar: "" }) },
        isEdit: { type: Boolean, default: false },
    },
    emits: ["submit"],
    data() {
        return {
            avatarFile: null,
            avatarPreview: this.user.avatar || null,
            error: { type: Object, default: () => ({ name: "", email: "", phone: "", address: "", avatar: "" }) },
        };
    },
    methods: {
        validate() {

            this.error = {
                name: "",
                email: "",
                phone: "",
                address: "",
                avatar: "",
            };

            if (!this.user.name) {
                this.error.name = "Name is required!";
            }

            if (!this.user.email) {
                this.error.email = "Email is required!";
            } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.user.email)) {
                this.error.email = "Email is invalid!";
            }

            if (this.user.phone && !/^\+?\d+$/.test(this.user.phone)) {
                this.error.phone = "Phone is invalid!";
            }

            if (this.avatarFile && !["image/jpeg", "image/png", "image/gif"].includes(this.avatarFile.type)) {
                this.error.avatar = "Avatar must be an image!";
            }

            return !Object.values(this.error).some((err) => err);

        },
        submit() {

            if (!this.validate()) {
                return;
            }

            const formData = new FormData();
            formData.append("name", this.user.name);
            formData.append("email", this.user.email);
            formData.append("phone", this.user.phone || "");
            formData.append("address", this.user.address || "");
            if (this.avatarFile) {
                formData.append("avatar", this.avatarFile);
            }
            this.$emit("submit", formData);

        },
        handleFileChange(event) {
            const file = event.target.files[0];
            if (file) {
                this.avatarFile = file;
                const reader = new FileReader();
                reader.onload = (e) => {
                    this.avatarPreview = e.target.result;
                };
                reader.readAsDataURL(file);
            }
        },
    },
};
</script>

<style scoped>
.container {
    max-width: 600px;
    background-color: #f8f9fa;
}
</style>