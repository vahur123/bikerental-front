<template>
  <div>
    <br>
    <br>
    <br>
    <input type="text" placeholder="kasutajanimi" v-model="username"><br>
    <br>
    <input type="password" placeholder="parool" v-model="password"><br>
    <br>
    <button class="btn btn-primary" v-on:click="login">Logi sisse</button>
    <br>
    <br>
    <br>
<!--    <form>-->
<!--      <div class="w-25 form-group">-->
<!--        <label for="kasutajanimi">Kasutajanimi</label>-->
<!--        <input type="username" class="form-control" id="kasutajanimi" placeholder="Sisesta kasutajanimi" v-model="username" >-->
<!--      </div>-->
<!--      <div class="w-25 form-group">-->
<!--        <label for="parool">Parool</label>-->
<!--        <input type="password" class="form-control" id="parool" placeholder="Parool" v-model="password">-->
<!--      </div>-->
<!--&lt;!&ndash;      <div class="form-check">&ndash;&gt;-->
<!--&lt;!&ndash;        <input type="checkbox" class="form-check-input" id="exampleCheck1">&ndash;&gt;-->
<!--&lt;!&ndash;        <label class="form-check-label" for="exampleCheck1">Check me out</label>&ndash;&gt;-->
<!--&lt;!&ndash;      </div>&ndash;&gt;-->
<!--      <button type="submit" class="btn btn-primary" v-on:click="login">Logi sisse</button>-->
<!--    </form>-->
<!--    <br>-->
<!--    <br>-->
<!--    <div class="form-group">-->
<!--      <form class="px-4 py-3">-->
<!--        <div class="form-group">-->
<!--          <label for="exampleDropdownFormEmail1">Email address</label>-->
<!--          <input type="email" class="form-control" id="exampleDropdownFormEmail1" placeholder="email@example.com" style="width: fit-content">-->
<!--        </div>-->
<!--        <div class="form-group">-->
<!--          <label for="exampleDropdownFormPassword1">Password</label>-->
<!--          <input type="password" class="form-control" id="exampleDropdownFormPassword1" placeholder="Password">-->
<!--        </div>-->
<!--        <div class="form-check">-->
<!--          <input type="checkbox" class="form-check-input" id="dropdownCheck">-->
<!--          <label class="form-check-label" for="dropdownCheck">-->
<!--            Remember me-->
<!--          </label>-->
<!--        </div>-->
<!--        <button type="submit" class="btn btn-primary">Sign in</button>-->
<!--      </form>-->
<!--      <div class="dropdown-divider"></div>-->
<!--      <a class="dropdown-item" href="#">New around here? Sign up</a>-->
<!--      <a class="dropdown-item" href="#">Forgot password?</a>-->
<!--    </div>-->
<!--    <br>-->

    <div>
      <select v-model ="selected" >
        <option disabled value="">Vali roll</option>
        <option v-for="option in options" :value="option.roleId">{{option.roleName}}</option>
      </select>
      <br>
      <span>Valitud roll {{selected}}</span>
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
      }).catch(error => {
        alert(error.response.data.message + " Parool on vale " + error.response.data.errorCode)
        console.log(error)
      })
    },
  }
}
</script>

<style scoped>

</style>