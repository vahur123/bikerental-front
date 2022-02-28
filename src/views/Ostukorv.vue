<template>
  <div class="Ostukorv">
    <h2 style="color: #3cbfb2">Ostukorvi kinnitus</h2>
    <div class="grid-container">
      <div name="left">
        <span>Sisse logitud kasutaja:</span> <br>
        <span>Eesnimi: {{ firstName }} </span> <br>
        <span>Perekonnanimi: {{ lastName }}</span> <br>
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
      <div></div>
      <div>
        <h5>Kokku tasuda: {{ bikeReserveInfo.grandTotalPrice }} €</h5> <br>
        <h6>
          Rattad saab kätte ning tagastada Uus tn 12, Tallinn. <br>
          Iga ratta eest tuleb tasuda tagatisraha 100€ ja allkirjastada rendileping. <br>
          Porise ratta tagastamisel lisandub tasu pesemise eest 12€.<br>
          <br>
          <b>Tasutamine kohapeal sularahas.</b> <br>
        </h6>
      </div>
      <div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Ostukorv",
  data: function () {
    return {
      // bookedModel: {},
      // bookedAmount: {},
      bikeReserveInfo: JSON.parse(sessionStorage.getItem('bikeReserveInfo')),
      // lastName: JSON.parse(sessionStorage.getItem('lastName'))
      firstName: sessionStorage.getItem('firstName'),
      lastName: sessionStorage.getItem('lastName'),
      // phone: sessionStorage.getItem('phone'),
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

h2 {
  font-weight: bold;
}

h5 {
  text-align: left;
}

h6 {
  text-align: left;
}
</style>