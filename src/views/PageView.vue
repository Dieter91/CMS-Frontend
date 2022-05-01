<template>
  <main v-if="page">
    <h1>{{ page.title }}</h1>
    <div class="content" v-html="page.content"></div>
  </main>
  <main v-else>
    <h1>404: Page not found</h1>
  </main>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {
    slug() {
      return this.$route.params.slug;
    },
    page() {
      return this.$store.state.pages.find((page) => page.slug === this.slug);
    },
  },
};
</script>

<style>
</style>