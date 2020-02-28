<template>
  <Card class="self-center p-12 bg-white mx-auto">
    <img class="block mx-auto mb-8 w-40"
         src="/images/logo.png">

    <h2 class="heading mb-8">Avec e-low, reprenez en main votre conso</h2>

    <div class="flex items-center justify-between">
      <nuxt-link class="btn w-32" to="/dashboard">B2B</nuxt-link>
      <nuxt-link class="btn w-32" to="/b2c/dashboard">B2C</nuxt-link>
      <nuxt-link class="btn w-32" to="/">Admin</nuxt-link>
    </div>
  </Card>
</template>

<script>
  import Card from '../components/Card'

  export default {
    layout: 'bare',

    components: {
      Card
    }
  }
</script>
