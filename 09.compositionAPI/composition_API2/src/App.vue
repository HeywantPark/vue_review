<template>
  <div>
    <defineProps :msg="msg" />
  </div>
</template>

<script setup>
import defineProps from './components/defineProps.vue';
import { ref } from 'vue';

const msg = ref('props에게 전할 메세지');
</script>
