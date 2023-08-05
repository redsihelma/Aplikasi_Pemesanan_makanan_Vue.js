import router from '../router/index';
<template>
  <div class="user-dashboard">
    <h2>User Dashboard</h2>
    <!-- Tombol Logout -->
    <button @click="logout">Logout</button>
    <h3>Pesan Menu</h3>
    <form @submit.prevent="pesanMenu">
      <div class="form-group">
        <label for="nama">Nama</label>
        <input type="text" id="nama" v-model="nama" required />
      </div>
      <div class="form-group">
        <label for="jenis">Jenis</label>
        <input type="text" id="jenis" v-model="jenis" required />
      </div>
      <button type="submit">Pesan</button>
    </form>

    <h3>Daftar Pesanan</h3>
    <ul>
      <li v-for="(pesanan, index) in pesananList" :key="index">
        {{ pesanan.nama }} - {{ pesanan.jenis }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nama: "",
      jenis: "",
      pesananList: [],
    };
  },
  methods: {
    logout() {
      this.$store.dispatch("logout");
    },
    pesanMenu() {
      this.pesananList.push({
        nama: this.nama,
        jenis: this.jenis,
      });
      this.nama = "";
      this.jenis = "";
    },
  },
};
</script>

<style>
.user-dashboard {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
}

.form-group {
  margin-bottom: 10px;
}

label {
  display: block;
  font-weight: bold;
}

input {
  width: 100%;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

button {
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  margin-bottom: 5px;
}
</style>
