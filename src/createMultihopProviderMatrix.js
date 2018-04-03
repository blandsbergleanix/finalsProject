export default function createMultihopProviderMatrix (providingMultimap) {
  /*
  const getConsumers = ({ consumer, providingMultimap, accumulator}) => {
    accumulator = new Set([...accumulator])
    const consumers = new Set([...(providingMultimap[consumer] || [])])
    const difference = new Set([...consumers].filter(consumer => !accumulator.has(consumer)))
    // compare with accumulator, if there is a difference, call getConsumers for each different consumer

  }

  providingMultimap = Object.keys(providingMultimap)
    .reduce((accumulator, provider) => {
      const allConsumers = (Object.values(provider) || [])
        .filter(consumer => providingMultimap.hasOwnKey(consumer))
        .reduce((accumulator, consumer) => {
          const consumers = providingMultimap[consumer]
          accumulator = Array.from(new Set([...accumulator, ...consumers]))
          return accumulator
        }, [])
      accumulator[provider] = Array.from(new Set([...accumulator, allConsumers]))
      return accumulator
    }, providingMultimap)
  */

  let changesOccured = true
  while (changesOccured === true) {
    // cycle through providers
    Object.keys(providingMultimap).forEach(provider => {
      // cycle through values of providers (consumers)
      (providingMultimap[provider] || []).forEach(consumer => {
      // cycles through values of provided appplications (consumer values)
        providingMultimap[consumer].forEach(consumerValue => {
          if (consumerValue === provider) { return }
          if (providingMultimap[provider].indexOf(consumerValue) > -1) {
            changesOccured = false
          } else {
            providingMultimap[provider].push(consumerValue)
          }
        })
      })
    })
  }

  return providingMultimap
}
