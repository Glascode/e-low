<template>
  <div :class="{'dark': dark}"
       class="root flex">
    <Aside @toggle:dark="toggleDark"/>

    <main class="bg-primary-extra-light overflow-auto z-10 dark:text-white dark:bg-dark-bg">
      <Nuxt class="p-8" />
    </main>
  </div>
</template>

<script>
  import Aside from '../components/Aside'

  export default {
    components: {
      Aside
    },

    data() {
      return {
        dark: false
      }
    },

    mounted() {
      if (localStorage.dark) {
        this.dark = true
      }
    },

    methods: {
      toggleDark() {
        this.dark = !this.dark

        if (this.dark) {
          localStorage.dark = true
        } else {
          localStorage.removeItem('dark')
        }
      }
    }
  }
</script>

