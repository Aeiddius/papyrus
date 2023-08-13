<template>
  <template v-if="href">
    <a :href="href" :class="['project-link', color]">
      <slot></slot>
    </a>
  </template>

  <template v-else>
    <NuxtLink :to="to" :class="['project-link', color]">
      <slot></slot>
    </NuxtLink>
  </template>
</template>

<script lang="ts" setup>
type ColorProps = 'white' | 'blue' | 'custom-1'

const props = defineProps({
  to: {
    type: String,
    default: ""
  },
  href: {
    type: String,
  },
  color: {
    type: String as PropType<ColorProps>,
    default: 'white'
  }
})

</script>

<style lang='scss' scoped>
.project-link {
  font-family: Lato Regular;
  cursor: pointer;
  user-select: none;
  padding: 4px;
  border-radius: 7px;
  text-decoration: none;
  transition: 0.3s ease-in-out;

  &:hover {
    text-shadow: none;
  }
}

.white {
  background-color: transparent;
  color: $white-color;

  &:hover {
    color: $blue-color;
    background-color: $white-color;
  }
}

.blue {
  background-color: transparent;
  color: #2a2a2a;
  padding: 6px;
  transition: 0.1s ease-in-out; 
  &:hover {
    outline: 1px solid #2a2a2a;
  }
  &:active {
    transform: scale(0.8);
  }
}

.custom-1 {
  background-color: transparent;
  color: $white-color;

  &:hover {
    color: $dark-color;
    background-color: $white-color;
  }
}
</style>