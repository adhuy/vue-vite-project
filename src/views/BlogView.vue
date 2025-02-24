<script setup>
  import Layout from '../components/LayoutPage.vue';
  import axios from 'axios';
  import { ref, onMounted } from 'vue';

  const articles = ref([]);
  const topArticle = ref([]);

  const getArticles = async () => {
    try {
      const { data } = await axios.get('https://api-berita-indonesia.vercel.app/tribun/terbaru');
      articles.value = data.data.posts;
      topArticle.value =  data.data.posts;
    } catch (error) {
      console.error('Error fetching articles:', error);
    }
  };

  onMounted(() => {
    getArticles();
  });

</script>

<template>
  <Layout>
    <template #body>
      <div class="wrapper">
        <div class="article-header">
          <div class="top-article">
            <img
              src="../assets/no-image.jpg"
              alt="article"
              width="100%"
              height="100%"
              class="rounded-lg"
            />
            <div class="flex flex-col gap-3 mt-3">
              <p class="text-md text-slate-500">{{ new Date(articles[0]?.pubDate).toLocaleDateString('en-GB') || '-' }}</p>
              <h2 class="line-clamp-2">{{ articles[0]?.title }}</h2>
              <p class="text-md line-clamp-3">{{ articles[0]?.description || '-' }}</p>
            </div>
          </div>
          <div class="sub-top-article">
            <div v-for="(article, index) in articles" :key="index">
              <div v-if="index > 0 && index < 4" class="card-sub-article">
                <div class="max-w-[200px]">
                  <img
                    src="../assets/no-image.jpg"
                    alt="article"
                    width="100%"
                    height="100%"
                    class="rounded-lg"
                  />
                </div>
                <div class="flex flex-col w-[calc(100%-200px)] gap-3">
                  <p class="text-sm text-slate-500">{{ new Date(article.pubDate).toLocaleDateString('en-GB') }}</p>
                  <h3 class="line-clamp-2">{{ article.title }}</h3>
                  <p class="text-sm line-clamp-3">{{ article.description }}</p>
                </div>
              </div>
            </div>
          </div>  
        </div>

        <hr />
      </div>
    </template>
  </Layout>
</template>

<style scoped>
  .wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: white;
    padding: 24px;
    border-radius: 12px;
    gap: 40px;
  }

  .article-header {
    display: flex;
    flex-direction: row;
    gap: 30px;
    position: relative;
  }

  .top-article {
    display: flex;
    flex-direction: column;
    width: 50%;
    padding: 12px;
    border: 1px solid #999;
    border-radius: 12px;
    cursor: pointer;
    box-shadow: 2px 4px 4px #999;
  }

  .top-article:hover h2 {
    color: #0066ff;
  }

  .sub-top-article {
    display: flex;
    flex-direction: column;
    width: 50%;
  }

  .card-sub-article {
    display: flex;
    flex-direction: row;
    gap: 20px;
    padding: 12px;
    background: white;
    border: 1px solid #999;
    border-radius: 12px;
    margin-bottom: 30px;
    cursor: pointer;
    box-shadow: 2px 4px 4px #999;
  }

  .card-sub-article:hover h3 {
    color: #0066ff;
  }

  hr {
    border: 1px solid #999;
  }
</style>