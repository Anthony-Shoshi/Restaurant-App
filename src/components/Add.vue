<template>
  <div>
    <Header />
    <h3>Add Restaurant</h3>
    <form action>
      <input type="text" placeholder="Enter Title" v-model="restaurant.title" />
      <input type="text" placeholder="Enter Contact" v-model="restaurant.contact" />
      <textarea placeholder="Enter Address" v-model="restaurant.address"></textarea>
      <div class="clearfix">
        <button @click.prevent="add" class="signupbtn">Add</button>
      </div>
    </form>
  </div>
</template>

<script>
import Header from "./Header.vue";
import axios from 'axios'
export default {
  name: "Add",
  components: {
    Header
  },
  data() {
    return {
      restaurant: {
        title: "",
        contact: "",
        address: ""
      }
    };
  },
  methods: {
    async add() {
      await axios.post("http://localhost:3000/restaurant", this.restaurant)
      .then(response => {
        if (response.status == 201) {
          this.$router.push({name: "home"});
        }
      })
      .catch(error => {
        console.log(error);
      })
    }
  }
};
</script>