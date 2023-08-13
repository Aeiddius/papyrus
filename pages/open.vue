<template>
  
  <div class="container">
    <div class="open">
      <ProjectList :project-list="Object.keys(user.projects)"/>
    </div>
    <!-- <div class="bg"></div> -->
  </div>
  
</template>

<script lang="ts" setup>
  
  
import UserData from "../types/UserData"

const { data } = await useFetch<UserData>('/api/user') 
const user = ref(data) as unknown as UserData
</script>

<style lang='scss'>
  .open {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 415px;
  }

</style>

