<template>
  <Card class="bg-white">
    <img class="block mx-auto w-32"
         src="/images/logo.png">

    <h2 class="heading">Avec e-low, reprenez en main votre conso</h2>

    <div class="flex items-center justify-between">
      <button><a href="#" class="link">B2B</a></button>
      <button><a href="#" class="link">B2C</a></button>
      <button><a href="#" class="link">ADMIN</a></button>
    </div>
  </Card>
</template>

<script>
  import Card from '../components/Card'

  export default {
    components: {
      Card
    }
  }
</script>
