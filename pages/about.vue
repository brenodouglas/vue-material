
<template>
  <div>
    <p class="about">Hi from {{ name }}</p>
    <nuxt-link to="/">Home page</nuxt-link>
  </div>
</template>

<script>
export default {
  layout: 'default',
  data ({ req }) {
    return {
      name: req ? 'server' : 'client2'
    }
  },
  head: {
    title: 'About page 👾',
    meta: [
      { hid: 'description', name: 'description', content: 'Home page description' }
    ]
  }
}
</script>

<style scoped>
.about {
  color: #f0f;
  font-size: 20px;
}
</style>
