function mapResultData (aggregatedMultimap) {
  var mappedMultimap = []
  Object.keys(aggregatedMultimap).forEach(application => {
    mappedMultimap.push({
      appId: application,
      providing: aggregatedMultimap[application].providing,
      consuming: aggregatedMultimap[application].consuming,
      total: aggregatedMultimap[application].total
    })
  })
  return mappedMultimap
}

module.exports = mapResultData
