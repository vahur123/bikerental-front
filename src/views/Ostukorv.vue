<template>
<div>
  <div class="broneeritud rattad">{{bookedModel}}</div>
  <div class="broneeritud rattad tk">{{bookedAmount}}</div>
  <div class="broneeritud rattad id">{{bikeModelId}}</div>
  <div>
  <table class="table table-hover">
    <thead>
    <tr>
      <th>Rattamudel</th>
      <th>Suurus</th>
      <th>Päeva hind (€)</th>
      <th>Saadaval (tk)</th>

    </tr>
    </thead>
    <tbody>
    <tr v-for="row in bookedModel">
      <td>{{ row.bookedModel.bikeModelInfos.bikeName }}</td> // proovisime kuvada rattamudeli nime requestist saadud objekti seest.
      <td>test</td>
      <td>test</td>
      <td>test</td>

    </tr>
    </tbody>
  </table>
  </div>
</div>
</template>

<script>
export default {
  name: "Ostukorv",
  data: function () {
    return {
      bookedModel: this.$route.query.chosenModel,
      // bookedModel tuleb for tsükliga läbi lasta et saada kätte valitud mudel?
      bookedAmount: this.$route.query.chosenAmount,

    }
  }
}
</script>

<style scoped>

</style>