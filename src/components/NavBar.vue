<template>
  <nav>
    <h1>VueCMS</h1>
    <ul>
      <li v-for="page in $store.state.pages" :key="page.name">
        <RouterLink :to="page.slug">{{ page.name }}</RouterLink>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  data() {
    return {};
  },
  created() {
    console.log(this.$store.state.pages);
  },
};
</script>

<style>
nav {
  background: rgb(69, 14, 127);
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  height: 4rem;
}
nav h1 {
  color: white;
  width: 40%;
}
nav ul {
  display: flex;
  flex-direction: row;
  width: 40%;
  justify-content: space-between;
  list-style: none;
}
nav a {
  color: white;
  text-decoration: none;
  font-weight: bold;
}
</style>