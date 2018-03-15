<template>
  <div id="app">
<table-component
     :data="tableData"
     sort-by="total"
     sort-order="desc"
     >
     <table-column show="appId" label="Application ID"></table-column>
     <table-column show="providing" label="Providing to" data-type="numeric"></table-column>
     <table-column show="consuming" label="Consumed by" data-type="numeric"></table-column>
     <table-column show="total" label="Total number" data-type="numeric"></table-column>
 </table-component>
  </div>
</template>

<script>
import Vue from 'vue'
import TableComponent from 'vue-table-component'

Vue.use(TableComponent)

export default {
  name: 'App',
  data () {
    return {
      tableData: [
        { appId: '1', providing: 0, consuming: 1, total: 1 },
        { appId: '2', providing: 2, consuming: 0, total: 2 },
        { appId: '3', providing: 0, consuming: 1, total: 1 }
      ]
    }
  },

  mounted () {
    this.$lx.init().then(setup => {
      this.$lx.ready({})
    })
  }
}
</script>

<style lang="stylus" scoped>
@import './stylus/main'
#app
  display flex
  flex-flow row
  justify-content center
  height calc(100vh - 1rem)
  padding 1rem
  box-sizing border-box
</style>

<style lang="stylus">
  @import '~@/stylus/table-component'
  $max-column-width = 500px
  $link-color = #009fdf
  cell-elipsis()
    max-width $max-column-width
    text-overflow ellipsis
    white-space nowrap !important
  .table-component
    position relative
    width 95%
  .table-component__filter
    position absolute
    z-index 20
    display flex
    justify-content flex-end
  .table-component__table-wrapper
    margin-top 50px
    border-right none
  .table-header
    th
      padding 2px 4px !important
  .table-body
    tr
      td
        padding 0 4px !important
  .cell-numeric
    text-align right
</style>
