<template>
  <div class="about">
    <h1>About</h1>
    <p>Papyrus is a Sleek Note/Novel Writing editor I made just for fun. Its main feature is the sleek design. Highly
      emphasized on that since I couldn’t write a story without the UI distracting me if I don’t like the design. Lol.</p>
    <p class="others">
      
      <nuxt-img class="logo" src="/github.png"/>
      <Anchor color="custom-1" href="https://github.com/Aeiddius" target="_blank">Aeiddius</Anchor>
    </p>
  </div>
</template>

<script lang="ts" setup>


</script>



<style lang='scss' scoped>

  .about {
    @include creon;
    padding: $gb-padding-value  + 5px;
    background: $red-color;
    background: linear-gradient(125deg, $red-color 35%, $red-linear-color 100%);

                       
    cursor: auto;
    h1 {
      text-align: center;
      margin-bottom: 10px;
    }
    p {
      font-family: Lato Light;
      font-size: 16px;
      line-height: 20px;
      text-align: justify;
    }


  }

  .others {
    margin-top: 10px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    .logo {
      width: auto;
      height: 42px;
      margin-right: 5px;
    }
  }

</style>