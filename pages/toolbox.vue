<template>
  <div>
    <div class="flex flex-wrap -mx-4 mb-8">
      <div class="w-full xl:w-3/5 px-4">
        <Card class="flex items-start mb-8 pr-4 bg-primary-light">
          <div class="flex-grow">
            <h2 class="heading mb-4">Bienvenue Margot !</h2>
            <p class="max-w-sm"><strong>Retrouvez des astuces et solutions pour vous aider au quotidien !</strong>
              Ensemble, réduisons la pollution 🌎</p>
          </div>
          <div>
            <img src="/images/dame.svg" />
          </div>
        </Card>

        <Card class="bg-white mb-8 xl:mb-0">
          <h2 class="heading mb-4">S’informer</h2>
          <div class="flex items-center">
            <img class="w-40 -ml-6 mr-10"
                 src="/images/book.png"
                 alt="illustration d'un livre">

            <div>
              <p class="text-sm font-medium">Retrouvez différents documents et guides pour vous aider à
                améliorer vos démarches quotidiennes.
                Des guides pour vos pratiques numériques quotidiennes</p>
              <button class="btn inline-flex items-center mt-3 ml-10">
                <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
                </svg>
                <span>Télécharger la documentation</span>
              </button>
            </div>
          </div>

        </Card>
      </div>

      <div class="w-full xl:w-2/5 flex px-4">
        <Card class="flex flex-col bg-primary-light">
          <h2 class="heading mb-4">Quiz ! </h2>
          <div class="flex-grow flex flex-col justify-evenly">
            <p class="text-center text-base mb-10">Regarder une heure de vidéo en streaming sur son téléphone portable consomme t’il autant qu'un frigidaire pendant un an ?</p>
            <div class="flex justify-center">
              <button class="btn w-32 mr-4">Faux</button>
              <button class="btn w-32">Vrai</button>
            </div>
          </div>

        </Card>
      </div>
    </div>

    <Card class="pr-0 bg-white overflow-hidden">
      <h2 class="heading mb-4">Le saviez-vous ?</h2>

      <div class="flex">
        <div class="flex flex-col flex-grow">
          <div class="flex items-center mt-6">
            <img class="mr-2" src="/images/feuilleRouge.svg" />
            <p class="max-w-lg ml-2 text-sm font-semibold">Un envoi de mail provoque une émission de CO2 entre 4g et 50g. 60% des mails restent non lus. </p>
          </div>
          <div class="flex items-center mt-6">
            <img class="mr-2" src="/images/feuilleOrange.svg" />
            <p class="max-w-lg ml-2 text-sm">
              <span class="font-semibold">47% des émissions de gaz à effet de serre</span> produit par le numérique sont dues aux équipements des consommateurs (ordinateurs, smartphones, tablettes, objets connectés, GPS…)
            </p>
          </div>
          <div class="flex items-center mt-6">
            <img class="mr-2" src="/images/feuilleRouge.svg" />
            <p class="max-w-lg ml-2 text-sm">
              <span class="font-semibold">15 000 km</span> c'est la distance moyenne parcourue par une donnée numérique (mail, téléchargement, vidéo, requête web…)
            </p>
          </div>
          <div class="flex items-center mt-6">
            <img class="mr-2" src="/images/feuilleVert.svg" />
            <p class="max-w-lg ml-2 text-sm font-semibold">89% des français utilisent Internet dont 80 % tous les jours, en moyenne 18h par semaine</p>
          </div>
          <div class="flex items-center mt-6">
            <img class="mr-2" src="/images/feuilleVert.svg" />
            <p class="max-w-lg ml-2 text-sm">Passer de
              <span class="font-semibold">2 à 4 ans d’usage</span> pour une tablette ou un ordinateur améliore de
              <span class="font-semibold">50% son bilan environnemental</span>. </p>
          </div>
          <div class="flex items-center mt-6">
            <img class="mr-2" src="/images/feuilleOrange.svg" />
            <p class="max-w-lg ml-2 text-sm font-semibold">Il faut 10g de CO2 pour un an de stockage en moyenne pour un mail.</p>
          </div>

        </div>

        <div class="-mr-3 self-end">
          <img src="/images/lecture.svg" />
        </div>
      </div>
    </Card>

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
