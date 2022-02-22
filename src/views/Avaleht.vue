<template>
  <div>
    <h1>Tere tulemast Vali-Rattarenti!</h1>
    <br>
    <h3>Palun vali, millist tüüpi ratast soovid rentida:</h3>
    <div>
      <select v-on:change="showBikeModelByType" v-model="selected">
        <option disabled value="">Vali rattatüüp</option>
        <option v-for="option in options" :value="option.id">{{ option.name }}</option>
      </select>
    </div>
<!--    <span>typeId: {{ selected }}</span>-->
    <br><br>
<!--    <input placeholder="rattatüüp" v-model="type">-->
<!--    <button v-on:click="showBikeModelByType">Lae rattad</button>-->
    <table v-if="selected">
      <tr>
        <th>Rattamudel</th>
        <th>Raami suurus</th>
      </tr>
      <tr v-for="row in models">
        <td>{{ row.bikeName }}</td>
        <td>{{ row.sizeName }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "Avaleht",
  data: function () {
    return {
      options: [],
      type: '',
      models: [],
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
    },
    showBikeModelByType: function () {
      this.$http.get("/bike/model/by/type", {
        params: {
          typeId: this.selected
        }
      })
          .then(response => {
            this.models = response.data
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