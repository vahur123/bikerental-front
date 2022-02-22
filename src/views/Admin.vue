<template>
  <div class="admin">
    <h1>Tere tulemast admin lehele.</h1>
    <p>Siin saad lisada uue rattamudeli, uue ratta ning uue kasutaja.</p>

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
      <input placeholder="e-mail" v-model="email">
    </div>
    <br>
    <br>
    <div>
      <input placeholder="Kasutajanimi" v-model="username">
    </div>
    <div>
      <input placeholder="Parool" v-model="password">
    </div>
    <div>
      <button v-on:click="addNewUser">Lisa kasutaja</button>
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