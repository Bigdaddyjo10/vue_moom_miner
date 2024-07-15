<script setup>

import { ref } from 'vue';
import { computed } from 'vue';
import { AppState } from '../AppState.js';

const upGrade = computed(() => AppState.upGrades)
  let perClick = ref(0)
  let addPerClick = 1
  let money = ref(0)

  function addBtnAmount(btnAmount){
    addPerClick += btnAmount
    console.log(addPerClick);
  }


</script>

<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12">
        <div class="d-flex justify-content-center m-4">
          <h1 class="m-4">Feed me!</h1>
          <img @click="perClick += addPerClick"
            src="https://em-content.zobj.net/source/skype/289/dog_1f415.png" alt="" role="button">
          <p class="fs-1">Tummy meter {{ perClick }}</p>

        </div>
      </div>
    </div>
    <div class="row">
      <div v-for="upGrades in upGrade" :key="upGrades.name" class="col-4">
        <div class="d-flex justify-content-around">
          <button @click="addBtnAmount(upGrades.addAmount)">{{ upGrades.name }} ${{ upGrades.price }}</button>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <div class="d-flex justify-content-center">
            <p class="fs-1">Money {{ money }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  img {
    height: 15vh;
  }

</style>
