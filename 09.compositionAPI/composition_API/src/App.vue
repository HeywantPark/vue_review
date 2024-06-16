<template>
  <div>
    <h1>vue3 counter</h1>
    <p>count : {{ count }}</p>
    <p>double : {{ double }}</p>
    <p>지금까지 계산된 횟수 : {{ clickCount }}</p>
    <button @click="incrememt">incrememt</button>
    <button @click="decrememt">decrememt</button>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const count = ref(0);
const double = computed(() => count.value * 2);
const clickCount = ref(0);

function incrememt() {
  count.value++;
  clickCount.value++;
}
function decrememt() {
  count.value--;
  clickCount.value++;
}
</script>

<style lang="scss" scoped></style>
