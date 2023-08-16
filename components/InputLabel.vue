<template>
  <div class="input-label">
    <span>{{ label }}</span>

    <textarea v-if="textarea" :class="color"></textarea>
    <input v-else :class="color">

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
  },
  color: {
    type: String,
    default: ""
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

  input,
  textarea {
    border: none;
    width: 100%;
    font-family: Lato Regular;
    font-size: 16px;
    height: 30px;
    border-radius: $gb-border-radius;
    padding: $gb-padding-value;
    margin-top: 10px;

    background-color: transparent;
    border: 2px solid #fff;
    color: $white-color;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  }

  textarea {
    resize: vertical;
    min-height: 100px;


  }


}

.dark {
  color: $dark-color !important;
  // border: 1px solid $blue-color !important;
}
</style>