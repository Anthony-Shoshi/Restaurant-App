<template>
  <form style="border:1px solid #ccc">
    <div class="container">
      <h1>Sign in</h1>
      <p>Please fill in this form to create an account.</p>
      <hr />

      <label for="email">
        <b>Email</b>
      </label>
      <input type="email" placeholder="Enter Email" v-model="email" required />

      <label for="psw-repeat">
        <b>Password</b>
      </label>
      <input type="password" placeholder="Password" v-model="password" required />

      <div class="clearfix">
        <button @click.prevent="signIn" class="signupbtn">Sign In</button>
      </div>

      <p>
        Not registered? Signup from
        <router-link to="/sign-up">here</router-link>
      </p>
    </div>
  </form>
</template>

<script>
import axios from "axios";
export default {
  name: "SignIn",
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    async signIn() {
      await axios
        .get(
          `http://localhost:3000/user?email=${this.email}&password=${this.password}`
        )
        .then(response => {
          if (response.status == 200 && response.data.length > 0) {
            localStorage.setItem("user-info", JSON.stringify(response.data[0]));
            this.email = "";
            this.password = "";
            this.$router.push({ name: "home" });
          } else {
            alert("Incorrect Credentials!!!");
          }
        })
        .catch(error => {
          console.log(error);
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

