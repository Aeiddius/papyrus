<template>
  
  <div class="container">
      <Main :name="user.name" class="menu-box"/>
      <!-- <ProjectList :project-list="Object.keys(data.projects)"/> -->
  </div>

</template>

  
<script lang="ts" setup>

import UserData from "../types/UserData"

  // const user: UserData = {
  //   name: "Adrian",
  //   lastProject: "Chronos",
  //   projects: {
  //     "Chronos": {
  //       "desc": "",
  //       "current": "",
  //       "folders": {
  //         "Chapters": [
  //           "chapter 1"
  //         ],
  //         "Lore": [
  //           "setting"
  //         ]
  //       }
  //     }
  //   }
  // }

  const { data } = await useFetch<UserData>('/api/user') 
  const user = ref(data) as unknown as UserData

  
</script>

<style lang='scss'>
  .menu-box {
    margin-top: 100px;
    margin-right: 70px;

  }


</style>