<script>
import { Bar } from 'vue-chartjs'
import 'chartjs-plugin-datalabels'

export default {
  extends: Bar,
  props: ['chartData'],
  data () {
    return {
      labels: [],
      datasets: [
        {
          label: 'Applications provided',
          backgroundColor: 'green',
          data: []
        },
        {
          label: 'Applications consumed',
          backgroundColor: 'red',
          data: []
        }
      ]
    }
  },
  watch: {
    chartData: function (val) {
      const sortingFunction = (a, b) => b.total - a.total
      const data = val.sort(sortingFunction)
        .slice(0, 5)
        .reduce((accumulator, application) => {
          Object.keys(accumulator).forEach(key => accumulator[key].push(application[key]))
          return accumulator
        }, { appName: [], providing: [], consuming: [] })
      this.labels = data.appName
      this.datasets[0].data = data.providing
      this.datasets[1].data = data.consuming
      this.$data._chart.data = { labels: this.labels, datasets: this.datasets }
      this.$data._chart.update()
    }
  },
  mounted () {
    // Overwriting base render method with actual data.
    this.renderChart({
      labels: this.labels,
      datasets: this.datasets
    }, {
      plugins: {
        datalabels: {
          color: 'white',
          opacity: 0.9,
          display: this.displayLabels,
          formatter: (value, ctx) => {
            return `${value}`
          }
        }
      },
      scales: {
        xAxes: [
          {
            stacked: true,
            ticks: {
              autoSkip: false
            }
          }
        ],
        yAxes: [
          {
            stacked: true
          }
        ]
      }
    })
  }
}
</script>
