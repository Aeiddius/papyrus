
<template>

  <template v-if="link == ''">
    <button :class="['menu-style', 'button-decorated', color]">
      {{ name }}
    </button>
  </template>

  <template v-else>
    <NuxtLink :class="['menu-style', 'button-decorated', color, link ? 'nuxtlink' : '' ]" :to="link">
      {{ name }}
    </NuxtLink>
  </template>
</template>

<script lang="ts" setup>
  type ColorProp = 'blue' | 'red' | 'send';

  const props = defineProps({
    name: String,
    color: {
      type: String as PropType<ColorProp>,
      required: true
    },
    link: {
      type: String,
      default: ""
    }
  })  
  
</script>

<style lang='scss' scoped>

  .button-decorated {
    // Custom
    width: 200px;
    height: 50px;
    text-align: start;
    vertical-align: middle;
    padding: 0px 0px 0px $gb-padding-value;
    text-decoration: none;
  }
  
  .blue {
    background: $blue-color;
    background: linear-gradient(125deg, $blue-color 35%, $blue-linear-color 100%);
  }

  .red {
    background: $red-color;
    background: linear-gradient(125deg, $red-color 35%, $red-linear-color 100%);
  }

  // .nuxtlink {
  //   // padding-top: 15px;
  // }

  .send {
    width: 100%;
    height: 37px;
    
    font-size: 14px !important;
    color: unset;
    color: $dark-color !important;
    text-shadow: none !important;
    background: $white-color;
    background: linear-gradient(125deg, $white-color 35%, $white-linear-color 100%);
  }

</style>