export default function aggregateApplicationMatrix (aggregatedMultimap, listOfApps) {
  // console.log(listOfApps['a78bb927-eeb8-4c68-a1ca-22ac1096b92b'])
  // console.log('LIST APPS', Object.keys(listOfApps).length, Object.keys(aggregatedMultimap).length)
  // const appIDs = Object.keys(listOfApps).sort()
  // const aggregatedMultiMapIDs = Object.keys(aggregatedMultimap).sort()
  // console.log('MAP', aggregatedMultiMapIDs, 'IDS', appIDs)
  Object.keys(aggregatedMultimap).forEach(applicationId => {
    aggregatedMultimap[applicationId].name = listOfApps[applicationId]
  })
  // console.log(aggregatedMultimap)
  return aggregatedMultimap
}
