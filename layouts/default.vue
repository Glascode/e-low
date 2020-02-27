<template>
  <div class="root flex">
    <div class="aside flex-shrink-0 flex flex-col items-center pt-8 w-56 z-20">
      <img class="w-32 mb-8" src="/images/logo.png">

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
          <nuxt-link class="nav-link" to="/shop">
            <IconShop class="mr-5" />
            Boutique</nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link class="nav-link" to="/toolbox">
            <IconToolbox class="mr-5" />
            Boîte à outils</nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link class="nav-link" to="/setting">
            <IconSettings class="mr-5" />
            Paramètres</nuxt-link>
        </li>
      </ul>
    </div>

    <main class="bg-primary-extra-light overflow-auto z-10">
      <Nuxt class="py-8 px-4" />
    </main>
  </div>
</template>

<script>
  import IconDashboard from '../components/icons/IconDashboard'
  import IconShop from '../components/icons/Iconshop'
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

