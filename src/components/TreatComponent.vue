<script setup>
import { computed } from 'vue';
import { AppState } from '../AppState.js';
import { treatService } from '../services/TreatService';
const treats = computed(() => AppState.treats)
const money = computed(() => AppState.money)

function purchaseTreat(treat){
    treatService.purchaseTreat(treat)
}
</script>


<template>
        <div class="row">
          <div v-for="treat in treats" :key="treat.name" class="col-4">
            <div class="d-flex justify-content-around">
              <button v-if="money < treat.price" @click="purchaseTreat(treat)">{{ treat.name }} ${{ treat.price }}</button>
            </div>
          </div>
        </div>
</template>


<style lang="scss" scoped>

</style>
