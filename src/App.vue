<script setup lang="ts">
import { useUserStore } from "@/stores/userStore";
import { useRouter } from "vue-router";
import axios from "axios";
import { onMounted } from "vue";

const router = useRouter();
const userStore = useUserStore();
const tokenPattern = new RegExp(/^def[a-z0-9]+/gi);

onMounted(() => {
  axios.interceptors.response.use(
    (response) => response,
    async (error) => {
      if (error.response.status === 401) {
        await userStore.logout();

        window.location.reload();
      }

      return Promise.reject(error);
    }
  );
});

onMounted(async () => {
  let params = new URLSearchParams(window.location.search);
  let callback_code = params.get("code");

  if (!userStore.isLoggedIn)
    if (callback_code && tokenPattern.test(callback_code)) {
      await userStore.login(callback_code);

      router.replace({ query: {} });
    }
});
</script>

<template>
  <router-view></router-view>
</template>

<style>

</style>
