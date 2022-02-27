<template>
  <div class="admin">
    <h1>Tere tulemast admin lehele.</h1>
    <h5>Uue kasutaja lisamine:</h5>

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
    <div>
      <button class="btn btn-primary" v-on:click="addNewUser">Lisa kasutaja</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Admin",
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
    }
  }
}
</script>

<style scoped>

</style>