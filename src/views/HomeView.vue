<script setup>
  import Layout from '../components/LayoutPage.vue'
</script>

<template>
  <Layout>
    <template #body>
      <section class="hero-section">
        <h1>Home</h1>
        <p>Welcome to the Home page</p>
      </section>
    </template>
  </Layout>
</template>

<style>
  .hero-section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    background: white;
    opacity: 0.8;
    padding: 24px;
    border-radius: 12px;
  }
</style>
