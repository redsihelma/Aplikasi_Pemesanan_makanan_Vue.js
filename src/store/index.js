import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router/index';

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        isLoggedIn: false,
        pemesanan: [],
    },
    mutations: {
        setLoggedIn(state, isLoggedIn) {
            state.isLoggedIn = isLoggedIn;
        },
        tambahkanPemesanan(state, item) {
            state.pemesanan.push(item);
        },
        editPemesanan(state, {
            index,
            item
        }) {
            state.pemesanan.splice(index, 1, item);
        },
        hapusPemesanan(state, index) {
            state.pemesanan.splice(index, 1);
        },
    },
    actions: {
        logout({
            commit
        }) {
            // Lakukan proses logout di sini
            // Misalnya, menghapus data sesi dan mengatur isLoggedIn menjadi false
            // Setelah logout, arahkan pengguna ke halaman login menggunakan router.push
            commit('setLoggedIn', false);
            router.push('/login');
        },
        tambahkanPemesanan({
            commit
        }, item) {
            commit('tambahkanPemesanan', item);
        },
        editPemesanan({
            commit
        }, {
            index,
            item
        }) {
            commit('editPemesanan', {
                index,
                item
            });
        },
        hapusPemesanan({
            commit
        }, index) {
            commit('hapusPemesanan', index);
        },
    },
    getters: {
        pemesanan(state) {
            return state.pemesanan;
        },
    },
});