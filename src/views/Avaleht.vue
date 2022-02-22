<template>
<div>
  <h1>Tere tulemast Vali-Rattarenti!</h1>
  <br>
  <h3>Palun vali, millist tüüpi ratast soovid rentida:</h3>
  <div>
    <select v-model="selected">
      <option disabled value="">Vali rattatüüp</option>
      <option v-for="option in options" :value="option.id">{{option.name}}</option>
    </select>
  </div>

</div>
</template>

<script>
export default {
  name: "Avaleht",
  data: function () {
    return {
      options: [],
      selected: ""
    }
  },
  methods: {
    showBikeTypes: function () {
      this.$http.get("/bike/all/types")
          .then(response => {
            this.options = response.data
            console.log(response.data)
          }).catch(error => {
        console.log(error)
      })
    }
  },
  beforeMount() {
    this.showBikeTypes()
  }
}



</script>

<style scoped>

</style>