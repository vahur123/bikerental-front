<template>
  <div>
    <h1 style="color: #37ffbc">Tere tulemast Vali-Rattarenti!</h1>
    <br>
    <br>
    <div class="grid-container">
      <div name="left"></div>
      <div name="middle">
        <h4>Saadaval olevate rataste nägemiseks</h4>
        <h4>vali rendiperiood:</h4>
        <input type="date" min="2022-02-28" placeholder="Rentimise alguse kuupäev" v-model="requiredStartDate">
        <input type="date" min="2022-02-28" placeholder="Rentimise lõpu kuupäev" v-model="requiredEndDate">
        <br>
        <br>
        <h4>Vali rattatüüp:</h4>
        <div>
          <select v-on:change="showBikeModelByType" v-model="selectedTypeId">
            <option disabled value="">Vali rattatüüp</option>
            <option v-for="option in options" :value="option.id">{{ option.name }}</option>
          </select>
        </div>
      </div>
      <div name="right">
        <img src="../assets/GoodLogo.jpg" style="width:300px; height:300px;">
      </div>
      <div name="left">
        <p>{{firstName}}</p>
        <p>{{lastName}}</p>
      </div>
      <div name="middle">
        <br><br>
        <table v-if="selectedTypeId" class="table table-hover">
          <thead>
          <tr>
            <th>Rattamudel</th>
            <th>Suurus</th>
            <th>Päeva hind (€)</th>
            <th>Saadaval (tk)</th>
            <th>Broneeri (tk)</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="row in bikeModelInfos">
            <td>{{ row.bikeName }}</td>
            <td>{{ row.sizeName }}</td>
            <td>{{ row.pricePerDay }}</td>
            <td>{{ row.numberOfBikesAvailable }}</td>
            <td><input type="number" v-model="row.numberOfBikesRequired" style="width: 50px"></td>
          </tr>
          </tbody>
        </table>
      </div>
      <div name="right"></div>
      <div name="left"></div>
      <div name="middle">
        <button v-if="selectedTypeId" v-on:click="reserveBikes">Lisa rattad ostukorvi</button>
        <button v-if="selectedTypeId" v-on:click="moveToCart">Mine ostukorvi</button>
      </div>
      <div name="right"></div>
    </div>
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
      selectedTypeId: "",
      firstName: sessionStorage.getItem('firstName'),
      lastName: sessionStorage.getItem('lastName')
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
        alert("Rattad lisatud. Vali veel või mine edasi ostukorvi.")
        console.log(response.data)
        sessionStorage.setItem('bikeReserveInfo', JSON.stringify(response.data))
      }).catch(error => {
        console.log(error)
      })
    },
    moveToCart: function () {
     this.$router.push({name: 'OstukorvRoute'})
    }
  },
  beforeMount() {
    this.showBikeTypes()
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
</style>