<template>
  <Card class="mb-8 bg-white">
    <div class="flex items-center justify-between mb-4">
      <h2 class="heading">Consommation</h2>

      <div class="flex items-center">
        <button v-for="chart in charts"
                @click="activeChartId = chart.id"
                :class="[chart.id === activeChartId ? 'text-white bg-primary' : 'bg-primary-light']"
                class="ml-2 px-4 font-bold leading-relaxed rounded-full">{{ chart.name }}
        </button>
      </div>
    </div>

    <TrendChart
        class="chart"
        :datasets="datasets"
        :grid="{ verticalLines: true, horizontalLines: true }"
        :labels="labels"
        :min="0" />
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
                data: [0.1, 0.5, 0.2, 0.1, 0.4, 0.6, 0.39, 0.94],
                smooth: true,
                fill: true,
                className: 'chart-theoretical'
              },
              {
                data: [0, 0.3, 0.1, 0, 0.3, 0.3, 0.1, 0.5],
                smooth: true,
                fill: true,
                className: 'chart-actual'
              }
            ],
            labels: {
              xLabels: ['00', '06', '12', '18'],
              yLabels: 5,
              yLabelsTextFormatter: val => Math.round(val * 10) / 10
            }
          },
          week: {
            id: 'week',
            name: '7j',
            datasets: [
              {
                data: [10, 50, 20, 100, 40, 60, 80],
                smooth: true,
                fill: true
              }
            ],
            labels: {
              xLabels: ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'],
              yLabels: 5,
              yLabelsTextFormatter: val => Math.round(val * 10) / 10
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

<style scoped>
  .chart {
    height: 10rem;
  }
</style>
