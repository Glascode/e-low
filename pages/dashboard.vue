<template>
  <div class="flex flex-wrap -mx-4">
    <div class="w-full xl:w-3/5 px-4">
      <Card class="mb-8 bg-primary-light">
        <h2 class="heading mb-4">Bienvenue Margot !</h2>
        <p>Félicitations ! Vous avez réduit votre consommation de
          <span class="font-semibold">72.3 Mo</span> cette semaine ! Vous avez donc gagné 7.2 💵</p>
      </Card>

      <CardChart class="bg-white mb-8" />

      <Card class="bg-white mb-8 xl:mb-0">
        <h2 class="heading mb-4">Quelques chiffres</h2>
        <div class="flex justify-between -mx-2">
          <div class="w-full md:w-1/3 flex flex-col items-center px-2">
            <div class="mb-2 py-4 px-6 text-center bg-primary-light rounded-lg dark:bg-dark-bg">
              <h3 class="heading">573</h3>
              <div class="text-primary">e-mails envoyés</div>
            </div>
            <div class="mb-3">depuis le 01/01/2020</div>
            <p>Ce qui équivaut à une consommation de
              <span class="font-semibold">1 aller-retour en avion Paris-Berlin !</span></p>
          </div>

          <div class="w-full md:w-1/3 flex flex-col items-center px-2">
            <div class="mb-2 py-4 px-6 text-center bg-primary-light rounded-lg dark:bg-dark-bg">
              <h3 class="heading">1024</h3>
              <div class="text-primary">messages instantanés</div>
            </div>
            <div class="mb-3">depuis le 01/01/2020</div>
            <p>Ce qui équivaut à une consommation de <span class="font-semibold">30 douches par jour</span></p>
          </div>

          <div class="w-full md:w-1/3 flex flex-col items-center px-2">
            <div class="mb-2 py-4 px-6 text-center bg-primary-light rounded-lg dark:bg-dark-bg">
              <h3 class="heading">90&nbsp;h</h3>
              <div class="text-primary">d'écran de veille</div>
            </div>
            <div class="mb-3">depuis le 01/01/2020</div>
            <p>Ce qui équivaut à une consommation de
              <span class="font-semibold">20 trajets en voiture Paris-Bruxelles</span></p>
          </div>
        </div>
      </Card>
    </div>
    <div class="w-full xl:w-2/5 px-4">
      <CardDetails />

      <Card class="mb-8 bg-primary-light">
        <h2 class="heading mb-4">Vous y êtes presque !</h2>
        <p class="mb-4">Économisez encore 279.5mo afin de devenir 4ème meilleur réducteur de pollution numérique chez CDiscount !</p>
        <p>Allez, encore un effort ! 🚀</p>
      </Card>

      <Card class="bg-white">
        <h2 class="heading mb-4">Statistiques d'entreprise</h2>

        <div class="flex items-start mb-4">
          <div class="flex-shrink-0 mr-4 p-2 text-primary bg-primary-light rounded-lg dark:bg-dark-bg">
            <h2 class="heading">1011 Go</h2>
          </div>
          <p class="font-medium">C’est l’économie totale réalisée par l’entreprise,
            <span class="text-primary">17.2&nbsp;%</span> de mieux qu’en 2019</p>
        </div>

        <div class="flex items-start mb-6">
          <div class="flex-shrink-0 mr-4 p-2 text-primary bg-primary-light rounded-lg dark:bg-dark-bg">
            <h2 class="heading">19,3 Go</h2>
          </div>
          <p class="font-medium">C’est l’économie réalisée en moyenne par personne,
            <span class="text-primary">8.9&nbsp;%</span> de mieux qu’en 2019</p>
        </div>

        <p class="font-medium text-center">Ensemble, réduisons la pollution numérique 🌎</p>
      </Card>
    </div>
  </div>
</template>

<script>
  import Card from '../components/Card'
  import CardChart from '../components/CardChart'
  import CardDetails from '../components/CardDetails'

  export default {
    components: {
      Card,
      CardChart,
      CardDetails
    }
  }
</script>
