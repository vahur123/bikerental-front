<template>
  <div>
    <h2 style="color: #a5ffd7">Palun logi sisse</h2>
    <div class="grid-container">
      <div name="vasak"></div>
      <div name="keskmine">
        <br>
        <br>
        <input type="text" placeholder="kasutajanimi" v-model="username">
        <br>
        <br>
        <input type="password" placeholder="parool" v-model="password">
        <br>
        <br>
        <button class="btn btn-primary" v-on:click="login">Logi sisse</button>
        <br>
        <br>
        <select v-model="selected">
          <option disabled value="">Vali roll</option>
          <option v-for="option in options" :value="option.roleId">{{ option.roleName }}</option>
        </select>
        <br>
        <span>Valitud roll {{ selected }}</span>
        <br>
        <br>
        <br>
        <span>Pole kasutaja? </span> <br>
<!--        <button class="btn btn-primary" v-on:click="signup">Registreeru</button>-->
        <br>
        <br>
      </div>
      <div name="parem">
        <img src="../assets/GoodLogo.jpg" style="width:300px; height:300px">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data: function () {
    return {
      username: "",
      password: "",
      firstName: "",
      lastName: "",
      email: "",
      options: {},
      selected: ""
    }
  },
  methods: {
    login: function () {
      this.$http.get("/login/in", {
            params: {
              username: this.username,
              password: this.password
            }
          }
      ).then(response => {
        this.firstName = response.data.firstName
        this.lastName = response.data.lastName

        alert("Tere tulemast rattarenti " + response.data.firstName + " " + response.data.lastName)
        this.options = response.data.roles
        sessionStorage.setItem('userId', response.data.userId)
        sessionStorage.setItem('firstName', this.firstName)
        sessionStorage.setItem('lastName', this.lastName)
        // sessionStorage.setItem('phone', response.data.phone)
        sessionStorage.setItem('email', response.data.email)
        this.$router.push({name: 'RattadRoute'})
      }).catch(error => {
        alert(error.response.data.message + " Parool on vale " + error.response.data.errorCode)
        console.log(error)
      })
    },
  }
}
</script>

<style>
.grid-container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  gap: 0px 0px;
  grid-template-areas:
    ". . .";
}
</style>