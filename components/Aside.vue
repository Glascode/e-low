<template>
  <div class="aside flex-shrink-0 flex flex-col items-center pt-8 w-56 z-20 dark:text-white dark:bg-dark-fg">
    <nuxt-link to="/">
      <img class="logo w-32 mb-8 dark:invert" src="/images/logo.png">
    </nuxt-link>

    <img class="flex-shrink-0 w-32 h-32 border-3 border-primary rounded-full mb-6"
         src="/images/avatar.png">

    <div class="mb-4 font-semibold">Utilisateur N°19290</div>
    <div class="mb-12 text-xs">Mes points : <strong>72</strong> 💵</div>

    <ul class="nav self-stretch text-xs">
      <li class="nav-item">
        <nuxt-link class="nav-link" to="/dashboard">
          <IconDashboard class="mr-5" />
          Dashboard</nuxt-link>
      </li>
      <li class="nav-item">
        <nuxt-link class="nav-link" to="/offers">
          <IconShop class="mr-5" />
          Mes offres</nuxt-link>
      </li>
      <li class="nav-item">
        <nuxt-link class="nav-link" to="/toolbox">
          <IconToolbox class="mr-5" />
          Boîte à outils</nuxt-link>
      </li>
      <li class="nav-item">
        <button @click="$emit('toggle:dark')"
                class="nav-link">
          <IconSettings class="mr-5" />
          Paramètres
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
  import IconDashboard from '../components/icons/IconDashboard'
  import IconShop from '../components/icons/IconShop'
  import IconToolbox from '../components/icons/IconToolbox'
  import IconSettings from '../components/icons/IconSettings'

  export default {
    components: {
      IconDashboard,
      IconShop,
      IconToolbox,
      IconSettings
    }
  }
</script>
