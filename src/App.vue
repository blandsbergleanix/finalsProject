<template>
  <div id='app'>
    <bar-chart class="card" :chartData="tableData" :width="800"/>
    <table-component
        :data='tableData'
        sort-by='total'
        sort-order='desc'
        >
        <table-column show='appName' label='Application ID'></table-column>
        <table-column show='providing' label='Providing to' data-type='numeric'></table-column>
        <table-column show='consuming' label='Consumed by' data-type='numeric'></table-column>
        <table-column show='total' label='Total number' data-type='numeric'></table-column>
    </table-component>
  </div>
</template>

<script>
import Vue from 'vue'
import BarChart from './components/barchart'
import TableComponent from 'vue-table-component'
import graphqlQueries from './graphqlQueries'
import mergeTableData from './mergeTableData'
import mapResultData from './mapResultData'
import service from './service'

Vue.use(TableComponent)

export default {
  name: 'App',
  components: {BarChart},
  data () {
    return {
      mergedTableData: []
    }
  },
  computed: {
    tableData () {
      const tableData = mapResultData(this.mergedTableData)
      return tableData
    }
  },

  methods: {
    getInterfaces () {
      return new Promise((resolve, reject) => {
        this.$lx.executeGraphQL(graphqlQueries.LISTOFINTERFACES, {factSheetType: 'Interface'})
          .then(res => {
            const graphQLMappedData = res.allFactSheets.edges
              .map(edge => edge.node)
              .reduce((accumulator, factSheet) => {
                const providedBy = factSheet.relInterfaceToProviderApplication.edges
                  .map(edge => edge.node.factSheet.id)
                  .shift()
                const consumedBy = factSheet.relInterfaceToConsumerApplication.edges.map(
                  edge => edge.node.factSheet.id
                )
                accumulator.push({ id: factSheet.id, providedBy, consumedBy })
                return accumulator
              }, [])
            const serviceResults = service(graphQLMappedData)
            const ids = serviceResults.ids
            this.graphQLData = serviceResults.result
            resolve({ids, mappedData: this.graphQLData})
          })
          .catch(err => reject(err))
      })
    },
    getApplications (ids) {
      return new Promise((resolve, reject) => {
        // initiates API call
        this.$lx.executeGraphQL(graphqlQueries.LISTOFAPPLICATIONS, {filter: {ids}})
          // promise "fulfilled"
          .then(result => {
            const listOfApps = result.allFactSheets.edges
              .map(edge => edge.node)
              .reduce((accumulator, node) => {
                accumulator[node.id] = node.name
                return accumulator
              }, {})
            resolve(listOfApps)
          })
          // promise "rejected"
          .catch(err => reject(err))
      })
    }
  },
  mounted () {
    this.$lx.init().then(setup => {
      this.$lx.ready({allowTableView: false})
    })

    let graphQLMappedData = []

    this.getInterfaces()
      .then(({ids, mappedData}) => {
        graphQLMappedData = mappedData
        return this.getApplications(ids)
      })
      .then(listOfApps => {
        this.mergedTableData = mergeTableData(graphQLMappedData, listOfApps)
      })
      .catch(err => console.log(err))
  }
}
</script>

<style lang='stylus' scoped>
@import './stylus/main'
@import './stylus/material-color'

#app {
  display: flex
  flex-flow: column
  justify-content: space-around
  align-items center
  padding: 1rem
  box-sizing: border-box
}

</style>

<style lang='stylus'>
@import './stylus/table-component'
.table-component__table
  width 100%
</style>
