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

// Init
const uahub = createApp(App);
uahub.use(createPinia())
uahub.use(router);

uahub.component('Container', Container);
uahub.component('ContainerWide', ContainerWide);
uahub.component('BlockLink', BlockLink);
uahub.component('Footer', Footer);

uahub.mount('#app');
