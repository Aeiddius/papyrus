
<template>
  <div class="container menu-style resume" @click="router.push('/write')">
    <h1 class="folder">{{ folderName }}</h1>
    <span class="note">{{ noteName }}</span>
    <span class="text">{{ text }}</span>
    <span class="button-text">Resume</span>
  </div>
</template>

<script lang="ts" setup>
  const props = defineProps({
    folderName: { type: String,  default: "STORY NAME" },
    noteName: { type: String, default: "Chapter 1" },
    text: { type: String,  default: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, " }
  })  

  const router = useRouter()
  
</script>

<style lang='scss' scoped>

  $texts-size: 16px;

  .resume {
    // Layout
    flex-direction: column;
    justify-content: flex-start;

    // Custom
    background: $dark-color;
    background: linear-gradient(125deg, $dark-color 35%, $dark-linear-color 100%);
    color: #fff;
    width: 100%;
    height: fit-content;
    text-align: start;
    padding: $gb-padding-value + 5px;

    .folder {
      font-size: $texts-size;
      font-family: Lato Black;
      color: #ffffffc2;
    }

    .note {
      font-size: 28px;
      font-family: Lato Black;
      margin: 7px 0px 7px 0px
    }

    .text {
      font-size: $texts-size;
      font-family: Lato Light;
      line-height: 20px;
    }

    .button-text {
      text-align: end;
    }
  }
  
</style>