<template>
  <div>
    <Header />
    <h3>Update Restaurant</h3>
    <form action>
      <input type="text" placeholder="Enter Title" v-model="restaurant.title" />
      <input type="text" placeholder="Enter Contact" v-model="restaurant.contact" />
      <textarea placeholder="Enter Address" v-model="restaurant.address"></textarea>
      <div class="clearfix">
        <button @click.prevent="update" class="signupbtn">Update</button>
      </div>
    </form>
  </div>
</template>

<script>
import Header from "./Header.vue";
import axios from "axios";
export default {
  name: "Update",
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
    async update() {
      await axios
        .put(
          "http://localhost:3000/restaurant/" + this.$route.params.id,
          this.restaurant
        )
        .then(response => {
          if (response.status == 200) {
            this.$router.push({ name: "home" });
          }
        })
        .catch(error => {
          console.log(error);
        });
    }
  },
  mounted() {
    //fetch restaurants
    axios
      .get("http://localhost:3000/restaurant/" + this.$route.params.id)
      .then(response => {
        this.restaurant = response.data;
      })
      .catch(error => {
        console.log(error);
      });
  }
};
</script>