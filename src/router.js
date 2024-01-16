import { createRouter, createWebHistory } from 'vue-router';

import Homepage from './pages/Homepage.vue';
import ProjectIndex from './pages/projects/Index.vue';
import ProjectShow from './pages/projects/Show.vue';
import Contact from './pages/Contact.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: Homepage,
        },
        {
            path: '/portfolio',
            name: 'projects.index',
            component: ProjectIndex
        },
        {
            path: '/portfolio/:slug',
            name: 'projects.show',
            props: true,
            component: ProjectShow
        },
        {
            path: '/contatti',
            name: 'contacts',
            component: Contact
        },
    ]
});

export { router };