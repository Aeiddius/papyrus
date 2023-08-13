<template>
  
  <div class="project-list">
    
    <!-- <Button id="goback" name="<" color="send" link="/"/> -->

    <h1>Projects</h1>
    <ul id="plist">
      <li v-for="project in projectList">
        <Anchor>{{ project }}</Anchor>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
  const prop = defineProps({
    projectList: {
      type: Array<String>,
      required: true,
      default: ["es"]
    }
  })

 
</script>

<style lang='scss'>
  
  .project-list {

    background-color: red;
  }

</style>