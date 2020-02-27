<template>
  <Card class="mb-8 bg-white">
    <div class="flex flex-wrap items-center justify-between mb-4">
      <h2 class="heading mr-2">Consommation</h2>

      <div class="flex items-center">
        <button v-for="chart in charts"
                @click="activeChartId = chart.id"
                :class="[chart.id === activeChartId ? 'text-white bg-primary' : 'bg-primary-light']"
                class="ml-2 first:ml-0 px-4 font-bold leading-loose rounded-full">{{ chart.name }}
        </button>
        <button class="ml-2 px-4 font-bold bg-primary-light leading-loose rounded-full">1m</button>
        <button class="ml-2 px-4 font-bold bg-primary-light leading-loose rounded-full">3m</button>
        <button class="ml-2 px-4 font-bold bg-primary-light leading-loose rounded-full">6m</button>
      </div>
    </div>

    <div>
      <svg style="width:0; height:0; position:absolute;" aria-hidden="true" focusable="false">
        <defs>
          <linearGradient id="theoreticalFill" x1="1" x2="1" y1="0" y2="1">
            <stop offset="0%" stop-color="#f56565" />
            <stop offset="100%" stop-color="#ffffff" />
          </linearGradient>
         <linearGradient id="actualFill" x1="1" x2="1" y1="0" y2="1">
            <stop offset="0%" stop-color="#26a69a" />
            <stop offset="100%" stop-color="#ffffff" />
          </linearGradient>
        </defs>
      </svg>
      <TrendChart
          class="chart"
          :datasets="datasets"
          :grid="{ verticalLines: true, horizontalLines: true }"
          :labels="labels"
          :min="0" />
    </div>
  </Card>
</template>

<script>
  import Card from './Card'
  import TrendChart from 'vue-trend-chart'

  export default {
    components: {
      Card,
      TrendChart
    },

    data() {
      return {
        activeChartId: 'day',
        charts: {
          day: {
            id: 'day',
            name: '1j',
            datasets: [
              {
                data: [0, 0, 0.5, 0.1, 0.8, 0.1, 1.34, 2, 0.9],
                smooth: true,
                fill: true,
                className: 'chart-theoretical'
              },
              {
                data: [0, 0, 0.3, 0.05, 0.5, 0, 0.82, 1.4, 0.4],
                smooth: true,
                fill: true,
                className: 'chart-actual'
              }
            ],
            labels: {
              xLabels: ['00', '06', '12', '18', '24'],
              yLabels: 5,
              yLabelsTextFormatter: val => Math.round(val * 10) / 10 + ' Go'
            }
          },

          week: {
            id: 'week',
            name: '7j',
            datasets: [
              {
                data: [3.1, 3.2, 3.1, 2.5, 6.1, 9.2, 9.6],
                smooth: true,
                fill: true,
                className: 'chart-theoretical'
              },
              {
                data: [2.1, 2.2, 2.1, 1.5, 4.1, 6.4, 7.3],
                smooth: true,
                fill: true,
                className: 'chart-actual'
              }
            ],
            labels: {
              xLabels: ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'],
              yLabels: 5,
              yLabelsTextFormatter: val => Math.round(val * 10) / 10 + ' Go'
            }
          }
        }
      }
    },

    computed: {
      datasets() {
        return this.charts[this.activeChartId].datasets
      },

      labels() {
        return this.charts[this.activeChartId].labels
      }
    }
  }
</script>
