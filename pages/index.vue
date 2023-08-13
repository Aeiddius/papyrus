<template>
  
  <div class="container full flex-c flex-c-adjust">
      <Main :name="user.name" class="menu-box"/>
      <!-- <ProjectList :project-list="Object.keys(data.projects)"/> -->
  </div>

</template>

  
<script lang="ts" setup>

import UserData from "../types/UserData"


  const { data } = await useFetch<UserData>('/api/user') 
  const user = ref(data) as unknown as UserData

  console.log(user.name)

</script>

<style lang='scss'>



</style>