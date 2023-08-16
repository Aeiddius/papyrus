<template>
  <div class="sidebar">
    <h1 class="title">{{ title }}</h1>
    <ul>
      <li v-for="project in projects">
        <button class="button">{{ project }}</button>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
  const projects = [
    'Chapter 1',
    'Chapter 2',
    'Chapter 3'
  ]

  const title = "Chrono"
</script>

<style lang='scss' scoped>
.sidebar {
  position: fixed;
  top: 0px;
  left: 0px;
  height: 100vh;
  width: 200px;

  padding: $gb-padding-value;
  border-top-right-radius: $gb-border-radius;
  border-bottom-right-radius: $gb-border-radius;
  font-family: Lato;
  line-height: 20px;
  color: $white-color;
  background: $blue-color;
  background: linear-gradient(125deg, $blue-color 35%, $blue-linear-color 100%);
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
}

.button {
  background-color: transparent;
  font-family: Lato;
  border: none;
  padding: 3px;
  color: $white-color;
  font-size: 16px;
  margin-bottom: 3px;
  user-select: none;
  cursor: pointer;
  transition: 0.4s ease;
  border-radius: 4px;
  text-shadow: 2px 2px #0000002d;

  &:hover {
    background-color: $white-color;
    color: $dark-color;
    text-shadow: none;
  }

  &:active {
    transform: scale(0.7);
  }
}

.title {
  font-size: 24px;
  font-family: Lato Bold;
  margin-bottom: 10px;
  text-shadow: 2px 2px #0000002d;

}
</style>