<template>
  <div>
    <h1>Tere tulemast Vali-Rattarenti!</h1>
    <br>
    <br>
    <p>Palun vali kuupäevad:</p>
    <input type="date" min="2022-02-25" placeholder="Rentimise alguse kuupäev" v-model="requiredStartDate">
    <input type="date" min="2022-02-25" placeholder="Rentimise lõpu kuupäev" v-model="requiredEndDate">
    <br>
    <br>
    <p>Palun vali, millist tüüpi ratast soovid rentida:</p>
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
      <tr v-for="row in bikeModelInfos">
        <td>{{ row.bikeName }}</td>
        <td>{{ row.sizeName }}</td>
        <td>{{ row.pricePerDay }}</td>
        <td>{{ row.numberOfBikesAvailable }}</td>
        <td><input type="number" v-model="row.numberOfBikesRequired"></td>
      </tr>
      </tbody>
    </table>
    <button v-on:click="reserveBikes">Lisa rattad ostukorvi</button>
    <button v-on:click="">Mine ostukorvi</button>

  </div>
</template>

<script>
export default {
  name: "Avaleht",
  data: function () {
    return {
      options: [],
      type: '',
      reserveBikesRequest: {
        requirementDetails: {},
        bikeModelInfos: []
      },
      requirementDetails: {
        userId: 1,
        typeId: 0,
        startDate: "",
        endDate: ""
      },
      bikeModelInfos: [],
      requiredStartDate: "",
      requiredEndDate: "",

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
        this.bikeModelInfos = response.data
        console.log(response.data)
      }).catch(error => {
        console.log(error)
      })
    },
    reserveBikes: function () {
      this.reserveBikesRequest.requirementDetails = this.requirementDetails
      this.reserveBikesRequest.bikeModelInfos = this.bikeModelInfos

      this.$http.post("/bike/reserve", this.reserveBikesRequest
      ).then(response => {
        alert("success")
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