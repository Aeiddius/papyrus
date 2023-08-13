<template>
  <div class="input-label">
    <span>{{ label }}</span>

    <textarea v-if="textarea"></textarea>
    <input v-else>
    
  </div>
</template>

<script lang="ts" setup>
  const props = defineProps({
    label: {
      type: String,
      required: true
    },
    textarea: {
      type: Boolean,
      required: false
    }
  })
  
</script>

<style lang='scss' scoped>
  .input-label {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

    span {
      font-family: Lato Regular;
      font-size: 16px;
    }

    input, textarea {
      border: none;
      width: 100%;
      font-family: Lato Regular;
      font-size: 16px;
      height: 30px;
      border-radius: $gb-border-radius;
      padding: $gb-padding-value;
      margin-top: 10px;

      background-color: transparent;
      border: 1px solid #fff;
      color: $white-color;
      
      // &:focus {
      //   // outline: none;
      // }
    }

    textarea {
      resize: vertical;
      min-height: 100px;
    }
  }
</style>