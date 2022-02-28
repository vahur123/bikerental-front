<template>
  <div class="meist">
    <div class="grid-container">
      <div></div>
      <div>
        <h2 style="color: #3cbfb2">Me oleme Vahur ja Aleksei</h2>
        <h4>ning me rendime Sulle igasuguseid rattaid väga headel tingimustel.</h4>
        <img src="../assets/tallbike.jpg" class="img-fluid" alt="Responsive image">
      </div>
      <div></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Meist"
}
</script>

<style scoped>
.grid-container {
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  grid-template-rows: 1fr;
  gap: 0px 0px;
  grid-template-areas:
    ". . .";
}
</style>