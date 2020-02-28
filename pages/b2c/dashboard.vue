<template>
  <div class="flex flex-wrap -mx-4 p-8">
    <div class="w-full xl:w-3/5 px-4">
      <Card class="flex items-center mb-8 bg-primary-light">
        <div class="flex-grow pb-2">
          <h2 class="heading mb-4">Bienvenue Margot !</h2>
          <p>Félicitations ! Vous avez réduit votre consommation de
            <span class="font-semibold">72.3 Mo</span> cette semaine ! Vous avez donc gagné 7.2 💵</p>
        </div>
        <div class="-my-8">
          <img class="w-64" src="/images/welcome_dashboard_woman.png" />
        </div>
      </Card>

      <CardChart class="bg-white mb-8" />

      <Card class="bg-white mb-8 lg:mb-0">
        <h2 class="heading mb-4">Mes offres</h2>
        <Card class="flex flex-wrap items-center p-4 bg-white mb-8 dark:bg-dark-bg">
          <div class="w-full lg:w-1/3">
            <img class="w-40 mx-auto dark:invert" src="/images/logo_backmarket.png" />
          </div>
          <p class="w-full lg:w-1/3 flex items-center justify-center">
            <span class="text-lg font-semibold mr-2">5€</span> (500 points) </p>
          <div class="w-full lg:w-1/3">
            <button class="block mx-auto lg:w-full bg-primary hover:bg-primary-dark text-white text-base font-bold py-2 px-4 rounded-xl">J’en profite&nbsp;!
            </button>
          </div>
        </Card>

        <Card class="flex flex-wrap items-center p-4 bg-white dark:bg-dark-bg">
          <div class="w-full lg:w-1/3">
            <img class="w-40 mx-auto dark:invert" src="/images/logo_sloweare.png" />
          </div>
          <p class="w-full lg:w-1/3 flex items-center justify-center">
            <span class="text-lg font-semibold mr-2">5€</span> (500 points) </p>
          <div class="w-full lg:w-1/3">
            <button class="block mx-auto lg:w-full bg-primary hover:bg-primary-dark text-white text-base font-bold py-2 px-4 rounded-xl">J’en profite&nbsp;!
            </button>
          </div>
        </Card>
      </Card>
    </div>

    <div class="w-full xl:w-2/5 px-4">
      <CardDetails />

      <Card class="px-4 bg-primary-light">
        <h2 class="heading mb-4 pl-6">Les stats du jour</h2>
        <div class="flex">
          <div class="flex flex-col flex-grow">
            <div class="flex items-center mt-6">
              <img class="" src="/images/feuilleVert.svg" />
              <p class="max-w-lg ml-2">Passer de
                <span class="font-bold mr-2">2 à 4 ans d’usage</span> pour une tablette ou un ordinateur améliore de
                <span class="font-bold mr-2">50% son bilan environnemental.</span></p>
            </div>
            <div class="flex items-center mt-6">
              <img class="" src="/images/feuilleRouge.svg" />
              <p class="max-w-lg ml-2">
                <span class="font-bold mr-2">15 000 km</span> c'est la distance moyenne parcourue par une donnée numérique (mail, téléchargement, vidéo, requête web…)
              </p>
            </div>
            <div class="flex items-center mt-6">
              <img class="" src="/images/feuilleOrange.svg" />
              <p class="max-w-lg ml-2">
                <span class="font-bold mr-2">89% des français utilisent Internet dont 80 % tous les jours,</span> en moyenne 18h par semaine
              </p>
            </div>
            <div class="flex items-center mt-6">
              <img class="" src="/images/feuilleRouge.svg" />
              <p class="max-w-lg ml-2">
                <span class="font-bold mr-2">Un envoi de mail provoque une émission de CO2 entre 4g et 50g.</span> 60% des mails restent non lus.
              </p>
            </div>
            <div class="flex items-center mt-6">
              <img class="" src="/images/feuilleVert.svg" />
              <p class="max-w-lg ml-2">Il faut 10g de CO2 pour un an de stockage en moyenne pour un mail.</p>
            </div>
          </div>

        </div>
      </Card>
    </div>
  </div>
</template>

<script>
  import Card from '../../components/Card'
  import CardChart from '../../components/CardChart'
  import CardDetails from '../../components/CardDetails'

  export default {
    components: {
      Card,
      CardChart,
      CardDetails
    }
  }
</script>
