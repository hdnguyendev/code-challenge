<template>
    <UserForm @submit="createUser" />
</template>

<script>
import { createUser } from "../services/userService";
import UserForm from "../components/UserForm.vue";

export default {
    components: { UserForm },
    methods: {
        async createUser(user) {
            await createUser(user);
            this.$router.push("/");
        },
    },
};
</script>