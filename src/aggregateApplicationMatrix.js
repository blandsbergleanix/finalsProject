export default function aggregateApplicationMatrix (providingMultimap, consumingMultimap) {
  var aggregatedMultimap = {}
  // create list of applications from providerMultimap, add number of provided applications
  Object.keys(providingMultimap).forEach(provider => {
    aggregatedMultimap[provider] = {providing: providingMultimap[provider].length, consuming: 0, total: 0, name: ''}
  })
  // add missing applications from consumerMultimap, add number of consumed applications
  Object.keys(consumingMultimap).forEach(consumer => {
    if (aggregatedMultimap[consumer] === undefined) {
      aggregatedMultimap[consumer] = { providing: 0, consuming: consumingMultimap[consumer].length, total: 0, name: '' }
    } else {
      aggregatedMultimap[consumer].consuming = consumingMultimap[consumer].length
    }
  })
  // add sum of connected applications to application
  Object.keys(aggregatedMultimap).forEach(application => {
    aggregatedMultimap[application].total = aggregatedMultimap[application].providing + aggregatedMultimap[application].consuming
  })

  return aggregatedMultimap
}

// module.exports = aggregateApplicationMatrix
