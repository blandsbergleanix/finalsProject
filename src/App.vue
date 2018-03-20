<template>
  <div id='app'>

<table-component
     :data='tableData'
     sort-by='total'
     sort-order='desc'
     >
     <table-column show='appId' label='Application ID'></table-column>
     <table-column show='providing' label='Providing to' data-type='numeric'></table-column>
     <table-column show='consuming' label='Consumed by' data-type='numeric'></table-column>
     <table-column show='total' label='Total number' data-type='numeric'></table-column>
 </table-component>

 <!--
   <pre>{{graphQLData}}</pre>
  <pre>{{graphQLMappedData}}</pre>
 -->
  </div>
</template>

<script>
import Vue from 'vue'
import TableComponent from 'vue-table-component'
import graphqlQueries from './graphqlQueries'
import mapResultData from './mapResultData'
import controller from './controller'

Vue.use(TableComponent)

export default {
  name: 'App',
  data () {
    return {
      graphQLMappedData: []
    }
  },
  // TODO: rename controller to service
  computed: {
    tableData () {
      const computedResult = controller(this.graphQLMappedData)
      const tableData = mapResultData(computedResult)
      return tableData
    }
  },
  mounted () {
    this.$lx.init().then(setup => {
      this.$lx.ready({})
    })
    const variables = {
      factSheetType: 'Interface'
    }
    this.$lx
      .executeGraphQL(graphqlQueries.ALLFACTSHEETS, variables)
      .then(res => {
        this.graphQLData = res
        this.graphQLMappedData = res.allFactSheets.edges
          .map(edge => edge.node)
          .reduce((accumulator, factSheet) => {
            const providedBy = factSheet.relInterfaceToProviderApplication.edges.map(edge => edge.node.factSheet.id).shift()
            const consumedBy = factSheet.relInterfaceToConsumerApplication.edges.map(edge => edge.node.factSheet.id)
            accumulator.push({ id: factSheet.id, providedBy, consumedBy })
            return accumulator
          }, [])
      })
      .catch(err => {
        this.graphQLData = err
      })
  }
}
</script>

<style lang='stylus' scoped>
@import './stylus/main'

#app {
  display: flex
  flex-flow: row
  justify-content: space-around;
  height: calc(100vh - 1rem)
  padding: 1rem;
  box-sizing: border-box
}
</style>

<style lang='stylus'>
@import './stylus/table-component'
.table-component__table
  width 100%
</style>
