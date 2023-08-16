<template>
  <div class="layout lc">
    <div class="open l-adjust">
      <h1>Open</h1>

      <ImageDisplay />

      <ProjectList />

      <div class="container buttons">
        <Button name="Open" color="red" />
        <Button name="Return" color="blue" link="/" class="padding-15" />
      </div>
    </div>

  </div>
</template>



<script lang="ts" setup>

useHead({
  title: 'Open',
})

</script>

<style lang='scss' scoped>
.open-container {
  display: grid;
  place-items: center;
  height: 100vh;
  width: 100%;
  gap: 20px;
}

.open {
  height: 100%;
  width: $gb-width;
  font-family: Lato;
  user-select: none;
  display: flex;
  flex-direction: column;
  gap: 10px;

  h1 {
    font-size: 48px;
    margin-bottom: 5px;
  }
}

.buttons {
  justify-content: space-between;
}
</style>


