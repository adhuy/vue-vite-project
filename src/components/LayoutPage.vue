<script setup>
</script>

<template>
  <header v-if="$slots.header">
    <slot name="header">Slot Header</slot>
  </header>
  <section v-if="$slots.body" class="body-layout">
    <slot name="body">
      <p>Slot Body</p>
    </slot>
  </section>
</template>

<style scoped>
  .body-layout {
    margin-top: 100px;
  }
</style>