<script setup lang="ts">
import { RouterView } from 'vue-router'
import navbar from './components/navbar.vue';

</script>

<template>
  <body>
    <header>
      <navbar />
    </header>
    <main>
      <RouterView />
    </main>
  </body>
</template>

<style lang="scss" scoped>
body {

  // border: 2px solid red;
  // padding: 0 2rem 0 2rem;
  main {
    padding-top: 1rem;
    padding-inline: 10%;
    padding-bottom: 3rem;
  }
}
</style>
