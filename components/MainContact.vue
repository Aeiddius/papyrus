<template>
  <div class="contact">
    <h1>Contact</h1>
    
    <div class="container input-box">
      
        <div class="one">
          <InputLabel label="Subject"/>
        </div>

        <div class="two">
          <Button name="Send" color="send"/>
        </div>

    </div>
    
    <InputLabel label="Message" :textarea="true"/>
  </div>
</template>

<script lang="ts" setup>




</script>



<style lang='scss' scoped>

  .contact {
    @include creon;
    padding: $gb-padding-value  + 5px; 
    background: $green-color;
    background: linear-gradient(125deg, $green-color 35%, $green-linear-color 100%);
    cursor: auto;

    .input-box {
      justify-content: space-between;
      align-items: end;
      gap: 15px;
      .one {
        flex-grow: 2;
      }
      .two {
        flex-grow: 1;
      }
    }

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

</style>