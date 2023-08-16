<template>
  <Sidebar/>
  <div class="">
    <div class="layout lc write">

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
  width: 50vw;
  gap: 10px;
  margin-left: 250px;
  margin-top: -100px;
  .folder-name {
    font-size: 16px;
  }

  .note-name {
    font-size: 28px;
  }
}



.text-content {
  font-size: 16px;
  min-height: 50vh;
  border: none;
  outline: none;
  resize: vertical;
  color: $dark-color;
  // border: 1px solid $blue-color;
  &::placeholder {
    color: darken($white-color, 15%)
  }
}
</style>