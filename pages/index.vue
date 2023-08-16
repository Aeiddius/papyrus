<template>
  <div class="layout">
    <div class="menu l-adjust">

      <Header @goto="changePage" />

      <div v-if="page == 'home'">
        <MainHome :name="user.name" />
      </div>

      <div v-else-if="page == 'about'">
        <MainAbout />
      </div>

      <div v-else>
        <MainContact />
      </div>

    </div>
  </div>
</template>

  
<script lang="ts" setup>

import UserData from "../types/UserData"

const page = ref<String>("home")

const changePage = (newpage: string) => {
  page.value = newpage;
}

const { data } = await useFetch<UserData>('/api/user')
const user = ref(data) as unknown as UserData

console.log(user.name)

</script>

<style lang='scss'>
.menu {
  width: $gb-width;
}
</style>