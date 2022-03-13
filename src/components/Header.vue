<template>
  <div class="nav">
    <router-link to="/">Home</router-link>
    <router-link to="/add">Add Restaurant</router-link>
    <a href="#" @click="logout">Logout</a>
  </div>
</template>

<script>
export default {
  name: "Header",
  methods: {
    logout() {
      let user = localStorage.getItem("user-info");
      if (user) {
        localStorage.clear();
      }
      this.$router.push({ name: "signin" });
    }
  }
};
</script>

<style scoped>
.nav {
  background: #6b6b6b;
  overflow: hidden;
}

.nav a {
  color: white;
  text-decoration: none;
  font-size: 17px;
  float: left;
  text-align: center;
  padding: 14px 16px;
}

.nav a:hover {
  background: #ffdfdf;
  color: black;
}

.active {
  background: #ffdfdf;
  color: black !important;
}
</style>