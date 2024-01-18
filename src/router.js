import { createRouter, createWebHistory } from 'vue-router';

import Homepage from './pages/Homepage.vue';
import ProjectIndex from './pages/projects/Index.vue';
import ProjectShow from './pages/projects/Show.vue';
import Contact from './pages/Contact.vue';
import NotFound from './pages/404.vue'
import Archivie from './pages/types/Archivie.vue'

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
            path:'/type/:slug',
            name:'types.archive',
            props: true,
            component: Archivie
        },
        {
            path: '/contatti',
            name: 'contacts',
            component: Contact
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'not-found',
            component: NotFound,
        }
    ]
});

export { router };