<template>
  <div class="admin">
    <h2 style="color: #3cbfb2">Uue rattamudeli lisamine</h2>

    <br>
    <div class="grid-container">
      <div></div>

      <div>
        <h5>Palun sisesta uue rattamudeli andmed:</h5>
<!--        <div>-->
<!--          <input placeholder="Rattatüüp" v-model="typeName">-->
<!--        </div>-->
        <div>
          <select v-model="selectedTypeName">
            <option disabled value="">Vali rattatüüp</option>
            <option v-for="option in options" :value="option.name">{{ option.name }}</option>
          </select>
        </div>
        <div>
          <input placeholder="Raami suurus" v-model="sizeName">
        </div>
        <div>
          <input placeholder="Mudeli nimi" v-model="bikeName">
        </div>
        <div>
          <input placeholder="Adult bike (true/false)" v-model="adultBike">
        </div>
        <div>
          <input placeholder="Päevahind" v-model="pricePerDay">
        </div>
        <br>
        <div>
          <button class="btn btn-primary" v-on:click="addNewBikeModel">Lisa mudel</button>
        </div>
        <br>
      </div>

      <div>
        <img src="../assets/GoodLogo.jpg" style="width:300px; height:300px;">
      </div>

      <div></div>

      <div>
        <br>
        <br>
        <h2 style="color: #3cbfb2">Uue ratta isendi lisamine</h2>
        <h5>Palun sisesta rattamudeli id-number:</h5>
        <div>
          <input placeholder="Mudeli-Id" v-model="bikeId">
        </div>
        <br>
        <div>
          <button class="btn btn-primary" v-on:click="addNewBikeInShop">Lisa ratas</button>
        </div>
      </div>

      <div></div>

    </div>
  </div>
</template>

<script>
export default {
  name: "Admin",
  data: function () {
    return {
      typeName: '',
      sizeName: '',
      bikeName: '',
      adultBike: '',
      pricePerDay: '',
      isError: false,
      bikeId: '',
      bikeInShopId: '',
      options: [],
      selectedTypeName: "",
    }
  },
  methods: {
    addNewBikeModel: function () {
      let response = {
        typeName: this.selectedTypeName,
        sizeName: this.sizeName,
        bikeName: this.bikeName,
        adultBike: this.adultBike,
        pricePerDay: this.pricePerDay,
      }
      this.$http.post("/bike/add/new/model", response
      ).then(response => {
        alert(this.bikeName + this.sizeName + " on lisatud mudeli id-numbriga: " + response.data.bikeId)
        console.log(response.data)
      }).catch(error => {
        console.log(error)
      })
    },
    addNewBikeInShop: function () {
      this.$http.post("/bike/add/new/bike/in/shop", null, {
            params: {
              bikeId: this.bikeId
            }
          }
      ).then(response => {
        alert(response.data.bikeName + response.data.sizeName + " on lisatud valikusse id-numbriga: " + response.data.bikeInShopId)
        console.log(response.data)
      }).catch(error => {
        console.log(error)
      })
    },
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
.grid-container {
  display: grid;
  grid-template-columns: 1fr 1.5fr 1fr;
  grid-template-rows: 1fr;
  gap: 0px 0px;
  grid-template-areas:
    ". . .";
}
</style>