<template>
  <div>
    <h3>Ostukorvi kinnitus</h3>
  <div class="grid-container">
    <div name="left">
      <span>Sisse logitud kasutaja:</span>
      <br>
      <span>Eesnimi: {{ firstName }} </span> <br>
      <span>Perekonnanimi: {{ lastName }}</span> <br>
<!--      <span>Telefon: {{ phone }}</span> <br>-->
      <span>E-post: {{ email }}</span> <br>
    </div>
    <div name="middle">
      <table class="table table-hover">
        <thead>
        <tr>
          <th>Rattamudel</th>
          <th>Suurus</th>
          <th>Päeva hind (€)</th>
          <th>Kogu hind (€)</th>
          <th>Broneeriti (tk)</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="bikeModelInfo in bikeReserveInfo.bikeModelInfoList">
          <td>{{ bikeModelInfo.bikeName }}</td>
          <td>{{ bikeModelInfo.sizeName }}</td>
          <td>{{ bikeModelInfo.pricePerDay }}</td>
          <td>{{ bikeModelInfo.totalPricePerModel }}</td>
          <td>{{ bikeModelInfo.numberOfBikesRequired }}</td>
        </tr>
        </tbody>
      </table>
    </div>
    <div name="right">
      <img src="../assets/GoodLogo.jpg" style="width:300px; height:300px;">
    </div>
  </div>
  </div>
</template>

<script>
export default {
  name: "Ostukorv",
  data: function () {
    return {
      bookedModel: {},
      // bookedModel tuleb for tsükliga läbi lasta et saada kätte valitud mudel?
      bookedAmount: {},
      bikeReserveInfo: JSON.parse(sessionStorage.getItem('bikeReserveInfo')),
      // lastName: JSON.parse(sessionStorage.getItem('lastName'))
      firstName: sessionStorage.getItem('firstName'),
      lastName: sessionStorage.getItem('lastName'),
      phone: sessionStorage.getItem('phone'),
      email: sessionStorage.getItem('email')
    }
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