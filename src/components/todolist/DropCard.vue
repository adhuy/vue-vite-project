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
    background: #fab9f4;
    opacity: 0.5;
    border: 2px dashed #de00ff;
    border-radius: 12px;
    margin-bottom: 10px;
    animation: zoom-in-zoom-out 1s ease infinite;
  }

  @keyframes zoom-in-zoom-out {
    0% {
      transform: scale(1, 1);
    }
    50% {
      transform: scale(0.9, 0.9);
    }
    100% {
      transform: scale(1, 1);
    }
  }
</style>
