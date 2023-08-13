<template>
  <div class="menu">

    <Header @goto="changePage"/>

    <div v-if="page == 'home'">
      <MainHome :name="name"/>
    </div>

    <div v-else-if="page == 'about'">
      <MainAbout/>
    </div>

    <div v-else>
      <MainContact/>
    </div>

  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  name: {
    type: String,
    required: true,
  }
})

const page = ref("home")

const changePage = (newpage: string) => {
  page.value = newpage;
}


</script> 

<style lang='scss'>
.menu {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 415px;
}
</style>