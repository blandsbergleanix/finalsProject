export default function mapResultData (aggregatedMultimap) {
  var mappedMultimap = []
  Object.keys(aggregatedMultimap).forEach(application => {
    mappedMultimap.push({
      appName: aggregatedMultimap[application].name,
      providing: aggregatedMultimap[application].providing,
      consuming: aggregatedMultimap[application].consuming,
      total: aggregatedMultimap[application].total
    })
  })
  return mappedMultimap
}
