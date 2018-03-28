export default function getApplicationIds (providingMultiMap, consumingMultimap) {
  let applicationIds = []
  Object.keys(providingMultiMap).forEach(application => {
    applicationIds.push(application)
  })
  Object.keys(consumingMultimap).forEach(application => {
    if (!applicationIds.includes(application)) {
      applicationIds.push(application)
    }
  })
  return applicationIds
}
