<script setup>
  import { computed, defineProps } from 'vue';

  const props = defineProps({
    article: Object,
    position: {
      type: String,
      default: 'vertical'
    },
    className: {
      type: String,
      default: ''
    }
  });

  const flexDirection = computed(() => props.position === 'horizontal' ? 'flex-row' : 'flex-col');
  const imageWidth = computed(() => props.position === 'horizontal' ? 'max-w-[200px]' : 'w-full');
</script>

<template>
  <div :class="['card-article', flexDirection, className]" v-if="article">
    <div :class="imageWidth">
      <img
        src="../../assets/no-image.jpg"
        alt="article"
        width="auto"
        height="auto"
        class="rounded-lg"
      />
    </div>
    <div class="card-content">
      <p class="text-sm text-slate-500">{{ new Date(article?.pubDate).toLocaleDateString('en-GB') }}</p>
      <h3 class="line-clamp-2">{{ article?.title }}</h3>
      <p class="text-sm line-clamp-3">{{ article?.description }}</p>
    </div>
  </div>
</template>

<style scoped>
  .card-article {
    display: flex;
    width: 100%;
    gap: 20px;
    border: 1px solid #999;
    border-radius: 12px;
    padding: 12px;
    box-shadow: 2px 4px 4px #999;
    cursor: pointer;
  }

  .card-article:hover h3 {
    color: #0066ff;
  }

  .card-content {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

</style>
