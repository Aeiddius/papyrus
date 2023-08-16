<template>
  <div id="imgbox" class="image-box">
  <img id="preview">
  </div>
  <input class="input-upload" type="file" accept="image/*" @input="event => showPreview(event)">

</template>

<script lang="ts" setup>

const displayImage = ref(false)

const showPreview = (event: any) => {

  if (event.target.files!.length > 0) {
    displayImage.value = true;

    var src = URL.createObjectURL(event.target.files![0]);
    var preview = <HTMLImageElement>document.getElementById("preview");
    preview.src = src;
  }
}

  
</script>

<style lang='scss' scoped>
  
.image-box {
  width: 100%;
  height: 150px;
  background-color: grey;
  margin-bottom: 5px;
  border-radius: $gb-border-radius;
  background: $dark-color;
  background: linear-gradient(125deg, $dark-color 35%, $dark-linear-color 100%);
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;

  .preview-text {
    color: $white-color;
    font-family: Lato Bold;
  }

  #preview {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: $gb-border-radius;
    border: none;


  }
}




input[type="file"]::file-selector-button {
  margin-right: 20px;
  border: none;
  display: inline-block;
  // background: $white-color;
  padding: 10px 20px 10px 20px;
  border-radius: 7px;
  color: $dark-color;
  cursor: pointer;
  transition: 0.4s linear;
  // border: 1px solid $dark-color;
  font-family: Lato Bold;
  text-shadow: 2px 2px #0000002d;

  border: none;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  color: $white-color;
  background: $blue-color;
  background: linear-gradient(125deg, $blue-color 35%, $blue-linear-color 100%);
  &:hover {
    color: $white-color;
    background: $blue-color;
    background: linear-gradient(125deg, $blue-color 35%, $blue-linear-color 100%);
  }
}

input[type="file"]::file-selector-button {
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;

}

</style>