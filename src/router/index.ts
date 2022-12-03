import { createRouter, createWebHistory } from 'vue-router';

// Views import
import Home from '@/views/Home.vue';
import NotFound from '@/views/NotFound.vue';

// Routes
const routes = [
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },    
    { path: '/', name: 'Home', component: Home }
];

// Router
const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;