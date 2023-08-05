import router from '../router/index';
<template>
  <div class="admin-dashboard">
    <h2>Admin Dashboard</h2>
    <!-- Tombol Logout -->
    <!-- Tombol Logout -->
    <button @click="logout">Logout</button>
    <h3>Tambah Menu</h3>
    <form @submit.prevent="tambahMenu">
      <div class="form-group">
        <label for="nama">Nama</label>
        <input type="text" id="nama" v-model="nama" required />
      </div>
      <div class="form-group">
        <label for="jenis">Jenis</label>
        <input type="text" id="jenis" v-model="jenis" required />
      </div>
      <button type="submit">Tambah</button>
    </form>

    <h3>Daftar Menu</h3>
    <ul>
      <li v-for="(menu, index) in menuList" :key="index">
        {{ menu.nama }} - {{ menu.jenis }}
        <button @click="editMenu(index)">Edit</button>
        <button @click="hapusMenu(index)">Hapus</button>
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
      menuList: [],
    };
  },
  methods: {
    logout() {
      this.$store.dispatch("logout");
    },
    tambahMenu() {
      this.menuList.push({
        nama: this.nama,
        jenis: this.jenis,
      });
      this.nama = "";
      this.jenis = "";
    },
    editMenu(index) {
      const menu = this.menuList[index];
      this.nama = menu.nama;
      this.jenis = menu.jenis;
      this.menuList.splice(index, 1);
    },
    hapusMenu(index) {
      this.menuList.splice(index, 1);
    },
  },
};
</script>

<style>
.admin-dashboard {
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
