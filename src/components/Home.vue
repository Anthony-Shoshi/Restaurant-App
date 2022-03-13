<template>
  <div>
    <Header />
    <div class="title">Hello {{ name }}, welcome to home page!</div>
    <table border="1" width="100%">
      <tr>
        <th>Title</th>
        <th>Contact</th>
        <th>Address</th>
        <th>Actions</th>
      </tr>
      <template v-if="restaurants.length != 0">
        <tr v-for="(restaurant, index) in restaurants" :key="index">
          <td>{{ restaurant.title }}</td>
          <td>{{ restaurant.contact }}</td>
          <td>{{ restaurant.address }}</td>
          <td>
            <router-link :to="'/update/'+restaurant.id">Update</router-link>
            <button @click="deleteData(restaurant.id)">Delete</button>
          </td>
        </tr>
      </template>
      <template v-else>
        <tr>
          <td colspan="4">
            <p>No Data to Show!</p>
          </td>
        </tr>
      </template>
    </table>
  </div>
</template>

<script>
import Header from "./Header.vue";
import axios from "axios";
export default {
  name: "Home",
  data() {
    return {
      name: "",
      restaurants: []
    };
  },
  components: {
    Header
  },
  methods: {
    async deleteData(id) {
      await axios
        .delete("http://localhost:3000/restaurant/" + id)
        .then(response => {
          if (response.status == 200) {
            this.loadData();
          }
        })
        .catch(error => {
          console.log(error);
        });
    },
    async loadData() {
      await axios
        .get("http://localhost:3000/restaurant")
        .then(response => {
          this.restaurants = response.data;
        })
        .catch(error => {
          console.log(error);
        });
    }
  },
  mounted() {
    let user = localStorage.getItem("user-info");
    this.name = JSON.parse(user).name;
    if (!user) {
      this.$router.push({ name: "signup" });
    }

    //fetch restaurants
    this.loadData();
  }
};
</script>

<style scoped>
.title {
  margin: 10px;
  float: left;
}
</style>