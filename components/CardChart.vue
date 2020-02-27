<template>
  <Card class="mb-8 bg-white">
    <TrendChart
        :datasets="datasets"
        :grid="{ verticalLines: true, horizontalLines: true }"
        :labels="{
            xLabels: chartXLabelsDay,
            yLabels: 5
          }"
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
        datasets: [
          {
            data: [10, 50, 20, 100, 40, 60, 80],
            smooth: true,
            fill: true
          }
        ],
        chartDataDay: [10, 50, 20, 100, 40, 60, 80],
        chartXLabelsDay: [1, 2, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24]
      }
    }
  }
</script>
