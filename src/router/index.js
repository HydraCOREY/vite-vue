import { createWebHistory, createRouter } from "vue-router";
import Home from '../views/Home.vue'
import Hello from '../views/HelloWorld.vue'
import NotFound from '../views/NotFound.vue'

const history = createWebHistory();

const routes = [{
        path: '/',
        name: 'home',
        component: Home
    }, {
        path: '/hello',
        name: 'hello',
        component: Hello
    },
    {
        path: '/:catchAll(.*)',
        name: 'notFound',
        component: NotFound
    }
]

const router = createRouter({ history, routes });
export default router;