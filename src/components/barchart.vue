<script>
import { Bar } from 'vue-chartjs'
import 'chartjs-plugin-datalabels'

export default {
  extends: Bar,
  mounted () {
    // Overwriting base render method with actual data.
    this.renderChart({
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      datasets: [
        {
          label: 'Applications provided',
          backgroundColor: 'green',
          data: [40, 20, 12, 39, 10, 40, 39, 80, 40, 20, 12, 11]
        },
        {
          label: 'Applications consumed',
          backgroundColor: 'red',
          data: [40, 20, 12, 39, 10, 40, 39, 80, 40, 20, 12, 11]
        }
      ]
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
            stacked: true
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
