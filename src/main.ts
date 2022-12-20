import { createApp } from 'vue';
import { createPinia } from 'pinia';
import router from '@/router';
import '@/style.scss';

// Components
import App from '@/App.vue';
import Container from '@/components/Container.vue';
import ContainerWide from '@/components/ContainerWide.vue';
import BlockLink from '@/components/BlockLink.vue';
import Footer from '@/components/Footer.vue';
import ButtonClassic from '@/components/ButtonClassic.vue';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';
import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: "http://localhost:8080/",
  timeout: 5000,
  withCredentials: true,
});

// Init
const uahub = createApp(App);
const pinia = createPinia();

uahub.use(pinia.use(piniaPluginPersistedstate));
uahub.use(router);

uahub.component('Container', Container);
uahub.component('ContainerWide', ContainerWide);
uahub.component('BlockLink', BlockLink);
uahub.component('Footer', Footer);
uahub.component('ButtonClassic', ButtonClassic);

uahub.mount('#app');
