<script setup>
  defineProps({
    type: Object,
    showDropCard: Boolean,
    activeCard: Object,
    onDrop: Function
  });
</script>

<template>
  <div
    v-if="showDropCard && activeCard.status !== type.status"
    class="task-drop-card"
    @dragover.prevent
    @drop="onDrop(type.status, activeCard.position)"
  >
    Drop Here
  </div>
</template>

<style scoped>
  .task-drop-card {
    display: flex;
    flex-direction: column;
    height: 100%;
    gap: 10px;
    padding: 12px;
    background: white;
    opacity: 0.5;
    border: 2px dashed #999;
    border-radius: 12px;
    margin-bottom: 10px;
  }
</style>
