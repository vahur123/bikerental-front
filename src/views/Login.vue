<template>
  <div>
    <br>
    <br>
    <br>
    <input placeholder="kasutajanimi" v-model="username"><br>
    <br>
    <input placeholder="parool" v-model="password"><br>
    <br>
    <button>Logi sisse</button>
    <br>
    <br>

    <div>
      <select v-model ="selected" >
        <option disabled value="">Vali roll</option>
        <option v-for="option in options" :value="option.roleId">{{option.roleName}}</option>
      </select>
      <br>
      <span>Valitud roll{{selected}}</span>
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
      options: {},
      selected: ""
    }
  },
  methods: {
    login: function () {
      this.$http.get("/login/in", {
            params: {
              userName: this.userName,
              password: this.password
            }
          }
      ).then(response => {
        alert("Tere tulemast rattarenti" + response.data.firstName + "" + response.data.lastName)
        this.options = response.data.roles
        console.log(response.data)
      }).catch(error => {
        alert(error.response.data.message + "Parool on vale" + error.response.data.errorCode)
        console.log(error)
      })
    },
  }
}
</script>

<style scoped>

</style>