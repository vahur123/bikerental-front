<template>
  <div class="admin">
    <h1>Tere tulemast admin lehele.</h1>
    <p>Siin saad lisada uue rattamudeli, uue ratta ning uue kasutaja.</p>

    <div>
      <input placeholder="Eesnimi" v-model="contact.firstName">
    </div>
    <div>
      <input placeholder="Perekonnanimi" v-model="contact.lastName">
    </div>
    <div>
      <input placeholder="Telefoninumber" v-model="contact.phone">
    </div>
    <div>
      <input placeholder="e-mail" v-model="contact.email">
    </div>
    <br>
    <br>
    <div>
      <input placeholder="Kasutajanimi" v-model="user.username">
    </div>
    <div>
      <input placeholder="Parool" v-model="user.password">
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
      user: {},
      contact: {},
      isError: false,

    }
  },
  methods: {
    addNewUser: function () {
      this.$http.post("/user/add/new", this.user, this.contact
      ).then(response => {
        alert(response.data.message)
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