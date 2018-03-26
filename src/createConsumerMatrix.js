export default function createConsumerMatrix (providingMultimap) {
  var consumingMultimap = {}
  Object.keys(providingMultimap).forEach(providerId => {
    var consumerIds = providingMultimap[providerId]
    consumerIds.forEach(consumerId => {
      if (consumingMultimap[consumerId] === undefined) {
        // add provider as new array
        consumingMultimap[consumerId] = [providerId]
      } else {
        // add provider to existing array
        consumingMultimap[consumerId].push(providerId)
      }
    })
  })
  return consumingMultimap
}
