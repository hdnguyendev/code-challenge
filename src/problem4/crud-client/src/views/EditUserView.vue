<template>
    <UserForm :user="user" :isEdit="true" @submit="updateUser" />
</template>

<script>
import { getUser, updateUser } from "../services/userService";
import UserForm from "../components/UserForm.vue";

export default {
    components: { UserForm },
    data() {
        return {
            user: null,
        };
    },
    async created() {
        const response = await getUser(this.$route.params.id);
        this.user = response.data.data;
    },
    methods: {
        async updateUser(user) {
            await updateUser(this.$route.params.id, user);
            this.$router.push("/");
        },
    },
};
</script>