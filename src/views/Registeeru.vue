<template>
  <div class="register">
    <h2 style="color: #3cbfb2">Registreeru Vali-rattarendi kliendiks</h2> <br>
    <div class="grid-container">
      <div></div>
      <div>
        <h5>Palun sisesta oma andmed:</h5>
        <div>
          <input placeholder="Eesnimi" v-model="firstName">
        </div>
        <div>
          <input placeholder="Perekonnanimi" v-model="lastName">
        </div>
        <div>
          <input placeholder="Telefoninumber" v-model="phone">
        </div>
        <div>
          <input placeholder="E-post" v-model="email">
        </div>
        <br>
        <div>
          <input placeholder="Kasutajanimi" v-model="username">
        </div>
        <div>
          <input type="password" placeholder="Parool" v-model="password">
        </div>
        <br>
        <div>
          <button class="btn btn-primary" v-on:click="addNewUser">Lisa kasutaja</button>
        </div>
        <br>
        <span>Peale registreerumist mine tagasi Login lehele ning logi sisse.</span>
        <div>
          <button class="btn btn-primary" v-on:click="moveToLogin">Tagasi sisse logima</button>
        </div>
      </div>
      <div>
        <img src="../assets/GoodLogo.jpg" style="width:300px; height:300px;">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Registreeru",
  data: function () {
    return {
      firstName: '',
      lastName: '',
      phone: '',
      email: '',
      username: '',
      password: '',
      isError: false,
    }
  },
  methods: {
    addNewUser: function () {
      let response = {
        firstName: this.firstName,
        lastName: this.lastName,
        phone: this.phone,
        email: this.email,
        username: this.username,
        password: this.password
      }
      this.$http.post("/user/add/new", response
      ).then(response => {
        alert("Uus kasutaja " + this.firstName + " " + this.lastName + " lisatud")
        console.log(response.data)
      }).catch(error => {
        console.log(error)
      })
    },
    moveToLogin: function () {
      this.$router.push({name: 'LoginRoute'})
    }
  }
}
</script>

<style scoped>
.grid-container {
  display: grid;
  grid-template-columns: 1fr 1.5fr 1fr;
  grid-template-rows: 1fr;
  gap: 0px 0px;
  grid-template-areas:
    ". . .";
}
h2 {
  font-weight: bold;
}
</style>