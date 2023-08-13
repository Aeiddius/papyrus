<template>
  <div class="username">
    Welcome back, <br><span>{{ name }}</span>
  </div>

  <!-- Resume Button -->

    <ResumeButton class="mb-15" />


  <!-- Button Choices -->
  <div class="buttons container">
    <Button name="New" color="blue" link="/new" class="padding-15" />
    <Button name="Open" color="red" link="/open" class="padding-15" />
  </div>
</template>

<script lang="ts" setup>
const prop = defineProps({
  name: {
    type: String,
    required: true
  }
})

</script>

<style lang='scss'>
.buttons {
  justify-content: space-between;
}

.username {
  font-family: Lato;
  margin-bottom: 10px;
  user-select: none;

  span {
    font-size: 48px;
  }
}

.padding-15 {
  padding-top: 15px !important;
}
</style>