<template>
  <div class="header">
    <h1>Papyrus</h1>
    <div class="nav">
      <Anchor color="blue" @click="$emit('goto', 'home')">Home</Anchor>
      <Anchor color="blue" @click="$emit('goto', 'about')">About</Anchor>
      <Anchor color="blue" @click="$emit('goto', 'contact')">Contact</Anchor>
    </div>
  </div>
</template>

<script lang="ts" setup>
  
  
</script>

<style lang='scss' scoped>
  $gap: 20px;

  .header {
    text-align: center;
    border-bottom: 1px #20202080 solid;
    font-family: Lato Light;
    
    padding-bottom: $gap;
    margin-bottom: $gap;
    
    user-select: none;

    h1 {
      font-size: 32px;
      margin-bottom: 20px;
    }

    .nav {
      display: flex;
      gap: 20px;
      justify-content: center;
    }
    
  }
</style>