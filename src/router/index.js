// src/router/index.js
import Vue from 'vue';
import VueRouter from 'vue-router';
import LoginComponent from '../components/LoginComponent.vue';
import AdminDashboard from '../components/AdminDashboard.vue';
import UserDashboard from '../components/UserDashboard.vue';
import LogoutComponent from '../components/LogoutComponent.vue'; // Import LogoutComponent

Vue.use(VueRouter);

const routes = [{
        path: '/',
        redirect: '/login'
    },
    {
        path: '/login',
        component: LoginComponent
    },
    {
        path: '/admin',
        component: AdminDashboard
    },
    {
        path: '/user',
        component: UserDashboard
    },
    {
        path: '/logout',
        component: LogoutComponent
    }, // Tambahkan route untuk halaman logout
];

const router = new VueRouter({
    routes,
});

export default router;