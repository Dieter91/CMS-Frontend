<template>
  <main>
    <h1>{{ page.title }}</h1>
    <div class="content" v-html="page.content"></div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      page: [],
    };
  },
  methods: {},
  computed: {
    // getHomepage() {
    //   this.pages.data.find(page => page.isHome === true)
    // }
  },
  created() {
    this.axios
      .get("/src/data/pages.json")
      .then(
        (response) =>
          (this.page = response.data.find((page) => page.isHome === true))
      );
  },
};
</script>
