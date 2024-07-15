<script setup>
import Treat from '../components/Treat.vue';
import { ref } from 'vue';
  let perClick = ref(0)
  let addPerClick = ref(1)

</script>

<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12">
        <div class="d-flex justify-content-center m-4">
          <h1 class="m-4">Feed me!</h1>
          <img @click="perClick += addPerClick"
            src="https://em-content.zobj.net/source/skype/289/dog_1f415.png" alt="" role="button">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Serotonin-skeletal.png/1280px-Serotonin-skeletal.png" alt="">
            <p class="fs-1">{{ perClick }}</p>


        </div>
      </div>
    </div>
    <Treat/>
  </div>
</template>

<style scoped lang="scss">
  img {
    height: 15vh;
  }

</style>
