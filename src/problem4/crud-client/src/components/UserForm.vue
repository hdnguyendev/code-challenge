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
            <input id="avatar" type="file" class="form-control" accept="image/*" @change="handleFileChange"
                name="avatar" />
        </div>

        <div class="mb-3">
            <label for="name" class="form-label">Name:</label>
            <input id="name" v-model="user.name" type="text" class="form-control" required />
        </div>
        <div class="mb-3">
            <label for="email" class="form-label">Email:</label>
            <input id="email" v-model="user.email" type="email" class="form-control" required />
        </div>
        <div class="mb-3">
            <label for="phone" class="form-label">Phone:</label>
            <input id="phone" v-model="user.phone" type="tel" class="form-control" />
        </div>
        <div class="mb-3">
            <label for="address" class="form-label">Address:</label>
            <input id="address" v-model="user.address" type="text" class="form-control" />
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
        user: { type: Object, default: () => ({ name: "", email: "" }) },
        isEdit: { type: Boolean, default: false },
    },
    emits: ["submit"],
    data() {
        return {
            avatarFile: null,
            avatarPreview: this.user.avatar || null,
        };
    },
    methods: {
        submit() {
            // Create a FormData object to include the user data and file
            const formData = new FormData();
            formData.append("name", this.user.name);
            formData.append("email", this.user.email);
            formData.append("phone", this.user.phone || "");
            formData.append("address", this.user.address || "");
            if (this.avatarFile) {
                formData.append("avatar", this.avatarFile);
            }

            // Emit the form data to the parent component
            this.$emit("submit", formData);
        },
        handleFileChange(event) {
            const file = event.target.files[0];
            if (file) {
                this.avatarFile = file; // Store the file in the component's data
                const reader = new FileReader();
                reader.onload = (e) => {
                    this.avatarPreview = e.target.result; // Preview the image
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