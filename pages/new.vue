<template>
  <div class="new-container full">
    <div>
      <div class="new flex-c-adjust">

        <h1>New</h1>
        <ImageInput />

        <InputLabel label="Title" color="dark" />
        <InputLabel label="Description" :textarea="true" color="dark" />

        <div class="container buttons">
          <Button name="Create" color="blue" />
          <Button name="Return" color="red" link="/" class="padding-15" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
useHead({
  title: 'New',
})

</script>

<style lang='scss' scoped>
.new-container {
  display: grid;
  place-items: center;
  height: 100vh;
  width: 100%;
  gap: 20px;
}


.new {
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
