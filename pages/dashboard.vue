<template>
  <div class="flex flex-wrap -mx-4">
    <div class="w-full md:w-3/5 px-4">
      <Card class="mb-8 bg-primary-light">
        <h2 class="heading mb-2">Bienvenue Margot !</h2>
        <p>Félicitations ! Vous avez réduit votre consommation de 72.3 Mo cette semaine ! Vous avez donc gagné 7.2 💵</p>
      </Card>

      <Card class="bg-white">
        <h2 class="heading mb-4">Quelques chiffres</h2>
        <div class="flex justify-between -mx-2">
          <div class="w-full md:w-1/3 flex flex-col items-center px-2">
            <div class="mb-2 py-4 px-8 text-center bg-primary-light rounded-lg">
              <h3 class="heading">573</h3>
              <div class="text-primary">e-mails envoyés</div>
            </div>
            <div class="mb-3">depuis le 01/01/2020</div>
            <p>Ce qui équivaut à une consommation de 15 allers-retours Paris-New York !</p>
          </div>

          <div class="w-full md:w-1/3 flex flex-col items-center px-2">
            <div class="mb-2 py-4 px-8 text-center bg-primary-light rounded-lg">
              <h3 class="heading">573</h3>
              <div class="text-primary">e-mails envoyés</div>
            </div>
            <div class="mb-3">depuis le 01/01/2020</div>
            <p>Ce qui équivaut à une consommation de 15 allers-retours Paris-New York !</p>
          </div>

          <div class="w-full md:w-1/3 flex flex-col items-center px-2">
            <div class="mb-2 py-4 px-8 text-center bg-primary-light rounded-lg">
              <h3 class="heading">573</h3>
              <div class="text-primary">e-mails envoyés</div>
            </div>
            <div class="mb-3">depuis le 01/01/2020</div>
            <p>Ce qui équivaut à une consommation de 15 allers-retours Paris-New York !</p>
          </div>
        </div>
      </Card>
    </div>
    <div class="w-full md:w-2/5 px-4">
      <Card class="mb-8 py-8 px-12 bg-white">
        <h2 class="heading mb-2">Détails conso.</h2>

        <div class="font-bold">
          <div class="flex items-center">
            <div class="progress-bar w-1/2">
              <div class="progress bg-primary" style="width: 3.1%;"></div>
            </div>
            <div class="w-1/2 ml-2">Youtube – 819Mo <span>/ 5.24 Go</span></div>
          </div>
        </div>
      </Card>
    </div>
  </div>
</template>

<script>
  import Card from '../components/Card'

  export default {
    components: {
      Card
    }
  }
</script>
