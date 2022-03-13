<template>
  <form @submit.prevent="signUp" style="border:1px solid #ccc">
    <div class="container">
      <h1>Sign Up</h1>
      <p>Please fill in this form to create an account.</p>
      <hr />

      <label for="psw">
        <b>Name</b>
      </label>
      <input type="text" placeholder="Enter Name" v-model="name" required />

      <label for="email">
        <b>Email</b>
      </label>
      <input type="email" placeholder="Enter Email" v-model="email" required />

      <label for="psw-repeat">
        <b>Password</b>
      </label>
      <input type="password" placeholder="Password" v-model="password" required />

      <div class="clearfix">
        <button class="signupbtn">Sign Up</button>
      </div>

      <p>
        Already registered? Login from
        <router-link to="/sign-in">here</router-link>
      </p>
    </div>
  </form>
</template>

<script>
import axios from "axios";

export default {
  name: "SignupForm",
  data() {
    return {
      name: "",
      email: "",
      password: ""
    };
  },
  methods: {
    async signUp() {
      await axios
        .post("http://localhost:3000/user", {
          name: this.name,
          email: this.email,
          password: this.password
        })
        .then(response => {
          localStorage.setItem("user-info", JSON.stringify(response.data));
          this.name = "";
          this.email = "";
          this.password = "";
          this.$router.push({ name: "home" });
        })
        .catch(error => {
          console.log("error", error);
        });
    }
  },
  mounted() {
    let user = localStorage.getItem("user-info");
    if (user) {
      this.$router.push({ name: "home" });
    }
  }
};
</script>