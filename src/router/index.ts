import { createRouter, createWebHistory } from 'vue-router';

// Views import
import Home from '../views/Home.vue';

// Routes
const routes = [
    { path: '/', name: 'Home', component: Home }
];

// Router
const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;