<template>
  <div class="flex">
    <div class="aside flex-shrink-0 flex flex-col items-center pt-12">
      
        <div class="flex justify-center mb-10"> <img src="/images/logo.png" alt=""></div>
        <div class="flex-shrink-0 w-32 h-32 border-3 border-primary rounded-full mb-6"><img src="" alt=""></div>
        <div class="mb-6 font-semibold">Utilisateur N°19290</div>
        <div class="text-xs">Mes points : <strong>72</strong> 💵</div>

        <ul class="self-stretch text-xs">
          <li class="mt-12"><nuxt-link class="flex items-center py-2 px-12" to="/dashboard"><IconDashboard class="mr-5"/>Dashboard</nuxt-link></li>
          <li class="mt-12"><nuxt-link class="flex items-center py-2 px-12" to="/shop"><IconShop class="mr-5"/>Boutique</nuxt-link></li>
          <li class="mt-12"><nuxt-link class="flex items-center py-2 px-12" to="/toolbox"><IconToolbox class="mr-5"/>Boîte à outils</nuxt-link></li>
          <li class="mt-12"><nuxt-link class="flex items-center py-2 px-12" to="/setting"><IconSettings class="mr-5"/>Paramètres</nuxt-link></li>
        </ul>      
  
    </div>
    <main>
      <Nuxt />
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
      },
    }
</script>

