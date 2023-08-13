<template>
  <ul class="folder-list">
    <li v-for="project in Object.keys(user.projects)">
      <Anchor color="blue">{{ project }}</Anchor>
    </li>
  </ul>
</template>

<script lang="ts" setup>
import UserData from "../types/UserData"


const { data } = await useFetch<UserData>('/api/user')
const user = ref(data) as unknown as UserData


</script>


<style lang='scss' scoped>
.folder-list {
  width: 100%;
  border: none;
  min-height: 250px;
  padding: $gb-padding-value;
  border-radius: $gb-border-radius;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;

}
</style>