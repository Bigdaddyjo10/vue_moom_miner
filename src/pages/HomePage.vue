<script setup>
import { AppState } from '../AppState.js';
import Treat from '../components/TreatComponent.vue';
import { ref, computed } from 'vue';

const money = computed(() => AppState.money)


</script>

<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12">
        <div class="d-flex justify-content-center m-4">
          <h1 class="m-4">Feed me!</h1>
          <img @click="money++, console.log(money)"
            src="https://em-content.zobj.net/source/skype/289/dog_1f415.png" alt="" role="button">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Serotonin-skeletal.png/1280px-Serotonin-skeletal.png" alt="">
            <p class="fs-1">{{ money }}</p>


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
