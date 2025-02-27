<script setup>
  import Layout from '../components/LayoutPage.vue';
  import { fetch } from '../utils/fetch';
  import { ref, onMounted } from 'vue';
  import { convertToSlug } from '../utils/common';
  import { RouterLink } from 'vue-router';
  import CardArticle from '../components/blog/CardArticle.vue';

  const topArticles = ref([]);
  const subTopArticles = ref([]);
  const articles = ref([]);

  const getArticles = async () => {
    try {
      const { data } = await fetch(
        'https://api-berita-indonesia.vercel.app/tribun/terbaru',
        'GET'
      );

      data.posts.forEach((article, index) => {
        article.slug = convertToSlug(article.title);

        if(index > 3) {
          articles.value.push(article);
        } else {
          topArticles.value.push(article);
        }
      });

      subTopArticles.value = articles.value.slice(1, 4);

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
            <RouterLink :to="`/blog/${topArticles[0]?.slug}`">
              <CardArticle :article="topArticles[0]" :position="'vertical'" :className="'hover-shake'"/>
            </RouterLink>
          </div>
          <div class="sub-top-article">
            <div v-for="(article, index) in subTopArticles" :key="index">
              <RouterLink :to="`/blog/${article.slug}`">
                <CardArticle :article="article" :position="'horizontal'" :className="'sub-top-hover-animate'" />
              </RouterLink>
            </div>
          </div>
        </div>
        <div class="other-article">
          <div v-for="(article, index) in articles" :key="index" class="w-[calc((100%/4)-20px)] mb-5">
            <RouterLink :to="`/blog/${article.slug}`">
              <CardArticle :article="article" :position="'vertical'" :className="'other-article-hover-animate'" />
            </RouterLink>
          </div>
        </div>
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
    border-bottom: 1px solid #999;
    padding-bottom: 24px;
  }

  .top-article {
    display: flex;
    flex-direction: column;
    width: 50%;
    animation: top-article 2s;
  }

  @keyframes top-article {
    from {
      opacity: 0;
      transform: translateY(-30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .top-article:hover h2 {
    color: #0066ff;
  }

  .sub-top-article {
    display: flex;
    flex-direction: column;
    width: 50%;
    gap: 20px;
    animation: sub-article 2s;
  }

  @keyframes sub-article {
    from {
      opacity: 0;
      transform: translateX(50px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  .card-sub-article:hover h3 {
    color: #0066ff;
  }

  .other-article {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
    justify-content: space-between;
    animation: other-article 2s;
  }

  .hover-shake {
    transition: transform 0.3s, box-shadow 0.3s;
  }

  .hover-shake:hover {
    animation: smooth-shake 0.5s;
    box-shadow: 0 5px 10px #ff5dfa;
  }

  @keyframes smooth-shake {
    0%, 100% { transform: translate(0, 0); }
    10%, 30%, 50%, 70%, 90% { transform: translate(-2px, -2px); }
    20%, 40%, 60%, 80% { transform: translate(2px, 2px); }
  }

  .sub-top-hover-animate {
    transition: transform 0.3s, box-shadow 0.3s;
  }

  .sub-top-hover-animate:hover {
    transform: translateY(-10px) scale(1.05);
    box-shadow: 0 5px 10px #ff5dfa;
  }

  .other-article-hover-animate {
    transition: transform 0.3s, box-shadow 0.3s;
  }

  .other-article-hover-animate:hover {
    transform: translateY(-10px);
    box-shadow: 0 5px 10px #ff5dfa;
  }

</style>
