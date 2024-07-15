<script setup>
import { computed } from 'vue';
import { AppState } from '../AppState.js';
import { treatService } from '../services/TreatService';
const upGrade = computed(() => AppState.upGrades)
</script>


<template>
        <div class="row">
          <div v-for="upGrades in upGrade" :key="upGrades.name" class="col-4">
            <div class="d-flex justify-content-around">
              <button @click="">{{ upGrades.name }} ${{ upGrades.price }}</button>
            </div>
          </div>
        </div>
</template>


<style lang="scss" scoped>

</style>