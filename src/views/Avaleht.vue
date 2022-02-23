<template>
  <div>
    <h1>Tere tulemast Vali-Rattarenti!</h1>
    <br>
    <br>
    <h5>Palun vali kuupäevad:</h5>

    <input type="date" placeholder="Rentimise alguse kuupäev" v-model="requiredStartDate">
    <input type="date" placeholder="Rentimise lõpu kuupäev" v-model="requiredEndDate">
    <br>
    <br>
    <h5>Palun vali, millist tüüpi ratast soovid rentida:</h5>
    <div>
      <select v-on:change="showBikeModelByType" v-model="selectedTypeId">
        <option disabled value="">Vali rattatüüp</option>
        <option v-for="option in options" :value="option.id">{{ option.name }}</option>
      </select>
    </div>
    <br><br>
    <table v-if="selectedTypeId" class="table table-hover">
      <thead>
      <tr>
        <th>Rattamudel</th>
        <th>Suurus</th>
        <th>Päeva hind</th>
        <th>Saadaval tk</th>
        <th>broneeri tk</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="row in models">
        <td>{{ row.bikeName }}</td>
        <td>{{ row.sizeName }}</td>
        <td>{{ row.pricePerDay }}</td>
        <td>{{ row.numberOfBikesAvailable }}</td>
        <td><input type="number" v-model="row.numberOfBikesRequired"></td>
        <td>
          <button>lisa</button>
        </td>
      </tr>
      </tbody>
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
      requiredStartDate: "",
      requiredEndDate: "",
      requirementDetails: {
        typeId: 0,
        startDate: "",
        endDate: ""
      },
      selectedTypeId: ""
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

      this.requirementDetails.typeId = this.selectedTypeId
      this.requirementDetails.startDate = this.requiredStartDate
      this.requirementDetails.endDate = this.requiredEndDate

      this.$http.post("/bike/model/by/type", this.requirementDetails
      ).then(response => {
        this.models = response.data
        console.log(response.data)
      }).catch(error => {
        console.log(error)
      })
    }
    ,

    // showBikeModelByType: function () {
    //   this.$http.get("/bike/model/by/type", {
    //     params: {
    //       typeId: this.selectedTypeId
    //     }
    //   })
    //       .then(response => {
    //         this.models = response.data
    //         console.log(response.data)
    //       }).catch(error => {
    //     console.log(error)
    //   })
    // }
  },
  beforeMount() {
    this.showBikeTypes()
  }
}


</script>

<style scoped>

</style>