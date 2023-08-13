<template>
  <div class="container flex-column full flex-c top">
    <div class="container flex-column write">
      <span class="folder-name">{{ folderName }}</span>
      <span class="note-name">{{ noteName }}</span>
      <textarea class="text-content" placeholder="Write here">{{ text }}</textarea>
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  folderName: { type: String, default: "STORY NAME" },
  noteName: { type: String, default: "Chapter 1" },
  text: { type: String, default: '' }
})

// default: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, " }
</script>

<style lang='scss' scoped>
.top {
  justify-content: flex-start;
}

.write {
  color: $dark-color;
  font-family: Lato;
  width: $gb-width;
  margin-top: 100px;
  gap: 5px;
}

.folder-name {
  font-size: 16px;
}

.note-name {
  font-size: 28px;
}

.text-content {
  font-size: 16px;
  min-height: 50vh;
  border: none;
  outline: none;
  resize: vertical;
  color: $white-color;
  padding: $gb-padding-value;
  border-radius: $gb-border-radius;
  background: $blue-color;
  background: linear-gradient(125deg, $blue-color 35%, $blue-linear-color 100%);
  box-shadow: rgba(60, 64, 67,  0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  
  &::placeholder {
    color: darken($white-color, 15%)
  }
}

textarea {
  backdrop-filter: blur(8px);
}
</style>