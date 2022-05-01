<template>
  <header>
    <nav>
      <h1>VueCMS</h1>
      <ul>
        <li v-for="page in $store.state.pages" :key="page.name">
          <RouterLink :to="page.slug">{{ page.name }}</RouterLink>
        </li>
      </ul>
    </nav>
  </header>

  <RouterView />
</template>

<script >
import NavBar from "./components/NavBar.vue";
import { mapActions } from "vuex";
export default {
  components: {
    NavBar,
  },
  methods: {
    ...mapActions({ getPages: "getPages" }),
  },
  mounted() {
    return this.getPages().then(() => {
      return this.$store.state.pages.find((page) => page.slug === this.slug);
    });
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Oswald:wght@400;700&display=swap");
body {
  margin: 0;
  box-sizing: border-box;
  font-family: "Oswald", sans-serif;
}

main {
  width: 80%;
  margin: auto;
}
.content {
  color: rgb(97, 98, 98);
}
</style>
