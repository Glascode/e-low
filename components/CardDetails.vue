<template>
  <Card class="mb-8 bg-white">
    <div class="flex items-center justify-between mb-4">
      <h2 class="heading">Détails conso.</h2>
      <button @click="open = !open"
              class="text-gray-500">
        <span v-if="!open">
          <svg width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.20792 9.23216L0.328386 2.3524C-0.109461 1.91477 -0.109461 1.20521 0.328386 0.767792C0.765844 0.330333 1.47536 0.330333 1.91278 0.767792L8.00012 6.85532L14.0872 0.767968C14.5249 0.33051 15.2343 0.33051 15.6718 0.767968C16.1094 1.20543 16.1094 1.91494 15.6718 2.35258L8.79214 9.23234C8.5733 9.45107 8.2868 9.56031 8.00015 9.56031C7.71336 9.56031 7.42665 9.45086 7.20792 9.23216Z" fill="currentColor" />
          </svg>
        </span>
        <span v-else>
          <svg width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.79208 0.767837L15.6716 7.6476C16.1095 8.08523 16.1095 8.79479 15.6716 9.23221C15.2342 9.66967 14.5246 9.66967 14.0872 9.23221L7.99988 3.14468L1.91276 9.23203C1.47513 9.66949 0.765684 9.66949 0.328226 9.23203C-0.109409 8.79457 -0.109409 8.08506 0.328226 7.64742L7.20786 0.767659C7.4267 0.54893 7.7132 0.439689 7.99985 0.439689C8.28664 0.439689 8.57335 0.549143 8.79208 0.767837Z" fill="currentColor" />
          </svg>
        </span>

      </button>
    </div>

    <div class="mb-6 font-semibold">
      <div v-for="service in services"
           class="flex items-center mb-3">
        <div class="progress-bar w-1/2 dark:bg-gray-700">
          <div class="progress"
               :class="[percentage(service.usage, service.baseUsage) < 50 ? 'bg-primary' :
                        percentage(service.usage, service.baseUsage) < 75 ? 'bg-orange-400' : 'bg-red-600']"
               :style="{width: percentage(service.usage, service.baseUsage) + '%'}"></div>
        </div>
        <div class="w-1/2 ml-3">{{ service.name }} – {{ service.usage }}&nbsp;Go
          <span class="text-gray-500">/  {{ service.baseUsage }}&nbsp;Go</span></div>
      </div>
      <div v-for="index in 5"
           :class="{'open': open}"
           class="card-details">
        <div v-for="service in services"
             class="flex items-center mb-3">
          <div class="progress-bar w-1/2 dark:bg-gray-700">
            <div class="progress"
                 :class="[percentage(service.usage, service.baseUsage) < 50 ? 'bg-primary' :
                        percentage(service.usage, service.baseUsage) < 75 ? 'bg-orange-400' : 'bg-red-600']"
                 :style="{width: percentage(service.usage, service.baseUsage) + '%'}"></div>
          </div>
          <div class="w-1/2 ml-3">{{ service.name }} – {{ service.usage }}&nbsp;Go
            <span class="text-gray-500">/  {{ service.baseUsage }}&nbsp;Go</span></div>
        </div>
      </div>
    </div>

    <div class="flex">
      <div class="mr-4 py-2 px-8 text-primary bg-primary-light rounded-lg dark:bg-dark-bg">
        <h2 class="heading">5.67&nbsp;Go</h2>
        <div>économisés</div>
      </div>

      <div class="flex flex-col justify-evenly font-bold">
        <div class="flex items-center">
          <span class="bullet bg-gray-300 mr-2" /> Données théoriques
        </div>
        <div class="flex items-center">
          <div class="flex items-center mr-2">
            <span class="bullet bg-primary" />
            <span class="bullet bg-orange-400" />
            <span class="bullet bg-red-600" />
          </div>
          Données consommées
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
        open: false,
        services: [
          { name: 'YouTube', usage: 2.3, baseUsage: 5.24 },
          { name: 'Dribble', usage: 0.59, baseUsage: 1.01 },
          { name: 'Cdiscount', usage: 1.79, baseUsage: 2 },
          { name: 'Unsplash', usage: 0.32, baseUsage: 0.9 },
          { name: 'Twitter', usage: 0.5, baseUsage: 1.37 }
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
