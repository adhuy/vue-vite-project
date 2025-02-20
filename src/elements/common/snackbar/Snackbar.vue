<script setup>
  defineProps({
    param: Object
  });
</script>

<template>
  <div class="snackbar" :style="{ background: param?.color }">
    {{param?.message}}
  </div>
</template>

<style scoped>
  .snackbar {
    display: flex;
    flex-direction: column;
    min-width: 100px;
    padding: 12px;
    border: 1px solid #999;
    border-radius: 12px;
    box-shadow: 0 3px #999;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
  }
</style>