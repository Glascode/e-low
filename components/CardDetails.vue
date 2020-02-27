<template>
  <Card class="mb-8 bg-white">
    <h2 class="heading mb-4">Détails conso.</h2>

    <div class="mb-6 font-bold">
      <div v-for="service in services"
           class="flex items-center">
        <div class="progress-bar w-1/2">
          <div class="progress"
               :class="[percentage(service.usage, service.baseUsage) < 50 ? 'bg-primary' :
                        percentage(service.usage, service.baseUsage) < 75 ? 'bg-orange-400' : 'bg-red-600']"
               :style="{width: percentage(service.usage, service.baseUsage) + '%'}"></div>
        </div>
        <div class="w-1/2 ml-2">{{ service.name }} – {{ service.usage }} <span>/  {{ service.baseUsage }}</span></div>
      </div>
    </div>

    <div class="flex">
      <div class="mr-4 py-2 px-8 text-primary bg-primary-light rounded-lg">
        <h2 class="heading">2.42 Go</h2>
        <div>économisés</div>
      </div>

      <div class="flex flex-col justify-evenly font-bold">
        <div class="flex items-center">
          <span class="w-2 h-2 bg-gray-300 rounded-full mr-2" /> Données théoriques
        </div>
        <div class="flex items-center">
          <div class="flex items-center mr-2">
            <span class="w-2 h-2 bg-primary rounded-full z-30" />
            <span class="w-2 h-2 bg-orange-400 rounded-full -ml-1 z-20" />
            <span class="w-2 h-2 bg-red-600 rounded-full -ml-1 zind-10" />
          </div> Données consommées
        </div>
      </div>
    </div>
  </Card>
</template>

<script>
  import Card from './Card'

  export default {
    components: {
      Card
    },

    data() {
      return {
        services: [
          { name: 'YouTube', usage: 1049, baseUsage: 5260 },
          { name: 'Dribble', usage: 789, baseUsage: 5260 },
          { name: 'Cdiscount', usage: 819, baseUsage: 5260 },
          { name: 'Unsplash', usage: 819, baseUsage: 5260 },
          { name: 'Twitter', usage: 819, baseUsage: 5260 },
          { name: 'Netflix', usage: 4420, baseUsage: 6980 },
          { name: 'Facebook', usage: 819, baseUsage: 5260 }
        ]
      }
    },

    methods: {
      percentage(usage, baseUsage) {
        return usage * 100 / baseUsage
      }
    }
  }
</script>
