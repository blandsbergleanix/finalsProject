export default function aggregateApplicationMatrix (aggregatedMultimap, listOfApps) {
  Object.keys(aggregatedMultimap).forEach(applicationId => {
    aggregatedMultimap[applicationId].name = listOfApps[applicationId]
  })
  return aggregatedMultimap
}
