<template>
  <Card class="flex flex-col pr-0 pb-0 bg-white dark:bg-dark-fg">
    <h2 class="heading mb-4">Réductions de 5€</h2>
    <div class="flex flex-wrap -mx-4">
      <div v-for="index in 6"
           class="w-full md:w-1/3 px-4">
        <Card class="flex flex-col items-center w-64 mb-8 bg-white ">
          <div class="flex">
            <div class="flex flex-col flex-grow items-center">
              <img src="/images/logoBackmarket.png" />
              <p class="max-w-lg ml-2 text-base text-center"><strong>5€</strong> de réduction (500 points) </p>
              <button class="justify-center w-32 bg-primary hover:bg-primary-dark text-white text-base font-bold mt-12 py-2 px-3 rounded-xl inline-flex items-center">J’en profite !
              </button>
            </div>
          </div>
        </Card>
      </div>
    </div>

    <h2 class="heading mb-4">Réductions de 10€</h2>
    <div class="flex flex-wrap -mx-4">
      <div v-for="index in 6"
           class="w-full md:w-1/3 px-4">
        <Card class="flex flex-col items-center w-64 mb-8 bg-white ">
          <div class="flex">
            <div class="flex flex-col flex-grow items-center">
              <img src="/images/logoBackmarket.png" />
              <p class="max-w-lg ml-2 text-base text-center"><strong>10€</strong> de réduction (1000 points) </p>
              <button class="justify-center w-32 bg-primary hover:bg-primary-dark text-white text-base font-bold mt-12 py-2 px-3 rounded-xl inline-flex items-center">J’en profite !
              </button>
            </div>
          </div>
        </Card>
      </div>
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
